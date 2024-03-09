# Login_And_Registration



Utilize JWT (JSON Web Tokens) for secure authentication, bcrypt for password hashing, and MERN (MongoDB, Express.js, React.js, Node.js) stack for building a robust login and registration page, ensuring efficient user management and data protection.

## Features

<img width="1440" alt="Screenshot 2024-02-23 at 11 02 37 PM" src="https://github.com/yash7488/Login_And_Registration/assets/80100162/0197d078-f998-4cf9-9e70-30bdea209727">

<img width="1440" alt="Screenshot 2024-02-23 at 11 03 13 PM" src="https://github.com/yash7488/Login_And_Registration/assets/80100162/72b74528-5c9f-4643-9a51-d4580a51d954">

<img width="1440" alt="Screenshot 2024-02-23 at 11 02 42 PM" src="https://github.com/yash7488/Login_And_Registration/assets/80100162/1b327f86-b43e-4c5f-97fd-e0b6ce6ee094">


Login_And_Registration is built using the following technologies:

-   **Frontend**: React.js
-   **Backend**: Node.js with Express.js
-   **Database**: MongoDB
   


## Prerequisites

Before running Login_And_Registration, ensure that you have the following software installed:

-   Node.js: Make sure you have Node.js installed on your system. You can download it from the official Node.js website and follow the installation instructions for your operating system.
    
-   MongoDB: Install MongoDB and make sure it is running on your local machine or provide the connection details for a remote MongoDB database.

## Installation

To install and run Login_And_Registration locally, follow these steps:

1.  Clone the repository:
    ```sh    
       git clone https://github.com/yash74880/Login_And_Registration.git
    ```
    
2.  Navigate to the cloned repository:
     
    `cd Login_And_Registration` 
    
3.  Install the dependencies for the frontend:
    
    ```sh    
    cd client
    npm install
    ``` 
    
4.  Install the dependencies for the backend:
        
    ```sh    
    cd ../server
    npm install
    ```
    
## Configuration

Login_And_Registration requires configuration for various services. Here are the steps to set up the required configuration:

### Backend Configuration

1.  Open the `server` directory.
    
2.  Create a `.env` file in this directory.
    
3.  Set the following environment variables in the `.env` file:
    
    -   `MONGO_URL`: The MongoDB connection string.
    
    -   `PORT` : 3000.
    -   `JWT_SECRET` : your jsonwebtoken key
                
  
        
4.  Save the `.env` file.

## Running Login_And_Registration

After completing the configuration steps, you can now run Login_And_Registration locally.

1.  Start the backend server:
	```sh
	cd server 
	node index.js
	```
2. Start the frontend development server:
	```sh
	cd ../client
	npm start
	```
3. Access  Login_And_Registration in your browser at `http://localhost:3001`.


