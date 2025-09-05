# BuyBaazar - A Multi-Tenant E-commerce Platform

**BuyBaazar** is a comprehensive, multi-tenant e-commerce platform that connects multiple sellers with customers. The project is built with a modern, full-stack architecture designed for scalability and a personalized user experience.

![BuyBaazar Main Screenshot](https://res.cloudinary.com/doqpavxwl/image/upload/v1693728600/readme-image.png)

#### Key Features

* **Multi-Tenant Architecture**: Supports multiple sellers, each with their own products, profiles, and order management.
* **Secure Authentication & Authorization**: Implemented with Spring Security and JWTs for secure access control.
* **Comprehensive Admin Panel**: A secure dashboard for administrators to manage sellers, products, coupons, and view all transactions.
* **AI-Powered Features**: Integrates a recommendation engine and an AI chatbot using the Gemini API to enhance the shopping experience.
* **Advanced Order Fulfillment**: Features an advanced logistics system with a network of warehouses and distributors for efficient order delivery and real-time tracking.

#### Technology Stack

* **Frontend**: React.js with Redux Toolkit and TypeScript for robust state management and a modern, type-safe user interface.
* **Backend**: Spring Boot (Java) for building a scalable and secure microservice-based API.
* **Database**: MySQL for reliable data storage.
* **AI**: Gemini API for product suggestions and a product-specific chatbot.
* **Cloud**: Cloudinary for image management and storage.

#### Getting Started

1.  **Clone the Repository**:
    ```bash
    git clone [repository_url]
    cd buybaazar
    ```

2.  **Backend Setup**:
    * Navigate to the `backend` directory.
    * Configure your MySQL database connection in `src/main/resources/application.properties`.
    * Set up your API keys for Razorpay, Stripe, and Cloudinary.
    * Build and run the Spring Boot application.

3.  **Frontend Setup**:
    * Navigate to the `frontend` directory.
    * Install dependencies: `npm install`
    * Start the React development server: `npm start`

The application will be accessible at `http://localhost:3000` (or `http://localhost:5173` depending on your setup).

#### API Endpoints

A detailed list of API endpoints can be found in the `API.md` file (to be added). Key endpoints include:

* `/auth`: User and seller authentication.
* `/api/products`: Public access to product listings.
* `/api/admin`: Protected endpoints for administrative tasks.
* `/api/ai`: Endpoints for AI-powered features.

We hope you find this project informative and useful. Feel free to contribute or raise issues!
