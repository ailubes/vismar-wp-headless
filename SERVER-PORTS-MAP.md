# Server Applications and Ports Map

Last updated: 2025-12-20 15:50 (Post CVE-2025-66478 Remediation)

## Nginx → Application Port Mapping

| Domain | Port | Status | Notes |
|--------|------|--------|-------|
| **vismar-aqua.com** | 8002 | ❌ NOT RUNNING | Main production site (Next.js 14) |
| **dev.vismar-aqua.com** | 8002 | ❌ NOT RUNNING | Development site (same as prod) |
| **wp.vismar-aqua.com** | N/A | ✅ PHP/WordPress | WordPress backend |
| **kievonline.net** | 3001 | ✅ RUNNING | Next.js site |
| **w.com.ua** | 3003 | ✅ RUNNING | Next.js site |
| **sudnokontrol.online** | 8000 | ✅ RUNNING | Next.js site |
| **dev.sudnokontrol.online** | 8080 | ? | Development |
| **api.sudnokontrol.online** | 3000 | ⚠️ WRONG APP | Should be API, but node dist/index.js running |
| **api-dev.sudnokontrol.online** | 3030 | ❌ NOT RUNNING | API development |
| **mimolet.com** | upstream | Docker | Uses upstream backend/frontend |
| **s3-storage.spiceup.online** | various | MinIO/S3 | Object storage |

## Currently Running Processes

### Port 3000 - ⚠️ OCCUPIED BY WRONG APP
- **Process**: `node dist/index.js` (PID: 2973690)
- **Expected**: api.sudnokontrol.online API
- **Actual**: Unknown Node.js app from dist/index.js
- **Action needed**: Kill this process

### Port 3001 - kievonline.net
- **Process**: next-server (v16.0.10)
- **Directory**: /var/www/kievonline.net (assumed)
- **Status**: ✅ Running

### Port 3002 - Python/Uvicorn
- **Process**: Python/uvicorn
- **Purpose**: Unknown Python service
- **Status**: ✅ Running

### Port 3003 - w.com.ua
- **Process**: next-server (v14.2.35)
- **Directory**: /var/www/w.com.ua (assumed)
- **Status**: ✅ Running

### Port 8000 - sudnokontrol.online
- **Process**: next-server
- **Directory**: /var/www/sudnokontrol.online (assumed)
- **Status**: ✅ Running

### Port 8001 - Unknown
- **Process**: next-server (v16.1.0-canary.19)
- **Purpose**: Unknown
- **Status**: ✅ Running (orphaned?)

### Port 8002 - vismar-aqua.com ✅ RUNNING
- **Process**: Next.js 14 (vismar-aqua-frontend)
- **Directory**: /var/www/vismar-aqua.com
- **Status**: ✅ **RUNNING** (PM2 managed as www-data user)
- **PM2 Name**: vismar-aqua

## Action Plan for vismar-aqua.com

1. Build the Next.js app: `npm run build`
2. Start on port 8002: `npm start -- -p 8002`
3. OR use PM2: `pm2 start npm --name "vismar-aqua" -- start -- -p 8002`

## PM2 Management

No processes currently managed by PM2 for www-data or root users.
Consider setting up PM2 for process management:

```bash
pm2 start npm --name "vismar-aqua" -- start -- -p 8002
pm2 save
pm2 startup
```
