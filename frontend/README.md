# Ecommerce Application Frontend

This is the frontend part of the Ecommerce application built with React and Tailwind CSS. It provides a user-friendly interface for users to browse products, manage their shopping cart, and perform administrative tasks.

## Features

- User authentication with JWT
- Product catalog with filtering options
- Persistent shopping cart
- Order processing functionality
- Basic admin panel for managing products and orders

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd ecommerce-app/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
This will generate a `build` folder with the optimized application.

## Folder Structure

- `public/`: Contains the static files, including `index.html`.
- `src/`: Contains the React components and application logic.
  - `components/`: Reusable components for the application.
  - `App.jsx`: Main application component.
  - `index.jsx`: Entry point for the React application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.