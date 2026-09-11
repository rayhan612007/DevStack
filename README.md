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

---

## 💡 React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows developers to write HTML-like structures directly inside JavaScript files, making UI components easier to read, write, and maintain.

### 2. What is the difference between props and state?
* **Props (Properties):** Read-only data passed from a parent component down to a child component to configure it.
* **State:** Internal, mutable data managed within a component that triggers a component re-render whenever it is updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and manage dynamic state. In this project, it is used to track the array of selected technologies and manage dynamic lists in real-time.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects such as data fetching, subscriptions, or manual DOM mutations. In this project, it is used with an empty dependency array `[]` to execute an asynchronous `fetch()` call once when the page loads to pull data from a local JSON file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on the unique `key` prop to keep track of individual list items across re-renders. This helps React efficiently identify which elements have been added, modified, or removed, avoiding unnecessary DOM updates.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering is the process of displaying specific UI elements or components based on a boolean condition (true/false). For example, displaying a empty state message when the stack array is empty versus rendering the selected item list when data exists.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** Data flows downward via `props`.
* **Child to Parent:** The parent component passes down a callback function as a prop, which the child component invokes with data passed as arguments.
