# 🚀 Quick Deploy Guide - GitHub Pages

## Deploy in 3 Steps (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin master
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Click **Save**

### Step 3: Deploy
- The workflow will automatically run when you push to `master` or `main`
- Go to **Actions** tab to see the deployment progress
- Wait 2-3 minutes
- Done! 🎉

Your site will be live at: `https://yourusername.github.io/juster-landing`

---

## 📋 What Happens Automatically

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. ✅ Checkout your code
2. ✅ Install Node.js and dependencies
3. ✅ Build your Vue app (`npm run build`)
4. ✅ Deploy to GitHub Pages

**No manual configuration needed!**

---

## 🔧 Manual Trigger (Optional)

If you want to trigger deployment manually:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

---

## 🌐 Custom Domain Setup

1. **Add domain in GitHub:**
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain
   - Click **Save**

2. **Update DNS records:**
   - Add a `CNAME` record:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `yourusername.github.io`
   - Or add `A` records (for apex domain):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Wait for SSL:**
   - GitHub will automatically provision SSL certificate
   - Usually takes 5-10 minutes

---

## ✅ Pre-Deployment Checklist

- [ ] Code is pushed to GitHub
- [ ] GitHub Pages is enabled (Source: GitHub Actions)
- [ ] Workflow file exists (`.github/workflows/deploy.yml`) ✅
- [ ] Build works locally (`npm run build`)

---

## 🆘 Troubleshooting

### Workflow Not Running
- Check that GitHub Pages source is set to **GitHub Actions** (not branch)
- Verify workflow file exists in `.github/workflows/deploy.yml`
- Check Actions tab for error messages

### Build Fails
- Check Node.js version in workflow (should be 18+)
- Ensure all dependencies are in `package.json`
- Review build logs in Actions tab

### 404 Errors
- Verify `base: './'` is set in `vite.config.js` ✅ (already done)
- Check that workflow is deploying `dist` folder
- Ensure SPA redirect is working

### Site Not Updating
- Check Actions tab - workflow should run on every push
- Verify you're pushing to `master` or `main` branch
- Clear browser cache

---

## 📝 What's Already Configured?

✅ `.github/workflows/deploy.yml` - GitHub Actions workflow ready  
✅ `vite.config.js` - Base path set to `'./'`  
✅ `netlify.toml` - Netlify configuration (if needed later)  
✅ `vercel.json` - Vercel configuration (if needed later)  

**You're all set! Just enable GitHub Pages and push your code.**

---

## 🎯 Next Steps After Deployment

1. **Test your site:**
   - Visit the GitHub Pages URL
   - Check all links and images
   - Test on mobile devices

2. **Set up custom domain** (optional):
   - Follow the Custom Domain Setup above

3. **Monitor deployments:**
   - Check Actions tab for deployment status
   - Set up notifications (optional)

---

**Need help?** Check the full deployment plan in `DEPLOYMENT_PLAN.md`
