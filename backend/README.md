# Ecommerce Backend API

This is the backend part of the ecommerce application, built using FastAPI. It provides a RESTful API for managing users, products, and orders.

## Features

- **User Authentication**: Secure user registration and login using JWT tokens.
- **Product Management**: Endpoints to fetch products with filtering options.
- **Shopping Cart**: Persistent cart functionality for users.
- **Order Processing**: Create and retrieve orders seamlessly.
- **Admin Panel**: Basic functionalities for managing products and orders.

## Project Structure

```
ecommerce-app
├── backend
│   ├── app
│   │   ├── api
│   │   ├── models
│   │   └── utils
│   ├── requirements.txt
│   └── README.md
├── frontend
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-app/backend
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To start the backend server, run:
```
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Documentation

The API documentation is automatically generated and can be accessed at `http://localhost:8000/docs`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.