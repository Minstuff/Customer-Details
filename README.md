# Customer-Details
MERN stack application

Structure :
In Backend folder
1. Models (folder) - Contains "Customers.js" which has the schema of the database defined for customers
2. index.js - Contains the connection with mongoose and the Api

In Frontend folder
1. App.js - contains all the routes
2. Components folder :
   (a) Customer.js - Landing page & diaplays all the customers
   (b) CreateCustomer.js - Takes the input from user and adds a new record and stores in the database
   (c) UpdateCustomer.js - Used to update the details of the customer
   (d) SearchCust.js - Used to search customers with their specific customer ID

Requirements:
-VSCode
-Mongoose / MongoDBCompass
-NodeJS


Getting Started :
- Download the zip file
- Unzip the file
- (in cmd) cd backend >> npm i
- (in cmd) cd frontend >> npm i
(this will install all the necessary packages, if not install nodemon, cors, mongoose and express in backend, react, bootstrap in the frontend)
- backend> npm start
- frontend> npm start
(This will get the app started)


Enjoyy!!
