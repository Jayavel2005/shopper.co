# Nile.co - A Frontend E-commerce Showcase

Nile.co is a modern, responsive e-commerce web application built to showcase frontend development skills using React and Vite. It provides a clean, intuitive user interface for browsing products, viewing details, and managing a personal wishlist. The project is styled with Tailwind CSS for a utility-first approach to design.

**Please note:** This is a frontend-only application. All product and user data is mocked and user sessions are handled via `localStorage`.

## ✨ Features

*   **User Authentication:** Mock sign-up and log-in forms with client-side validation. User session is persisted using `localStorage`.
*   **Product Browsing:** View a list of all products fetched from a mock data source.
*   **Category Filtering:** Filter products by categories like Electronics, Clothing, and more.
*   **Product Details:** Click on a product to see a dedicated details page with a description, rating, and pricing.
*   **Wishlist:** Add or remove products from a personal wishlist with toast notifications for user feedback.
*   **Responsive Design:** The interface is designed to work seamlessly across different screen sizes, from mobile to desktop.

## 🛠️ Technology Stack

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React & Bootstrap Icons
*   **Notifications:** React Toastify

## 🚀 Local Development

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/primeVault.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd primeVault
    ```
3.  **Install project dependencies:**
    ```sh
    npm install
    ```

### Running the Application

*   **Run the development server:**
    This command starts the Vite development server with hot-reloading.
    ```sh
    npm run dev
    ```
*   **Build for production:**
    This command bundles the application for production deployment.
    ```sh
    npm run build
    ```
*   **Lint the code:**
    This command runs the ESLint checker to find and fix problems in the code.
    ```sh
    npm run lint
    ```

## 🔮 Future Enhancements

This project serves as a strong foundation. Here are some potential features and improvements for the future:

*   **React Router:** Replace the current state-based navigation with `react-router-dom` for proper URL-based routing and a better user experience.
*   **Global State Management:** Integrate a state management library like Redux Toolkit or Zustand to handle the cart, wishlist, and user authentication state more efficiently and scalably.
*   **Shopping Cart:**
    *   Implement "Add to Cart" functionality.
    *   Create a dedicated cart page to view, update quantities, and remove items.
*   **Backend Integration:**
    *   Replace the mock `products.js` file with API calls to a real backend service.
    *   Implement a proper database for persisting user and product data.
*   **Search Functionality:** Add a search bar to allow users to search for products by name or tags.
*   **User Profile Page:** Create a page where users can view their order history and manage their profile information.
*   **Checkout Flow:** Design and implement a multi-step checkout process.
*   **Enhanced UI/UX:** Add loading spinners, skeletons, and smoother page transitions for a better user experience.
*   **Testing:** Implement unit and integration tests using a framework like Jest and React Testing Library to ensure the application's functionality and reliability.

