# node-blog-app

This is a web application built with Node, Express, MongoDB, and EJS as the view engine. It allows users to create, read, update, and delete blog posts.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation
To install and set up the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/heaganhenry/node-blog-app.git

2. Navigate to the project directory:
cd node-blog-app

3. Install the project dependencies:
```
npm install
```

4. Set up the MongoDB database by providing the DB_URI in the `.env` file:
DB_URI=your-mongodb-connection-uri

5. Start the server:
```
nodemon app.js
```


## Usage
To use the Blog Web App, follow these steps:

1. Open your browser and visit `http://localhost:3000` to access the application.

2. Browse through the existing blog posts on the home page.

3. Edit or delete your own blog posts by clicking the blog title then clicking the edit/delete icons.

4. Create new blog posts by clicking on "New Blog" in the navabr.
