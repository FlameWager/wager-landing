# Free Deployment Plan for Wager Landing Page

**Project:** Vue 3 + Vite Landing Page  
**Build Command:** `npm run build` or `yarn build`  
**Output Directory:** `dist/`  
**Status:** Ready for deployment

---

## 🎯 Recommended Options (Ranked by Ease & Features)

### Option 1: Vercel (⭐ RECOMMENDED)
**Best for:** Automatic deployments, zero configuration, excellent performance

#### Pros:
- ✅ Zero configuration needed
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Custom domains
- ✅ Preview deployments for PRs
- ✅ Analytics included

#### Cons:
- ⚠️ Requires GitHub/GitLab/Bitbucket account

#### Steps:
1. **Push code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin master
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vue/Vite settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

3. **Configure (if needed):**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

**Result:** `https://your-project.vercel.app`

---

### Option 2: Netlify
**Best for:** Static sites, form handling, serverless functions

#### Pros:
- ✅ Drag-and-drop deployment option
- ✅ Automatic deployments
- ✅ Free SSL
- ✅ Custom domains
- ✅ Form handling
- ✅ Split testing

#### Steps:
1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy via Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (GitHub/Email)
   - Drag & drop the `dist/` folder, OR
   - Connect GitHub repo for auto-deploy

3. **Configure (if connecting repo):**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `.` (root)

**Result:** `https://your-project.netlify.app`

---

### Option 3: Cloudflare Pages
**Best for:** Fast global CDN, generous free tier

#### Pros:
- ✅ Unlimited bandwidth
- ✅ Fast global CDN
- ✅ Free SSL
- ✅ Custom domains
- ✅ Preview deployments

#### Steps:
1. **Push to GitHub** (if not already)

2. **Deploy to Cloudflare Pages:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project"
   - Connect GitHub repository
   - Configure:
     - Framework preset: `Vite`
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

**Result:** `https://your-project.pages.dev`

---

### Option 4: GitHub Pages
**Best for:** Simple static osting, already using GitHub

#### Pros:
- ✅ Free with GitHub
- ✅ Custom domains
- ✅ Simple setup

#### Cons:
- ⚠️ Requires GitHub Actions for auto-deploy
- ⚠️ Slightly slower than CDN options

#### Steps:
1. **Create GitHub Actions workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ master ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

**Result:** `https://yourusername.github.io/juster-landing`

---

### Option 5: Firebase Hosting
**Best for:** Google ecosystem integration

#### Pros:
- ✅ Free SSL
- ✅ Custom domains
- ✅ Fast CDN
- ✅ Easy rollback

#### Steps:
1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Auto-build: `No`

3. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

**Result:** `https://your-project.web.app`

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Check if `.env` file exists
- [ ] Review `config.js` for any hardcoded URLs
- [ ] Ensure all API endpoints are production-ready

### 2. Build Test
```bash
npm install
npm run build
npm run preview  # Test the build locally
```

### 3. Code Quality
- [ ] Remove console.logs (if needed)
- [ ] Optimize images
- [ ] Check for broken links

### 4. Git Repository
- [ ] Ensure code is committed
- [ ] Push to remote repository

---

## 🚀 Quick Start (Recommended: Vercel)

**Fastest deployment path:**

1. **Ensure code is on GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Deploy to Vercel:**
   - Visit: https://vercel.com/new
   - Import GitHub repository
   - Click "Deploy"
   - Wait 2 minutes
   - Your site is live!

3. **Add custom domain (optional):**
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS records as instructed

---

## 🔧 Post-Deployment

### Custom Domain Setup
1. **Vercel/Netlify:**
   - Add domain in dashboard
   - Update DNS records:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: Provided by platform

2. **SSL Certificate:**
   - Automatically provisioned (free)
   - Usually takes 5-10 minutes

### Monitoring
- Set up analytics (Vercel Analytics, Google Analytics)
- Monitor build logs
- Set up error tracking (optional)

---

## 📊 Comparison Table

| Platform | Setup Time | Auto-Deploy | Custom Domain | CDN | Best For |
|----------|-----------|------------|---------------|-----|----------|
| **Vercel** | 2 min | ✅ | ✅ | ✅ | Easiest, best DX |
| **Netlify** | 3 min | ✅ | ✅ | ✅ | Forms, functions |
| **Cloudflare** | 5 min | ✅ | ✅ | ✅ | Fastest CDN |
| **GitHub Pages** | 10 min | ✅ | ✅ | ⚠️ | GitHub users |
| **Firebase** | 8 min | ⚠️ | ✅ | ✅ | Google ecosystem |

---

## 🎯 Recommendation

**Use Vercel** for the fastest, easiest deployment with zero configuration.

**Alternative:** Use Netlify if you prefer their interface or need form handling.

---

## 📝 Notes

- All platforms offer free SSL certificates
- All platforms support custom domains
- Build output is `dist/` folder
- The project is already configured with `base: './'` in `vite.config.js` which is good for deployment
- No environment variables needed for basic deployment

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Ensure all dependencies are in `package.json`
- Review build logs in platform dashboard

### 404 Errors
- Verify `base` path in `vite.config.js` is `'./'`
- Check routing configuration
- Ensure SPA redirect is enabled

### Assets Not Loading
- Check that `base: './'` is set in `vite.config.js` ✅ (already done)
- Verify asset paths are relative

---

**Last Updated:** 2026-01-23  
**Status:** Ready to deploy
