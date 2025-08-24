# Nile.co - E-commerce Platform

Nile.co is a modern, responsive e-commerce web application built with React and Vite. It provides a clean user interface for browsing products, viewing details, and managing a personal wishlist. The project is styled with Tailwind CSS for a utility-first approach to design.

## ✨ Features

***User Authentication:** Sign up and log in forms with client-side validation. User session is persisted using `localStorage`.
*   **Product Browsing:** View a list of all products.
*   **Category Filtering:** Filter products by categories like Electronics, Clothing, and more.
*   **Product Details:** Click on a product to see a dedicated details page with a description, rating, and pricing.
*   **Wishlist:** Add or remove products from a personal wishlist with toast notifications for feedback.
*   **Responsive Design:** The interface is designed to work seamlessly across different screen sizes.

## 🛠️ Tech Stack

*   **Frontend Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
*   **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd primeVault
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Project

*   **Development Server:** To run the app in development mode with hot-reloading.
    ```sh
    npm run dev
    ```
*   **Production Build:** To build the app for production.
    ```sh
    npm run build
    ```
*   **Linting:** To run the ESLint checker.
    ```sh
    npm run lint
    ```

## 🔮 Future Features & Improvements

Here is a list of features that could be implemented to enhance the project:

*   **React Router:** Replace the current state-based navigation with `react-router-dom` for proper URL-based routing.
*   **Global State Management:** Integrate a state management library like Redux Toolkit or Zustand to handle the cart, wishlist, and user authentication state more efficiently.
*   **Shopping Cart:**
    *   Implement "Add to Cart" functionality.
    *   Create a dedicated cart page to view, update quantities, and remove items.
*   **Backend Integration:**
    *   Replace the mock `products.js` file with API calls to a real backend service.
    *   Implement a proper database for user and product data.
*   **Search Functionality:** Add a search bar to allow users to search for products by name or tags.
*   **User Profile Page:** Create a page where users can view their order history and manage their profile information.
*   **Checkout Flow:** Design and implement a multi-step checkout process.
*   **Enhanced UI/UX:** Add loading spinners, skeletons, and smoother page transitions for a better user experience.
*   **Testing:** Write unit and integration tests using a framework like Jest and React Testing Library to ensure the application's functionality and reliability.
