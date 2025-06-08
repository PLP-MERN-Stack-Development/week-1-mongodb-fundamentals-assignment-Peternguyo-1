# MongoDB Fundamentals Assignment

This repository contains my solutions for the MongoDB Fundamentals Assignment.

## Setup Instructions

Follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-Peternguyo-1.git
    cd week-1-mongodb-fundamentals-assignment-Peternguyo-1.git
    ```

2.  **Install Node.js:**
    Ensure you have Node.js v18 or higher installed. You can download it from [nodejs.org](https://nodejs.org/). Verify with:
    ```bash
    node -v
    ```

3.  **Install MongoDB Community Server:**
    Download and install MongoDB Community Server for your operating system from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
    Ensure the MongoDB `bin` directory is added to your system's PATH. Verify with:
    ```bash
    mongod --version
    mongosh --version
    ```

4.  **Start MongoDB Server:**
    Open a terminal (e.g., Git Bash) and run:
    ```bash
    mongod
    ```
    Leave this terminal window open; it runs the MongoDB server.

5.  **Install Node.js Dependencies:**
    In a **new** terminal window, navigate to your repository and install the required `mongodb` package:
    ```bash
    npm install mongodb
    ```

6.  **Populate the Database:**
    Run the provided script to insert sample book data into the `plp_bookstore` database:
    ```bash
    node insert_books.js
    ```
    This will create the `plp_bookstore` database and `books` collection if they don't exist, and insert the sample data.

## Running Queries

1.  **Open MongoDB Shell:**
    In a **new** terminal window, connect to your MongoDB instance:
    ```bash
    mongosh
    ```

2.  **Switch to the database:**
    ```javascript
    use plp_bookstore
    ```

3.  **Execute queries:**
    All assignment queries are located in `queries.js`. You can copy and paste them into the `mongosh` terminal to execute them and see the results.

---