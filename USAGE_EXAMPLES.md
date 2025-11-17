# Usage Examples 📚

## Using Individual Components

### ProfileCard Component

```jsx
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] to-[#1a1f3c] p-8">
      <ProfileCard />
    </div>
  );
}
```

### TradingCard Component

```jsx
import TradingCard from './components/TradingCard';

function ProjectShowcase() {
  const project = {
    name: 'My Awesome Project',
    category: 'Computer Vision',
    difficulty: 4,
    xpLevel: 'Advanced',
    description: 'A cool project that does amazing things',
    achievements: [
      'Achieved 95% accuracy',
      'Real-time processing',
      'Deployed to production'
    ],
    metrics: {
      Accuracy: '95%',
      Speed: '30ms',
      Model: 'CNN',
      Dataset: '10K'
    },
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    githubLink: 'https://github.com/username/project'
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-8">
      <TradingCard {...project} />
    </div>
  );
}
```

## Customizing Card Properties

### XP Levels
Choose from: `'Beginner'`, `'Intermediate'`, `'Advanced'`, `'Expert'`

```jsx
xpLevel: 'Expert' // Changes color gradient
```

### Difficulty Rating
Use numbers 1-5 for star rating:

```jsx
difficulty: 5 // Shows 5 filled stars
```

### Categories
Available categories with auto-colored badges:
- `'Computer Vision'` - Blue
- `'Deep Learning'` - Purple
- `'Machine Learning'` - Green
- `'Data Analysis'` - Yellow
- `'Full Stack'` - Pink
- `'NLP'` - Indigo

```jsx
category: 'Deep Learning'
```

### Metrics Object
Add any key-value pairs:

```jsx
metrics: {
  Accuracy: '98%',
  'F1-Score': '0.96',
  Precision: '97%',
  Recall: '95%'
}
```

### Achievements Array
List your accomplishments:

```jsx
achievements: [
  'Won hackathon first prize',
  'Featured in tech blog',
  'Open sourced with 100+ stars',
  'Used by 1000+ users'
]
```

## Creating a Custom Section

```jsx
import { motion } from 'framer-motion';
import TradingCard from './components/TradingCard';

function MyProjectsSection() {
  const myProjects = [
    // ... your projects array
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f3c]">
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        My Projects
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {myProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TradingCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

## Adding Custom Animations

### Entrance Animation
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <TradingCard {...project} />
</motion.div>
```

### Stagger Children
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {projects.map((project, i) => (
    <motion.div key={i} variants={item}>
      <TradingCard {...project} />
    </motion.div>
  ))}
</motion.div>
```

## Styling Customization

### Change Card Size
In `TradingCard.jsx`, modify line 51:

```jsx
// Default: w-[320px] h-[450px]
// Larger: w-[380px] h-[520px]
// Smaller: w-[280px] h-[400px]
className="relative w-[380px] h-[520px] group"
```

### Custom Gradient Colors
```jsx
// In any component
className="bg-gradient-to-br from-[#your-color] to-[#your-color]"
```

### Add Custom Glow Colors
```jsx
// Modify the glow effect
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300"></div>
```

## Integrating with Existing Portfolio

### As a Section
```jsx
import TradingCardsSection from './sections/TradingCardsSection';

function Portfolio() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TradingCardsSection /> {/* Add here */}
      <ContactSection />
    </>
  );
}
```

### As a Standalone Page
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Tips & Best Practices

1. **Keep descriptions concise** - 1-2 lines max for card readability
2. **Use consistent metrics** - Same keys across similar projects
3. **Limit achievements** - 3-4 per card for clean layout
4. **Optimize images** - Use WebP format for profile photos
5. **Test responsiveness** - Check on multiple screen sizes
6. **Update GitHub links** - Ensure all links are valid
7. **Use semantic HTML** - Maintain accessibility standards

## Advanced: Dynamic Data Loading

```jsx
import { useState, useEffect } from 'react';

function DynamicProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch from API or JSON file
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8">
      {projects.map(project => (
        <TradingCard key={project.id} {...project} />
      ))}
    </div>
  );
}
```

---

Need more examples? Check the component files for detailed implementations!
