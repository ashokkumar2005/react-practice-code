# ⚛️ React Practice Projects

A collection of hands-on React practice code built while learning core React concepts from scratch.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📚 Concepts Practiced

| Concept | Description |
|--------|-------------|
| ⚙️ **Components** | Creating functional components and organizing them into files |
| 🔁 **Props** | Passing data between parent and child components using props |
| 📋 **Lists & Keys** | Rendering lists using `.map()` with unique `key` props |
| ✅ **Conditional Rendering** | Showing/hiding UI using `&&` operator and ternary expressions |
| 🧠 **useState** | Managing local component state with the useState hook |
| 🔗 **Component Composition** | Combining multiple components together (App → List → Car) |
| 📦 **Import / Export** | Using default and named imports/exports across files |
| 🛡️ **Type Checking** | Validating data before rendering using conditional checks |

---

## 🗂️ Project Structure

```
samplereact/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── car.jsx       # Child component — displays individual item
│   │   └── list.jsx      # Parent component — maps over data and renders Car
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🐛 Bugs Fixed Along the Way

Learning from mistakes is part of the process! Here's what was debugged:

- ❌ Lowercase component names (`<list>` → ✅ `<List>`) — React requires uppercase for custom components
- ❌ `.js` extension for JSX files (→ ✅ `.jsx`) — Vite needs `.jsx` to parse JSX syntax
- ❌ Missing `const` on variable declaration (→ ✅ `const namelist = [...]`)
- ❌ Checking array like object (`namelist.name1`) (→ ✅ `namelist.length > 0`)
- ❌ `object.keys()` lowercase (→ ✅ `Object.keys()`) — JavaScript is case-sensitive
- ❌ Props not received in child component (→ ✅ `const Car = (props) => ...`)
- ❌ `<ul>` inside `.map()` — creates multiple lists (→ ✅ `<ul>` outside, `<li>` inside `.map()`)

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/samplereact.git

# Navigate into the project
cd samplereact

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📈 What's Next

- [ ] useState and event handling
- [ ] useEffect and API calls
- [ ] React Router for navigation
- [ ] Form handling and validation
- [ ] Context API for global state

---

## 👨‍💻 Author

**Ashok kumar T**
- Learning React from the ground up 🚀
- Building, breaking, and fixing — one component at a time 💪

---

> *"The best way to learn React is to build things, make mistakes, and debug them."*
