# Deployment Guide - PropertyDamageSupport.com

## ✅ Production Build Complete

**Total Pages:** 814
**Build Status:** ✅ Successful
**Build Output:** Standalone (Docker-ready)

---

## Coolify Deployment

### Recommended Approach: Dockerfile

Coolify works best with a **Dockerfile** for Next.js applications. The Dockerfile is already configured and ready to use.

### Steps to Deploy on Coolify:

1. **Connect Repository**
   - Go to Coolify dashboard
   - Create new project → Select "Git Repository"
   - Connect your Git repository (GitHub/GitLab/Bitbucket)
   - Select the `propertydamagesupport` repository

2. **Configure Build Settings**
   - **Build Type:** Dockerfile
   - **Dockerfile Path:** `./Dockerfile` (auto-detected)
   - **Port:** `3000`
   - **Health Check:** `http://localhost:3000` (optional but recommended)

3. **Set Environment Variables**
   Add these in Coolify's environment variable settings:
   ```bash
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1

   # Add your production environment variables here:
   # NEXT_PUBLIC_SITE_URL=https://propertydamagesupport.com
   # Add any API keys, database URLs, etc.
   ```

4. **Deploy**
   - Click "Deploy"
   - Coolify will:
     1. Clone your repository
     2. Build the Docker image using the Dockerfile
     3. Run the container
     4. Expose it on port 3000

5. **Configure Domain**
   - Add your domain: `propertydamagesupport.com`
   - Coolify will automatically provision SSL certificate via Let's Encrypt
   - Update DNS records to point to Coolify server IP

---

## Alternative: Docker Compose (Optional)

If you prefer docker-compose, a `docker-compose.yml` file is also provided.

### Using Docker Compose:

```bash
# Build and run with docker-compose
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

In Coolify, you can also select "Docker Compose" as the build type and it will use the `docker-compose.yml` file.

---

## Manual Docker Deployment

If deploying manually without Coolify:

```bash
# Build the Docker image
docker build -t propertydamagesupport:latest .

# Run the container
docker run -d \
  -p 3000:3000 \
  --name propertydamagesupport \
  -e NODE_ENV=production \
  propertydamagesupport:latest

# View logs
docker logs -f propertydamagesupport

# Stop
docker stop propertydamagesupport
```

---

## Build Information

### Dockerfile Features:
- ✅ Multi-stage build (optimized size)
- ✅ Next.js 16 standalone output
- ✅ Node 20 Alpine (minimal footprint)
- ✅ Non-root user (security)
- ✅ Production optimized

### Build Stages:
1. **deps** - Install dependencies
2. **builder** - Build Next.js application
3. **runner** - Minimal runtime image

### Image Size:
- Base: ~200MB (Node 20 Alpine)
- Final: ~250-300MB (with dependencies)

---

## Post-Deployment Checklist

After deploying to Coolify:

- [ ] Verify all 814 pages load correctly
- [ ] Test homepage: `https://propertydamagesupport.com`
- [ ] Test sitemap: `https://propertydamagesupport.com/sitemap.xml`
- [ ] Test robots.txt: `https://propertydamagesupport.com/robots.txt`
- [ ] Test sample pages:
  - `/service-areas/houston/downtown/water-damage`
  - `/zip/77002/water-damage`
- [ ] Verify SSL certificate is active
- [ ] Update Google verification code (if not done)
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form functionality
- [ ] Monitor server resources (CPU/Memory)

---

## Environment Variables

Required production environment variables:

```bash
# Required
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Optional - Add as needed
NEXT_PUBLIC_SITE_URL=https://propertydamagesupport.com
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=support@cbrsgroup.com
NEXT_PUBLIC_PHONE=(832) 608-0535
```

---

## Health Check

Coolify health check endpoint: `http://localhost:3000`

The app will return HTTP 200 when healthy.

---

## Scaling Considerations

Current configuration:
- Single container deployment
- Suitable for moderate traffic (thousands of visitors/day)

For high traffic, consider:
- Horizontal scaling (multiple containers)
- Load balancer
- CDN for static assets (Cloudflare, etc.)

---

## Troubleshooting

### Container won't start
```bash
# Check logs in Coolify or:
docker logs <container-id>
```

### Port 3000 already in use
```bash
# Change port mapping in Coolify settings
# Or in manual deployment:
docker run -p 8080:3000 ...
```

### Build fails
- Verify `npm run build` works locally first
- Check Dockerfile syntax
- Ensure all dependencies in package.json

---

## Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

## Support

For deployment issues:
1. Check logs in Coolify dashboard
2. Review `DEPLOYMENT.md` troubleshooting section
3. Verify all environment variables are set
4. Test with `docker-compose up` locally first
