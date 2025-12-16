#!/bin/bash
# Vismar Aqua - Backup WordPress Database and Files

set -e

BACKUP_DIR="../backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="vismar_backup_${TIMESTAMP}"

echo "======================================"
echo "Backing up Vismar Aqua..."
echo "======================================"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "📦 Creating database backup..."
cd ..
docker-compose -f docker/docker-compose.yml exec -T db mysqldump \
    -u wordpress \
    -pwordpress \
    wordpress > "${BACKUP_DIR}/${BACKUP_NAME}.sql"

echo "🗜️  Compressing database backup..."
gzip "${BACKUP_DIR}/${BACKUP_NAME}.sql"

echo "📁 Backing up WordPress uploads..."
if [ -d "wordpress/wp-content/uploads" ]; then
    tar -czf "${BACKUP_DIR}/${BACKUP_NAME}_uploads.tar.gz" \
        -C wordpress/wp-content uploads
fi

echo ""
echo "✅ Backup completed successfully!"
echo ""
echo "Backup files:"
echo "  - ${BACKUP_DIR}/${BACKUP_NAME}.sql.gz"
echo "  - ${BACKUP_DIR}/${BACKUP_NAME}_uploads.tar.gz"
echo ""
echo "To restore:"
echo "  gunzip ${BACKUP_DIR}/${BACKUP_NAME}.sql.gz"
echo "  docker-compose -f docker/docker-compose.yml exec -T db mysql -u wordpress -pwordpress wordpress < ${BACKUP_DIR}/${BACKUP_NAME}.sql"
echo ""
