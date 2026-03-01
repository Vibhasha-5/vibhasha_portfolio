# 🚀 Vibhasha Nagvekar - Professional React Portfolio

A modern, fully functional React.js portfolio with Tailwind CSS, Framer Motion animations, and beautiful pastel design.

## ✨ Features

✅ **React 18** - Modern React with hooks
✅ **Tailwind CSS** - Beautiful utility-first styling
✅ **Framer Motion** - Smooth animations
✅ **Animate.css** - Pre-built CSS animations
✅ **React Icons** - 5000+ icons
✅ **Lottie React** - Animation support
✅ **Vite** - Lightning-fast build tool
✅ **Dark Mode** - Working toggle with localStorage
✅ **ALL Buttons Working** - Every link functional
✅ **Pastel Colors** - Beautiful aesthetic design
✅ **Fully Responsive** - Mobile-first design
✅ **Smooth Scroll** - Animated section navigation

## 🛠️ Quick Start

### Prerequisites
- Node.js v18+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

1. **Extract the ZIP file**
2. **Open terminal in the folder**
3. **Install dependencies:**
```bash
npm install
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open browser:** http://localhost:3000

## 📖 Detailed Setup

See **SETUP_GUIDE.md** for complete step-by-step instructions including:
- Installation
- Testing all features
- Building for production
- Deployment to Vercel/Netlify
- Troubleshooting

## 🎯 All Features Working

✅ **Navigation**
- Smooth scroll to sections
- Mobile hamburger menu
- Active section highlighting

✅ **Dark Mode**
- Click sun/moon icon
- Saves preference to localStorage
- Smooth transition

✅ **All Links Working**
- GitHub profile → https://github.com/Vibhasha-5
- LinkedIn → Your profile
- Email → nagvekarvibha04@gmail.com
- Phone → +91 98196 05710
- Resume → Google Drive folder
- All project GitHub links

✅ **Animations**
- Framer Motion on scroll
- Hover effects on cards
- Floating background orbs
- Smooth page transitions

## 🏗️ Project Structure

```
vibhasha-portfolio-final/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── SETUP_GUIDE.md
```

## 🌐 Deployment

### Vercel (Recommended)

**Option 1: Web Interface**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Click "Deploy"

**Option 2: CLI**
```bash
npm install -g vercel
npm run build
vercel
```

### Netlify

1. Build: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag `dist/` folder

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  pastel: {
    pink: '#YOUR_COLOR',
    blue: '#YOUR_COLOR',
  }
}
```

### Update Content
- Hero: `src/components/Hero.jsx`
- About: `src/components/About.jsx`
- Projects: `src/components/Projects.jsx`
- Skills: `src/components/Skills.jsx`

## 📱 Test on Mobile

1. Start server: `npm run dev`
2. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On phone: `http://YOUR_IP:3000`

## 🐛 Troubleshooting

**npm install fails:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 in use:**
```bash
npm run dev -- --port 3001
```

**Dark mode not saving:**
- Clear browser cache
- Check localStorage is enabled

## 🔑 Commands

```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Build for production
npm run preview  # Preview production build
```

## 📦 Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- framer-motion: ^10.16.4
- react-icons: ^5.0.1
- lottie-react: ^2.4.0
- vite: ^5.0.8
- tailwindcss: ^3.4.0

## ✅ Checklist

Before deploying:
- [ ] npm install works
- [ ] npm run dev starts successfully
- [ ] All navigation links work
- [ ] Dark mode toggles
- [ ] All external links open
- [ ] Mobile responsive
- [ ] npm run build succeeds

## 🎉 You're Ready!

1. Install dependencies
2. Run dev server
3. Test everything
4. Build for production
5. Deploy!

**Made with 💻 and ☕**

For detailed instructions, see **SETUP_GUIDE.md**
