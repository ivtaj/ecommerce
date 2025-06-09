# Ecommerce Application

This is a complete ecommerce application built with a FastAPI backend and a React frontend. The application allows users to register, browse products, add items to their cart, and make purchases.

## Project Structure

```
ecommerce-app
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── api
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── products.py
│   │   │   └── orders.py
│   │   ├── models
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── product.py
│   │   │   └── order.py
│   │   └── utils
│   │       └── security.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
└── README.md
```

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Product Catalog**: Browse and filter products.
- **Shopping Cart**: Persistent cart functionality for users.
- **Order Processing**: Create and manage orders.
- **Admin Panel**: Basic interface for managing products and orders.
- **Security**: Implemented basic security measures.

## Getting Started

### Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```# ecommerce
