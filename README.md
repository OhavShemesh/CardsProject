# React Project by Ohav Shemesh

Welcome to **Ohav Shemesh's React Project**. This project features a responsive design, intuitive layout, and accessible content, allowing users to browse business cards and perform various actions based on their roles.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Tech Stack](#tech-stack)
5. [Contributing](#contributing)
6. [License](#license)

---

## Project Overview

This project is a React-based web application designed to display and manage business cards. It utilizes modern web development technologies, including React for dynamic user interfaces, Material UI (MUI) for design consistency, and Axios for communicating with a backend API. The app is responsive, meaning it works well across different screen sizes, and provides an accessible, intuitive user experience.

The project is built around core features like creating, editing, and deleting business cards, along with role-based access control that limits or enables features depending on the user's access level. It also includes a custom theme provider, user authentication using JWT, and schema validation with Joi.

---

## Usage

When you visit the app, you can:
1. **Browse business cards** on the main page without logging in.
2. Use the **navigation bar** at the top to register or log in. Once logged in, the features available to you will depend on your role:
   - **Regular User**: Can like cards and view liked ones in the "Favorites" section.
   - **Business User**: In addition to the above, can create new cards and view their cards in the "My Cards" section.
   - **Admin**: Can manage users and cards, including deleting any card, and changing user roles.

The footer includes additional navigation options, such as access to the **About** page, and if logged in, links to the **Favorites** or **My Cards** pages based on user type.

---

## Project Structure

- **`app.jsx`**: The main file containing:
  - **Router**: Handles page navigation.
  - **Layout**: Renders the navbar, footer, and page content.
  - **SnackbarProvider**: Provides snackbars for notifications.
  - **UserProvider**: Checks login status and adjusts UI accordingly.
  - **CustomThemeProvider**: Applies a custom bluish theme to the entire project.

- **Key Folders**:
  - **`pages`**: Contains static pages like `About` and error pages.
  - **`routes`**: Handles routing logic for navigating the app.
  - **`cards`**: Manages everything related to the business cards.

---

## Tech Stack

- **Frontend**:
  - React (with Vite environment)
  - Material UI (MUI) for design, icons, and built-in components
  - Custom theming using MUI's theming system
  
- **Backend**:
  - JWT for authentication and token handling
  - Axios for database communication
  - Joi for validation of schemas

---
