
module.exports = {
    //Create a party in the database.
    create: (req, res, next) => {
       
         const dbInstance = req.app.get('db');
         const {name, street, state, city, zip, description } = req.body;
         
    dbInstance.create_party([name, street, state, city, zip, description])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
  // Get one party from the party table in the database.
  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;
    
    dbInstance.read_party([params.id])
    .then(party =>{
      res.status(200).send(party);
    })
    .catch(() =>{
      res.status(500).send();
    });

  },

  //get all the parties in the database
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_parties()
    .then(parties=>{
      res.status(200).send(parties);
    })
    .catch(() => {
      res.status(500).send();
    });
  },

  //Update party
  updatePraty: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, street, state, city, zip, description} = req.body;

    dbInstance.update_party([req.params.id, name, street, state, city, zip, description])
    .then(() =>{
      res.status(200).send();
    })
    .catch(() => {
      res.status(500).send();
    });

  },

  //delete party

deleteParty: (req, res, next) => {
  const dbInstance = req.app.get('db');
  const {params} = req;

  dbInstance.delete_party([params.id])
  .then(() => {
    res.status(200).send();
  })
  .catch( () => {
    res.status(500).send();
  });


}
    
}