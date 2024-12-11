


<h1>FireBlog- Using MERN Stack</h1>
<h3>Overview</h3>
This project is a blog writing website built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in, and create, edit, and delete blog posts. The website offers a simple, user-friendly interface and is fully responsive.
 <br/>

![Screenshot 2024-05-25 111347](https://github.com/user-attachments/assets/b6b996af-3f13-442d-b0da-2a5d2fdb59f7)


<h3>Features</h3>
User Authentication: Users can register, log in, and log out. <br/>
Blog Management: Users can create, edit, and delete their blog posts.<br/>
Responsive Design: The website is mobile-friendly and responsive across different devices. <br/>
User Dashboard: Displays a list of all blog posts created by the logged-in user. <br/>
API: Backend provides RESTful APIs for blog CRUD operations. <br/>
<h2>Technologies Used</h2>
<h3>Frontend:</h3>

<h3>React</h3>
React Router (for navigation) <br/>
Axios (for making HTTP requests) <br/>
Tailwind CSS 
<br/>
<h3>Backend:</h3>

Node.js <br/>
Express.js <br/>
JWT (JSON Web Tokens) for authentication <br/>
Bcrypt.js for password hashing
<br/>
<h3>Database:</h3>

MongoDB (NoSQL database for storing user and blog data) <br/>
Mongoose (for MongoDB object modeling) <br/>
<br/>

<h3>Other Libraries:</h3>

dotenv (for managing environment variables) <br/>
CORS (Cross-Origin Resource Sharing) <br/>
<h2>Getting Started</h2>
Follow the instructions below to set up the project locally. <br/>

<h3>Prerequisites</h3>
Before you begin, make sure you have the following installed: 

Node.js (which comes with npm) <br/>
MongoDB (or a MongoDB Atlas account if using a cloud database) <br/>
Git (optional for cloning the repository)

<br/>

<h2>Setting up the Project</h2>
<h3>1. Clone the Repository</h3>
Clone the repository to your local machine:   <br/>
git clone https://github.com/SAMEER563/blogsphere.git

<br/> 
<h3>2. Install Backend Dependencies</h3>
Navigate to the backend folder and install the necessary dependencies:

cd server <br/>
npm install
<br/>
<h3>3. Set Up Environment Variables</h3>
In the backend folder, create a .env file with the following variables:

PORT=5000 <br/>
MONGO_URI=your_mongodb_connection_string <br/>
JWT_SECRET=your_jwt_secret_key
<br/>
<h3>4. Install Frontend Dependencies</h3>
Navigate to the frontend folder and install the necessary dependencies:
cd ../client  <br/>
npm install
 <br/>

<h3>5. Start the Development Servers</h3>
Now, start both the backend and frontend servers:

Backend: Navigate to the backend folder and run:
cd server  <br/>
npm run dev

 <br/>
Frontend: Open a new terminal window, navigate to the frontend folder, and run:

cd client <br/>
npm start










REACT_APP_BASE_URL="http://localhost:5000/api"
REACT_APP_ASSETS_URL="http://localhost:5000"

