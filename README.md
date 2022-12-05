# YouTube-Clone-MERN #
## Tech Used:

React, Node.js , Express.js, MongoDb Atlas, Firebase For google auth file storage ,
JWT Authontication, bcryptjs for password, redux, redux-toolkit.

## Features

1. Login & Signup: JWT Auth, Google Auth password hashing using bcrypt js

## Product WorkFlow



### FrontEnd : frontend deployed on netlify.com

1. import Reactapp with styled-component and react-router-dom
2. use FontAwesome for icons
3. first add proxy in package.json means your backend url
4. fetch data from backend and show in frontend using axios
5. use timeago.js libraty for to mention how many time ago video uploaded
6. use redux for state management and redux toolkit and to use data around all components
7. implement user psrsistence using localstorage with redux-parsist libraty

### BackEnd : backend deployed on render.com

1. setup basic folder structure for server with models, controllers, and routes
2. define schemas for your db like we are bulding youtube clone so there are 3 entitties like user, videos , comments etc.
3. create controllers for each entity and define all the methods like create, update, delete, get etc.
4. create routes for each entity and define all the methods like create, update, delete, get etc.
5. create a middleware for authontication and authorization
6. create a middleware for error handling
7. create a middleware for validation
