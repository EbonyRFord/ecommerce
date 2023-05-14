const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
//shows where we will be listening for the port on our local host server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
//we can use our routes that will help us perfrom CRUD operations with the data. 
// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
