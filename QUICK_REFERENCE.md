# Quick Reference Card 🎯

## ⚡ Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Must-Do Before Deploy

1. Add your 200×200px photo to `public/profile.jpg`
2. Update photo path in `components/ProfileCard.jsx` (line 28)
3. Replace GitHub links in `sections/TradingCardsSection.jsx`
4. Test locally with `npm run dev`
5. Build with `npm run build`
6. Deploy!

## 🎨 Quick Customization

### Change Your Info
**File:** `components/ProfileCard.jsx`
- Line 29: Your name
- Line 32: Your title
- Line 38: Your bio
- Line 44: Your skills
- Lines 52-76: Your contact links

### Modify Projects
**File:** `sections/TradingCardsSection.jsx`
- Line 7-145: Edit `projects` array
- Add/remove/modify projects
- Update all `githubLink` values

### Change Colors
**File:** `tailwind.config.js`
```javascript
colors: {
  primary: { 500: '#YOUR_COLOR' }
}
```

### Adjust Card Size
**File:** `components/TradingCard.jsx`
- Line 51: Change `w-[320px] h-[450px]`

## 🔗 Important File Locations

| What | Where |
|------|-------|
| Profile Card | `components/ProfileCard.jsx` |
| Project Cards | `components/TradingCard.jsx` |
| Projects Data | `sections/TradingCardsSection.jsx` |
| Main Page | `pages/Portfolio.jsx` |
| Styles | `index.css` |
| Config | `tailwind.config.js` |

## 🎯 Project Properties

```javascript
{
  name: 'Project Name',           // Required
  category: 'Computer Vision',    // Required
  difficulty: 4,                  // 1-5 stars
  xpLevel: 'Advanced',           // Beginner/Intermediate/Advanced/Expert
  description: 'Short desc',      // 1-2 lines
  achievements: ['...'],          // Array of strings
  metrics: { Key: 'Value' },     // Object
  tech: ['Python', 'React'],     // Array of strings
  githubLink: 'https://...'      // URL string
}
```

## 🎨 Available Categories

- `'Computer Vision'` → Blue badge
- `'Deep Learning'` → Purple badge
- `'Machine Learning'` → Green badge
- `'Data Analysis'` → Yellow badge
- `'Full Stack'` → Pink badge
- `'NLP'` → Indigo badge

## 🚀 Deployment Quick Links

- **Vercel**: [vercel.com](https://vercel.com) → Import from GitHub
- **Netlify**: [netlify.com](https://netlify.com) → Drag `dist` folder
- **GitHub Pages**: Add scripts to `package.json` → `npm run deploy`

## 🐛 Common Issues

| Issue | Fix |
|-------|-----|
| Blank page | Check console (F12) for errors |
| Images not loading | Verify path and file in `public/` |
| Styles not working | Run `npm install` again |
| Build fails | Delete `node_modules` and reinstall |

## 📱 Test Checklist

- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Tablet (768px width)
- [ ] Mobile (375px width)
- [ ] All links work
- [ ] Animations smooth
- [ ] No console errors

## 🎯 Your Current Projects

1. ✅ Yoga Pose Detection (90% accuracy)
2. ✅ Cybersecurity Threat Classification
3. ✅ Hand Gesture Recognition (95%, 20ms)
4. ✅ Cats vs Dogs Classification (92%)
5. ✅ Customer Segmentation (K-Means)
6. ✅ Iris Classification (96%)
7. ✅ House Price Prediction
8. ✅ Smart Inventory System (TypeScript)
9. ✅ Portfolio Website

## 📊 Your Stats

- **Total Projects**: 9
- **Technologies**: 15+
- **Avg Accuracy**: 90%+
- **Categories**: 5

## 🔗 Your Links

- **Email**: varshas6114@gmail.com
- **LinkedIn**: [linkedin.com/in/varsha-s-aa90712b1](https://www.linkedin.com/in/varsha-s-aa90712b1/)
- **GitHub**: [@varsha6114s](https://github.com/varsha6114s)

## 📚 Documentation

- `README.md` → Full documentation
- `SETUP.md` → Setup instructions
- `USAGE_EXAMPLES.md` → Code examples
- `PROJECT_SUMMARY.md` → Project overview
- `DEPLOYMENT_CHECKLIST.md` → Deploy guide
- `PROJECT_STRUCTURE.md` → Architecture
- `QUICK_REFERENCE.md` → This file

## ⚡ Pro Tips

1. **Optimize images**: Compress to <100KB
2. **Test mobile first**: Most users are on mobile
3. **Update regularly**: Keep projects current
4. **Share widely**: LinkedIn, Twitter, resume
5. **Get feedback**: Ask 2-3 people to review

## 🎉 Next Steps

1. [ ] `npm install`
2. [ ] Add your photo
3. [ ] Update GitHub links
4. [ ] `npm run dev` to test
5. [ ] `npm run build`
6. [ ] Deploy to Vercel/Netlify
7. [ ] Share on LinkedIn
8. [ ] Celebrate! 🎊

---

**Need more details?** Check the full documentation files!

**Ready to launch?** Follow the deployment checklist!

**Questions?** All answers are in the docs! 📚
