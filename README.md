# ⚛️ React Practice Projects

A collection of hands-on React projects built while learning core React concepts from scratch.
This repository reflects practical learning through building, debugging, and improving real components.

---

## 🚀 Tech Stack

* ⚛️ React
* 📜 JavaScript (ES6+)
* ⚡ Vite
* 🎨 CSS3

---

## 📚 Concepts Covered

| Concept                  | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| ⚙️ Components            | Creating reusable functional components                 |
| 🔁 Props                 | Passing data between parent and child components        |
| 📋 Lists & Keys          | Rendering dynamic lists using `.map()` with unique keys |
| ✅ Conditional Rendering  | Displaying UI using `&&` and ternary operators          |
| 🧠 useState              | Managing component-level state                          |
| 🔗 Component Composition | Structuring apps (App → List → Car)                     |
| 📦 Import / Export       | Using default and named exports across files            |
| 🛡️ Type Checking        | Preventing rendering errors using validations           |

---

## 🗂️ Project Structure

```
samplereact/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Car.jsx       # Displays individual item
│   │   └── List.jsx      # Maps data and renders Car components
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🐛 Bugs & Fixes (Learning Highlights)

* ❌ Lowercase component names → ✅ Use PascalCase (`<List />`)
* ❌ `.js` for JSX → ✅ Use `.jsx` (required for Vite)
* ❌ Missing variable declaration → ✅ Use `const`
* ❌ Incorrect array access → ✅ Use `.length` for checks
* ❌ `object.keys()` → ✅ `Object.keys()` (case-sensitive)
* ❌ Props not received → ✅ Proper function parameters `(props)`
* ❌ `<ul>` inside `.map()` → ✅ Keep `<ul>` outside, map `<li>`

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/samplereact.git

# Navigate into the project
cd samplereact

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open 👉 http://localhost:5173

---

## 📈 Future Improvements

* [ ] useState with event handling
* [ ] useEffect + API integration
* [ ] React Router (multi-page navigation)
* [ ] Form handling & validation
* [ ] Context API (global state management)

---

## 🌟 Key Takeaway

> Learning React is not about memorizing — it's about building, breaking, and fixing.

---

## 👨‍💻 Author

**Ashok Kumar T**

* React Learner 🚀
* Passionate about building real-world projects
* Improving step by step through practice 💪

---

## ⭐ Support

If you found this helpful, consider giving this repo a ⭐ on GitHub!
