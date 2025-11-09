# Dynamic Color Clock (React)

This project is a simple real-time digital clock built using **React**. It displays the current **date**, along with the time in both **12-hour** and **24-hour** formats. The clock updates automatically every second and is styled to provide a clear visual contrast between text and background.

---

## Features

- **Real-time clock** that updates every second using React state.
- Shows **current date** formatted in a clean, readable format.
- Displays **both time formats**:
  - **12-hour format** (with AM/PM)
  - **24-hour format** (military time / international standard)
- Custom styling for high visibility (green text on black background).
- Lightweight and easy to understand — great example of React hooks and formatting.

---

## Technologies Used

| Tool / Library | Purpose |
|----------------|---------|
| **React** | UI framework used to structure and render the clock. |
| **date-fns** | Used to format time and date cleanly. |
| **CSS** | Used for color and layout styling. |

---

## How It Works

1. The component stores the **current time** in a React state variable.
2. A `useEffect` hook sets up a timer (`setInterval`) to update that state every second.
3. The `date-fns` library formats the date and time into readable strings.
4. The formatted values are displayed onto the page and re-render automatically every time the state updates.

---

## Running the Project

### 1. Install Dependencies
Make sure Node.js is installed, then open the project folder in a terminal:

bash
1. npm install
2. npm run dev
3. view in browser

File Structure:
src/
│ App.jsx        # Main clock component with logic + UI
│ App.css        # Custom styling for layout and colors
│ index.css      # Vite/React global defaults
│ main.jsx       # Renders App into the DOM
