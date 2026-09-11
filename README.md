# ⚡ Dev Stack — Tech Stack Builder

A modern, interactive developer web application designed to help developers explore, compare, and customize their ideal technology stack for any project.

---

## 📖 Description

**Dev Stack** simplifies the process of choosing software technologies for modern web development. Users can browse categorized technologies—ranging from frontend frameworks to databases and DevOps tooling—view key metrics like difficulty and ratings, and dynamically build a customized stack with real-time feedback.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS, Custom CSS Gradients
* **Icons and Buttons:**  React Icon , daisuUI
* **Alerts & Toast:** React-Toastify
* **Data Fetching:** Asynchronous JSON Fetch API

---

## ✨ Key Features

* **Dynamic Stack Panel:** Select technologies across multiple categories with single-click additions, auto-updating counters, and duplicate-prevention guardrails.
* **Interactive Grid Layout:** A responsive layout displaying key tech attributes including ratings, difficulty chips, badges, and detailed descriptions.
* **Instant Visual Feedback:** Integrated `react-toastify` alerts provide immediate notifications for adding, removing, or clearing stack items.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16.0 or higher)
* npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/dev-stack.git](https://github.com/your-username/dev-stack.git)
   cd dev-stack
2.**Install dependencies:**
  npm install
3.**Start the development server:**
  npm start
4. Open http://localhost:3000 in your browser to view the application.

**💡 React Conceptual Questions & Answers**
**1. What is JSX, and why is it used in React?**
  JSX means Javascript XML. It allows to write HTML directly inside a Javascript file, to     making easier to read and write and it maintain the code sequence.
**2. What is the difference between props and state?**
  Props are only need when we want to pass input into a component from it's parent to child component. Otherside State is internally manage within the component that can changed and component are re-render when updated.
**3.What does the useState hook do, and where did you use it in this project?**
  useState allows a functional component to hold and update reactive data. It used to track of array and manage dynamic list
**4.What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect handles side effects in React components when need to data fatching or DOM mutations. It used to run an asynchronous fetch() call once when the page load to data from local JSON file.
**5.Why does every item in a .map() list need a unique key prop?**
React uses the unique Key prop to identify which items have changed, or added or removed.

**6.What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI elements depending on a specific condition when it's true or false.

**7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data flows down from a parent to a child component using props .The parent passes a callback function down as a prop then trigger with data as an argument from child component.
