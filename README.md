# Developer Trading Cards Portfolio 🎴

A modern, interactive portfolio showcasing projects as collectible trading cards with a Pokémon-inspired design. Built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Profile Card**: 200x200px circular photo with neon border glow
- **Trading Cards**: Each project displayed as a collectible card with:
  - Glassmorphism background
  - Gradient border glow effects
  - Animated shine effect on hover
  - XP Level progression bars
  - Difficulty ratings (1-5 stars)
  - Achievement badges
  - Tech stack tags
  - Performance metrics
  - Category badges

- **Responsive Design**:
  - Desktop: 3-column grid layout
  - Mobile: Horizontal swipe carousel

- **Smooth Animations**: Powered by Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
├── components/
│   ├── ProfileCard.jsx       # Profile card with photo and contact info
│   └── TradingCard.jsx        # Reusable project card component
├── sections/
│   └── TradingCardsSection.jsx # Main section with all project cards
├── pages/
│   └── Portfolio.jsx          # Main portfolio page
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Global styles with Tailwind
└── tailwind.config.js         # Tailwind configuration

```

## 🎨 Customization

### Adding Your Profile Photo

Replace the placeholder in `components/ProfileCard.jsx`:

```jsx
<div className="w-full h-full flex items-center justify-center">
  <img src="/path-to-your-photo.jpg" alt="Varsha S" className="w-full h-full object-cover" />
</div>
```

### Adding New Projects

Edit the `projects` array in `sections/TradingCardsSection.jsx`:

```javascript
{
  name: 'Your Project Name',
  category: 'Computer Vision', // or 'Deep Learning', 'Machine Learning', etc.
  difficulty: 4, // 1-5
  xpLevel: 'Advanced', // 'Beginner', 'Intermediate', 'Advanced', 'Expert'
  description: 'Brief description',
  achievements: ['Achievement 1', 'Achievement 2'],
  metrics: {
    Accuracy: '95%',
    Speed: 'Real-time'
  },
  tech: ['Python', 'TensorFlow'],
  githubLink: 'https://github.com/username/repo'
}
```

## 🎯 Projects Included

1. **Yoga Pose Detection & Correction** - 90% accuracy, real-time CV system
2. **Cybersecurity Threat Classification** - Multi-class ML threat detection
3. **Hand Gesture Recognition** - 95% accuracy, 20ms inference time
4. **Cats vs Dogs Classification** - 92% accuracy CNN model
5. **Customer Segmentation** - K-Means clustering analysis
6. **Iris Classification** - 96% accuracy classic ML
7. **House Price Prediction** - Regression with ensemble methods
8. **Smart Inventory System** - TypeScript full-stack application
9. **Portfolio Website** - Modern React portfolio

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)

## 📱 Responsive Breakpoints

- Mobile: < 768px (horizontal scroll)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

## 🎨 Color Scheme

- Background: Dark gradient (`#0a0e1a` to `#1a1f3c`)
- Primary: Blue (`#3b82f6`)
- Secondary: Purple (`#8b5cf6`)
- Accent: Pink (`#ec4899`)
- Glass: White with 10% opacity

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Varsha S**
- Email: varshas6114@gmail.com
- LinkedIn: [varsha-s-aa90712b1](https://www.linkedin.com/in/varsha-s-aa90712b1/)
- GitHub: [@varsha6114s](https://github.com/varsha6114s)

## 🙏 Acknowledgments

- Inspired by Pokémon Trading Cards
- Built with modern web technologies
- Designed for developers who love gaming aesthetics

---

Made with ❤️ and ☕ by Varsha S
