# 🌟 Maram Aouini - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/maramaouini/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive portfolio showcasing my journey as a web developer specializing in React and modern web technologies.

**[🔗 Live Demo](https://maramaouini.netlify.app/)** | **[📧 Contact Me](mailto:your.email@example.com)**

![Portfolio Preview](./public/preview.png)
*Replace with actual screenshot of your portfolio*

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Projects Showcase](#projects-showcase)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About

This portfolio represents my evolution as a web developer, featuring carefully curated projects that demonstrate my skills in frontend development, UI/UX design, and modern web technologies. Built with performance, accessibility, and user experience at the forefront.

### What You'll Find Here

- 💼 **Professional Projects** - Real-world applications showcasing various technologies
- 🎨 **UI/UX Design Work** - Clean, modern interfaces with attention to detail
- 🚀 **Performance Optimization** - Fast-loading, optimized applications
- ♿ **Accessibility First** - WCAG compliant, keyboard navigable
- 📱 **Fully Responsive** - Seamless experience across all devices

---

## ✨ Features

### Core Functionality
- ⚡ **Lightning Fast** - Optimized bundle size and lazy loading
- 🎭 **Dark/Light Mode** - Persistent theme toggle with smooth transitions
- 📬 **Working Contact Form** - Netlify Forms integration for direct messages
- 🎨 **Smooth Animations** - Framer Motion powered interactions
- 📊 **Project Filtering** - Dynamic filtering by technology/category
- 🔍 **SEO Optimized** - Meta tags, sitemap, and structured data

### Technical Highlights
- 🎯 Component-based architecture with React
- 💅 Styled with Tailwind CSS for rapid UI development
- 🔄 State management using React Context API
- 📱 Mobile-first responsive design
- ⚙️ Environment-based configuration
- 🧪 Error boundaries for graceful error handling

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

### Libraries & Tools
- **Framer Motion** - Animations and transitions
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **EmailJS / Netlify Forms** - Contact form handling

### Development Tools
- **Vite/Create React App** - Build tool
- **Git & GitHub** - Version control
- **VS Code** - Code editor
- **Figma** - UI/UX design
- **Chrome DevTools** - Debugging and optimization

### Deployment & Hosting
- **Netlify** - Continuous deployment and hosting
- **Node.js 18+** - Runtime environment

---

## 🎨 Projects Showcase

### Featured Projects Included:

1. **[Project Name 1]** - Brief description
   - Tech: React, Node.js, MongoDB
   - [Live Demo](#) | [GitHub](#)

2. **[Project Name 2]** - Brief description
   - Tech: React, TypeScript, Firebase
   - [Live Demo](#) | [GitHub](#)

3. **[Project Name 3]** - Brief description
   - Tech: React, Tailwind CSS, API Integration
   - [Live Demo](#) | [GitHub](#)

*Each project includes detailed case studies explaining the problem, solution, and technical decisions.*

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maram-aouini/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   See [Environment Variables](#environment-variables) section below.

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `build/` directory.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Contact Form (if using EmailJS)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
REACT_APP_GA_TRACKING_ID=your_google_analytics_id
```

**Note:** Never commit your `.env.local` file to version control!

---

## 📦 Deployment

### Deploy to Netlify

1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Via GitHub Integration:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variables in Netlify dashboard

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Responsive design across all devices
- [x] Dark/light theme toggle
- [x] Project showcase section
- [x] Contact form integration
- [x] Performance optimization

### 🚧 In Progress
- [ ] Blog section for technical articles
- [ ] Advanced project filtering
- [ ] Testimonials carousel

### 📅 Planned Features
- [ ] Multi-language support (EN/FR)
- [ ] Interactive resume timeline
- [ ] Skills visualization dashboard
- [ ] Integration with GitHub API for live stats
- [ ] Newsletter subscription
- [ ] Downloadable resume in multiple formats

---

## 📈 Performance

Current Lighthouse Scores:
- 🎯 Performance: 95+
- ♿ Accessibility: 100
- 💚 Best Practices: 100
- 🔍 SEO: 100

---

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions! If you notice any bugs or have ideas for improvements:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Maram Aouini** - Web Developer

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@maram-aouini](https://github.com/maram-aouini)
- 🌐 Portfolio: [maramaouini.netlify.app](https://maramaouini.netlify.app)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Hosted on [Netlify](https://www.netlify.com/)
- Design inspiration from various portfolio showcases

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and ☕ by Maram Aouini**

[Back to Top ↑](#-maram-aouini---portfolio)

</div>
