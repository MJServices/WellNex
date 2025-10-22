# Deployment Guide - Wellnex Systems

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Easiest)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 Pre-Deployment Checklist

- [x] All TypeScript errors resolved
- [x] Production build tested locally (`npm run build && npm run preview`)
- [x] Environment variables configured (if any)
- [x] Images optimized and properly sized
- [x] Meta tags and SEO configured
- [x] Analytics setup (optional)
- [x] Error boundaries in place
- [x] 404 page configured

## 📊 Build Configuration

The project uses:

- **Framework**: Vite
- **Output**: `dist/` folder
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

## 🌐 Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `wellnexsystems.com`)
4. Update DNS records as instructed
5. SSL certificate auto-configured

## 🔒 Environment Variables

If you need environment variables:

1. Create `.env.local` (not committed to git)
2. Add variables in Vercel Dashboard:
   - Settings → Environment Variables
   - Add each variable for Production/Preview/Development

## 📈 Performance Tips

- Images are already optimized with proper sizing
- Animations use hardware acceleration
- Code splitting enabled via React Router
- Lazy loading for heavy components
- Fonts preloaded in index.html

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript Errors

```bash
# Check types
npm run type-check
```

### Routing Issues

- Vercel.json already configured for SPA routing
- All routes redirect to index.html

## 📱 Testing Production Build Locally

```bash
# Build
npm run build

# Preview
npm run preview

# Open http://localhost:4173
```

## 🎯 Post-Deployment

1. **Test all pages**: Home, Apps, About, Contact
2. **Test all animations**: Cursor effects, scrolling, hover states
3. **Test responsiveness**: Mobile, tablet, desktop
4. **Check performance**: Lighthouse score
5. **Verify SEO**: Meta tags, Open Graph

## 📞 Support

For deployment issues:

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/

---

**Ready to deploy!** 🚀

Your Wellnex Systems website is production-ready and optimized for Vercel deployment.
