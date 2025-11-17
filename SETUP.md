# Quick Setup Guide 🚀

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- React & React DOM
- Framer Motion (for animations)
- Lucide React (for icons)
- Tailwind CSS (for styling)
- Vite (build tool)

## Step 2: Add Your Profile Photo

1. Create a `public` folder in the root directory
2. Add your 200x200px profile photo (e.g., `profile.jpg`)
3. Update `components/ProfileCard.jsx` line 28-32:

```jsx
<div className="w-full h-full flex items-center justify-center">
  <img 
    src="/profile.jpg" 
    alt="Varsha S" 
    className="w-full h-full object-cover"
  />
</div>
```

## Step 3: Customize Your Information

### Update Profile Card (`components/ProfileCard.jsx`)
- Line 29-31: Your name and title
- Line 38: Your bio/description
- Line 44: Your skills badges
- Line 52-76: Your contact links

### Update Projects (`sections/TradingCardsSection.jsx`)
- Line 7-145: Edit the `projects` array
- Add/remove/modify projects as needed
- Update GitHub links to your actual repositories

## Step 4: Run Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## Step 5: Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎨 Customization Tips

### Change Color Scheme
Edit `tailwind.config.js` to modify colors:
```javascript
colors: {
  primary: { /* your colors */ }
}
```

### Modify Card Layout
- Desktop columns: `sections/TradingCardsSection.jsx` line 158
- Card dimensions: `components/TradingCard.jsx` line 51

### Add More Animations
Use Framer Motion variants in any component:
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

## 📱 Testing Responsive Design

- Desktop: Default view
- Tablet: Resize browser to 768px-1024px
- Mobile: Resize browser to < 768px or use DevTools

## 🐛 Troubleshooting

### Issue: Styles not loading
**Solution**: Make sure Tailwind is properly configured in `postcss.config.js`

### Issue: Icons not showing
**Solution**: Check that `lucide-react` is installed: `npm install lucide-react`

### Issue: Animations not working
**Solution**: Verify `framer-motion` is installed: `npm install framer-motion`

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Done!

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- Open an issue on GitHub

---

Happy coding! 🎉
