# ⚛️ React Practice Projects

A curated collection of hands-on **React.js projects** built while learning core frontend concepts from scratch.  
This repository reflects practical learning through building, debugging, and refining reusable UI components.

---

## 🚀 Tech Stack

- ⚛️ React (Functional Components + Hooks)
- 📜 JavaScript (ES6+)
- ⚡ Vite (Fast build tool)
- 🎨 CSS3 (Styling & layout)

---

## 📚 Concepts Covered

| Concept                  | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| ⚙️ Components            | Building reusable and modular UI components                 |
| 🔁 Props                 | Passing data between parent and child components            |
| 📋 Lists & Keys          | Rendering dynamic lists using `.map()` with unique keys     |
| ✅ Conditional Rendering  | Rendering UI using `&&`, ternary operators                  |
| 🧠 useState              | Managing local component state                              |
| 🔗 Component Composition | Structuring nested component hierarchy                      |
| 📦 Import / Export       | Using ES6 modules across files                              |
| 🛡️ Type Checking        | Preventing runtime errors with validations                  |

---

## 🗂️ Project Structure

```
samplereact/
├── public/
├── src/
│   ├── assets/              # Static files (images, icons)
│   ├── components/
│   │   ├── Car.jsx          # Reusable item component
│   │   └── List.jsx         # Maps data → renders Car components
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point (React DOM rendering)
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧠 How It Works

1. `main.jsx` mounts the React app to the DOM
2. `App.jsx` acts as the root component
3. Data is passed from parent → child via **props**
4. `List.jsx` iterates over arrays using `.map()`
5. `Car.jsx` displays individual UI elements
6. State changes are handled using `useState`

---

## 🐛 Bugs & Fixes (Key Learning Moments)

- ❌ Lowercase component names → ✅ Use PascalCase (`<List />`)
- ❌ `.js` for JSX → ✅ Use `.jsx` (required in Vite)
- ❌ Missing variable declaration → ✅ Always use `const` / `let`
- ❌ Incorrect array checks → ✅ Use `.length`
- ❌ `object.keys()` → ✅ `Object.keys()` (case-sensitive)
- ❌ Props not received → ✅ Correct function parameters `(props)`
- ❌ `<ul>` inside `.map()` → ✅ Keep `<ul>` outside, map `<li>`

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

---

## 🌐 Run the App

Open your browser and visit:

👉 http://localhost:5173

---

## 📈 Future Improvements

- [ ] useState with advanced event handling
- [ ] useEffect for lifecycle & API calls
- [ ] React Router for multi-page navigation
- [ ] Form handling & validation
- [ ] Context API for global state management
- [ ] Custom hooks for reusable logic

---

## 🎯 Learning Outcomes

- Strong understanding of React fundamentals
- Ability to build reusable components
- Hands-on debugging and problem-solving skills
- Foundation for scalable frontend applications

---

## 👨‍💻 Author

**Ashok Kumar T**

- ⚛️ React Developer (Learner → Builder)
- 🚀 Passionate about frontend development
- 📈 Focused on continuous improvement

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
