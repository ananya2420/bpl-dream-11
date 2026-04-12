Live Link: https://playful-cupcake-7483fa.netlify.app/


# 🏏 Cricket Player Selection App

A React-based cricket player selection system where users can select players using a virtual coin system. Users can manage selected players, track available budget, and dynamically switch between available and selected squads.

---

## 🚀 Live Demo
https://your-netlify-link.netlify.app

---

## 🛠️ Tech Stack

- React.js (Functional Components)
- React Hooks (useState, use, Suspense)
- Tailwind CSS
- DaisyUI
- React Icons
- JavaScript (ES6+)
- Fetch API

---

## ✨ Features

### 🏏 Player Selection System
- View available cricket players
- Select players using coin balance
- Prevent selection if insufficient coins

### 💰 Coin Management
- Start with initial coin balance
- Deduct coins when selecting players
- Refund coins when removing players

### 🔁 Dynamic Tabs
- Switch between Available Players and Selected Players
- Real-time updates of selected player count

### 🗑️ Player Removal System
- Remove selected players anytime
- Automatically restore coins

---

## 🧠 Key Learnings

### React State Management
- Learned how to manage shared state across multiple components
- Understood prop drilling challenges

### Async State Updates
- Learned React state updates are asynchronous
- Fixed coin update timing issues

### Immutable State Handling
- Improved understanding of array manipulation in React
- Used `.filter()` correctly for deletion logic

---

## 🐛 Major Issues Faced & Fixes

### 1. Coin Not Updating in Navbar
- Issue: Coin value did not reflect after selecting players
- Fix: Correct state passing and update flow from child to parent
- Time spent: ~4 hours

### 2. Delete Player Button Bug
- Issue: Selected players were not removing properly
- Fix: Used proper immutable array filtering
```js
const filtered = selectedPlayers.filter(
  player => player.playerName !== target.playerName
);
setSelectedPlayers(filtered);
