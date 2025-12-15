# WordPress Media Files Deployment Guide

The WordPress media files (images, documents, etc.) are stored separately from the code repository due to their large size (300MB).

## Media Files Overview

- **Location:** `wordpress/wp-content/uploads/`
- **Size:** 300MB (1,690 files)
- **Content:** Images from 2015-2025, organized by year
- **Status:** Ready for deployment

## Options for Deploying Media Files

### Option 1: Direct SSH SCP Transfer (Recommended for small updates)

Transfer media files to your production server:

```bash
# From your local machine (where you have the files)
scp -r /path/to/wordpress/wp-content/uploads user@your-domain.com:/var/www/vismar-aqua/wordpress/wp-content/

# Or use rsync for resume capability
rsync -avz --progress /path/to/wordpress/wp-content/uploads/ user@your-domain.com:/var/www/vismar-aqua/wordpress/wp-content/uploads/
```

### Option 2: Create Media Archive (Recommended for full deployment)

**On your local machine:**

```bash
# Create compressed archive of all media
cd /path/to/wordpress/wp-content
tar -czf uploads.tar.gz uploads/

# Transfer to server
scp uploads.tar.gz user@your-domain.com:/var/www/vismar-aqua/
```

**On your production server:**

```bash
cd /var/www/vismar-aqua/wordpress/wp-content

# Extract media files
tar -xzf ../../uploads.tar.gz

# Set proper permissions
sudo chown -R www-data:www-data uploads/
sudo chmod -R 755 uploads/
```

### Option 3: Use S3/Cloud Storage (Best for large deployments)

Upload media to AWS S3 or similar:

```bash
# Install AWS CLI
sudo apt-get install awscli

# Configure AWS credentials
aws configure

# Upload media to S3
aws s3 sync /path/to/wordpress/wp-content/uploads s3://your-bucket/vismar-aqua/uploads --delete

# On production server, configure WordPress to use S3
# Install: WP Offload Media or similar plugin
```

Update WordPress `wp-config.php` or use environment variables to use S3 CDN.

### Option 4: Docker Volume Sync

If using Docker, sync volumes before deployment:

```bash
# On local machine with Docker
docker run --rm -v /path/to/wordpress/wp-content/uploads:/uploads -v ssh-key:/root/.ssh alpine sh -c "
  apk add openssh-client rsync
  rsync -avz /uploads/ user@your-domain.com:/var/www/vismar-aqua/wordpress/wp-content/uploads/
"
```

## Step-by-Step Deployment (Option 1 - Recommended)

### 1. Verify Media Files Exist Locally

```bash
ls -lh /path/to/wordpress/wp-content/uploads/
# Should show directories: 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
```

### 2. SSH to Production Server

```bash
ssh user@your-production-domain.com
cd /var/www/vismar-aqua
```

### 3. Create Uploads Directory if Needed

```bash
sudo mkdir -p wordpress/wp-content/uploads
sudo chown -R $(whoami):$(whoami) wordpress/wp-content/
```

### 4. Transfer Files from Local Machine

```bash
# From your local machine
rsync -avz --progress /path/to/wordpress/wp-content/uploads/ user@your-domain.com:/var/www/vismar-aqua/wordpress/wp-content/uploads/
```

### 5. Fix Permissions on Server

```bash
# SSH to server
ssh user@your-domain.com

# Navigate to uploads
cd /var/www/vismar-aqua/wordpress/wp-content

# Set permissions so WordPress can access
sudo chown -R www-data:www-data uploads/
sudo chmod -R 755 uploads/
```

### 6. Verify in WordPress Admin

- Log in to WordPress admin: `https://your-domain.com/wp-admin`
- Go to **Media** → **Library**
- You should see all 1,690 media files
- Test clicking on an image to verify it loads

### 7. Verify Images Display on Frontend

- Go to blog post: `https://your-domain.com/blog`
- Images should load correctly
- Check browser console for any missing image errors

## Troubleshooting

### Images Not Showing

1. **Check file permissions:**
   ```bash
   ls -la /var/www/vismar-aqua/wordpress/wp-content/uploads/
   # Should show: drwxr-xr-x (755) owned by www-data
   ```

2. **Check Docker volume mounts:**
   ```bash
   docker exec vismar-wordpress ls -la /var/www/html/wp-content/uploads/
   ```

3. **Check WordPress media URL:**
   - Admin → Settings → General
   - Site URL and WordPress URL should be correct

### Transfer Interrupted

If your rsync/scp is interrupted, you can resume:

```bash
# Resume rsync (only transfers missing/changed files)
rsync -avz --progress /path/to/wordpress/wp-content/uploads/ user@your-domain.com:/var/www/vismar-aqua/wordpress/wp-content/uploads/
```

### Storage Space Issues

Check available space on server:

```bash
# Check disk usage
df -h

# Check WordPress uploads size
du -sh /var/www/vismar-aqua/wordpress/wp-content/uploads/
```

If space is low, you may need to:
- Increase server storage
- Use cloud storage (S3)
- Delete old/unused media

## Verify Media Files Deployed

```bash
# On production server
# Check total files
find /var/www/vismar-aqua/wordpress/wp-content/uploads -type f | wc -l
# Should show: 1690

# Check total size
du -sh /var/www/vismar-aqua/wordpress/wp-content/uploads/
# Should show: 300M

# Check media in WordPress
curl -s https://your-domain.com/graphql -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ mediaItems(first: 5) { nodes { id title sourceUrl } } }"}' | head -50
```

## Automated Media Deployment Script

Create `/usr/local/bin/deploy-media.sh`:

```bash
#!/bin/bash

SOURCE_PATH="/path/to/wordpress/wp-content/uploads"
DEST_SERVER="user@your-domain.com"
DEST_PATH="/var/www/vismar-aqua/wordpress/wp-content/uploads"

echo "🚀 Deploying WordPress media files..."
echo "Source: $SOURCE_PATH"
echo "Destination: $DEST_SERVER:$DEST_PATH"

# Use rsync for efficient transfer
rsync -avz --progress --delete "$SOURCE_PATH/" "$DEST_SERVER:$DEST_PATH/"

# SSH to server and fix permissions
ssh $DEST_SERVER "sudo chown -R www-data:www-data $DEST_PATH && sudo chmod -R 755 $DEST_PATH"

echo "✅ Media deployment complete!"

# Verify
FILE_COUNT=$(ssh $DEST_SERVER "find $DEST_PATH -type f | wc -l")
echo "📊 Transferred $FILE_COUNT media files"
```

Make executable:
```bash
chmod +x /usr/local/bin/deploy-media.sh

# Run deployment
deploy-media.sh
```

## File Structure

After deployment, your production server should have:

```
/var/www/vismar-aqua/wordpress/wp-content/uploads/
├── 2015/
│   ├── 01/
│   │   ├── image1.jpg
│   │   └── image2.png
│   └── ...
├── 2016/
│   └── ...
├── 2017/
│   └── ...
├── 2018/
│   └── ...
├── 2019/
│   └── ...
├── 2020/
│   └── ...
├── 2021/
│   └── ...
├── 2022/
│   └── ...
├── 2023/
│   └── ...
├── 2024/
│   └── ...
└── 2025/
    └── ...
```

## Backup Media Files

Regular backups ensure you don't lose media:

```bash
# Create daily backup
tar -czf /backups/media_$(date +%Y%m%d).tar.gz /var/www/vismar-aqua/wordpress/wp-content/uploads/

# Or use rsync to S3
aws s3 sync /var/www/vismar-aqua/wordpress/wp-content/uploads s3://your-backup-bucket/media/
```

---

**Note:** Media files (300MB) are not stored in GitHub due to size limits. Use one of the above options to deploy them to your production server.
