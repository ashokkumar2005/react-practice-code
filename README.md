# ⚛️ React Practice Projects

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A collection of hands-on **React.js projects** built while learning modern frontend development from scratch.

This repository showcases practical implementation of React fundamentals by building reusable components, managing state, passing data through props, and solving real-world UI problems.

---

# 🚀 Tech Stack

- ⚛️ React (Functional Components & Hooks)
- 📜 JavaScript (ES6+)
- ⚡ Vite
- 🎨 CSS3

---

# 📚 Concepts Covered

| Concept | Description |
|---------|-------------|
| ⚙️ Components | Build reusable UI components |
| 🔁 Props | Pass data between parent and child components |
| 📋 Lists & Keys | Render dynamic data using `.map()` |
| ✅ Conditional Rendering | Render UI using ternary operators and `&&` |
| 🧠 useState | Manage local component state |
| 🔗 Component Composition | Organize nested component structures |
| 📦 Import / Export | Use ES6 modules effectively |
| 🛡️ Best Practices | Improve code readability and maintainability |

---

# 📁 Project Structure

```text
samplereact/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Car.jsx
│   │   └── List.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

# 🧠 Application Flow

```
main.jsx
      │
      ▼
 App.jsx
      │
      ▼
 List.jsx
      │
      ▼
 Car.jsx
```

- `main.jsx` mounts the React application.
- `App.jsx` is the root component.
- `List.jsx` receives and maps data.
- `Car.jsx` renders each individual item.
- `useState` manages interactive UI state.

---

# 🐛 Debugging & Lessons Learned

During development, several common React mistakes were identified and fixed:

| Problem | Solution |
|---------|----------|
| Lowercase component names | Use PascalCase (`<List />`) |
| Using `.js` for JSX | Rename files to `.jsx` |
| Missing `const` / `let` | Always declare variables |
| Wrong array validation | Use `.length` |
| `object.keys()` | Use `Object.keys()` |
| Props not received | Accept `(props)` or destructure correctly |
| `<ul>` inside `.map()` | Keep `<ul>` outside and map only `<li>` |

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/samplereact.git
```

Move into the project:

```bash
cd samplereact
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🌐 Local Development

Open your browser:

```
http://localhost:5173
```

---

# 📈 Future Improvements

- [ ] Advanced `useState` examples
- [ ] `useEffect` for API requests
- [ ] React Router
- [ ] Form validation
- [ ] Context API
- [ ] Custom Hooks
- [ ] Responsive UI
- [ ] Dark Mode

---

# 🎯 Learning Outcomes

After completing these projects, I gained practical experience with:

- Building reusable React components
- Passing data using props
- Rendering dynamic lists
- Managing component state with `useState`
- Organizing scalable project structures
- Debugging common React errors
- Writing cleaner and more maintainable code

---

# 👨‍💻 Author

**Ashok Kumar T**

Frontend Developer (Learning Journey)

- 🌱 Currently learning React & JavaScript
- ⚛️ Building practical frontend projects
- 🚀 Passionate about creating modern web applications

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If this repository helped you learn React, consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
