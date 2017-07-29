const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

/*sql controllers*/ 
const partyController = require('./db/dbcontroller/party_controller');
const itemController = require('./db/dbcontroller/items_controller');
const userController = require('./db/dbcontroller/user_controller');

//ConnectionString is variable that will conect massive with my server.
const connectionString = "postgres://rayme:Kelvin01@localhost/party";
const app =  module.exports = express();






//calling express and usign body-parser and cors middleware.

massive(connectionString).then(dbInstance=> {
    app.set('db', dbInstance);
});


app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname))



/***********************************PARTY*******************************/
app.post('/api/party', partyController.create);
app.get('/api/party', partyController.getAll);
app.get('/api/party/:id', partyController.getOne);
app.put('/api/party/:id', partyController.updatePraty);
app.delete('/api/party/:id', partyController.deleteParty);

/**********************************ITEM********************************/
app.post('/api/items', itemController.createItems);
app.get('/api/items', itemController.getAllItems);
app.get('/api/items/:id', itemController.getOneItem);
app.put('/api/items/:id', itemController.updateItem);
app.delete('/api/items/:id', itemController.deleteItem);

/**********************************USER********************************/
app.post('/api/users', userController.createUser);
// app.get('/api/users', );
// app.get('/api/users/:id',);
// app.put('/api/users/:id',);
app.delete('/api/users/:id', userController.deleteUser);





//Setting up the port where the app is going to be listening.
const port = 3000;
app.listen(port, () =>{console.log( `Listening on port ${port}.`)});


