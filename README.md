# 🍎 Apple Store

**apple_store** is a frontend project built with React and Vite. It’s a template / sample store-like UI with product models, styling, and development setup for fast iteration.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)   
- [Contributing](#contributing)
- [Configurator & Setup](#configurator--setup)   
- [License](#license)

---

## Features

- React with Vite for fast dev builds & HMR  
- Tailwind CSS for styling  
- ESLint + custom config for code quality  
- Product “models” folder (data/logic) decoupled from presentational `src`  
- Minimal setup, easy to extend

---

## Tech Stack

- **Framework / Bundler**: Vite + React :contentReference[oaicite:0]{index=0}  
- **Styling**: Tailwind CSS :contentReference[oaicite:1]{index=1}  
- **Linting**: ESLint (with `.eslintrc.cjs`) :contentReference[oaicite:2]{index=2}  
- **Configuration**: `vite.config.js`, `postcss.config.js`, `tailwind.config.js` :contentReference[oaicite:3]{index=3}

---

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)  
- npm or yarn  

### Installation

# clone the repo
git clone https://github.com/Mirnamo/apple_store.git

cd apple_store

# install dependencies

npm install
# or
yarn install

# To run the porject

npm run dev
# or
yarn dev

### Build for production:

npm run build

### Preview production build:

npm run preview

---

### 📂 Project Structure
apple_store/
├── assets/              # Static assets (images, icons, etc.)
├── models/              # Data models for products, categories, etc.
├── src/                 # React components and main app logic
├── index.html           # Entry HTML file
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration

---

### 🔧 Configuration

Tailwind CSS: Configure styles in tailwind.config.js.

Vite: Modify build and dev settings in vite.config.js.

PostCSS: Extend CSS transformations in postcss.config.js.

---

### 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo, create a branch, and submit a pull request.

---

### 📜 License

This project is open-source and available under the MIT License.
