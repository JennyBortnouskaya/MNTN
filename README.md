# MNTN - Hiking Guide

A modern, responsive hiking guide website built with Next.js, featuring beautiful typography, smooth animations, and an immersive outdoor experience.

![MNTN Hiking Guide](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![SCSS](https://img.shields.io/badge/SCSS-Modules-pink?style=for-the-badge&logo=sass)

## 🏔️ About

MNTN is a hiking guide application designed to help outdoor enthusiasts prepare for mountain adventures. The website features:

- **Immersive Hero Section** - Stunning visual introduction with social media integration
- **Responsive Design** - Optimized for all screen sizes from mobile to large desktop displays
- **Custom Typography** - Beautiful Chronicle Display and Gilroy fonts for premium readability
- **Content Sections** - Detailed hiking information with engaging imagery
- **Smooth Navigation** - Right sidebar navigation with smooth scrolling
- **Modern UI** - Clean, dark-themed design with gold accent colors

### 🎯 Pixel-Perfect Implementation

This project is a pixel-perfect implementation of the original Figma design. Every layout, spacing, typography, and visual element has been carefully crafted to match the design specifications exactly.

**Figma Design Reference**: [MNTN - Landing Page & Community](https://www.figma.com/design/Cs2FTXOhTnr5AXjBHJGt6s/MNTN---Landing-Page--Community-?node-id=1-117&t=sXGP2RRr7rJdxrSn-0)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MNTN
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 📁 Project Structure

```
MNTN/
├── app/                    # Next.js app directory
│   ├── globals.scss       # Global styles and fonts
│   └── layout.tsx         # Root layout
├── components/             # React components
│   ├── hero/              # Hero section with social links
│   ├── ContentSection/    # Main content sections
│   ├── header/            # Navigation header
│   ├── footer/            # Footer component
│   └── rightSidebar/      # Navigation sidebar
├── styles/                # Global SCSS files
│   ├── _variables.scss    # CSS variables
│   ├── _layout.scss       # Layout utilities
│   ├── _reset.scss        # CSS reset
│   └── main.scss          # Main styles
└── public/                # Static assets
    └── fonts/             # Custom font files
```

## 🎨 Features

### Responsive Breakpoints
- **Mobile**: ≤ 600px
- **Tablet**: 601px - 1100px  
- **Small Desktop**: 1101px - 1300px
- **Desktop**: 1301px - 1538px
- **Large Desktop**: 1539px - 1800px
- **Extra Large**: ≥ 1801px

### Custom Fonts
- **Chronicle Display** - Elegant serif for headings
- **Gilroy** - Modern sans-serif for body text

### Key Components
- **Hero** - Full-screen introduction with social media integration
- **ContentSection** - Reusable content layout with image and text
- **Header** - Navigation with logo and menu
- **Footer** - Brand information and links
- **RightSidebar** - Section navigation with smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **UI Components**: React
- **Icons**: Material UI Icons

## 📝 Customization

### Colors
Modify the color scheme in `app/globals.scss`:
```scss
:root {
  --color-bg: #0b1d26;      // Dark background
  --color-accent: #fbd784;   // Gold accent
  --color-text: #ffffff;     // White text
}
```

### Fonts
Add custom fonts in `app/globals.scss` using `@font-face` declarations.

## 📄 License

This project is open source and available under the MIT License.
