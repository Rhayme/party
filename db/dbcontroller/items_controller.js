module.exports = {

    createItems: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, qty, party_id} = req.body;

        dbInstance.create_item([name, description, qty, party_id])
        .then((result) =>{
            console.log(result.id);
           return dbInstance.read_item([result[0].id])
            .then( item => {
               
                res.status(200).send(item);
            })
                      
        })
        .catch(() => {
            res.status(500).send();
        })

},

getOneItem: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.read_item([params.id])
    .then( item => {
        res.status(200).send(item);
    })
    .catch(() =>{
        res.status(500).send();
    })
},

getAllItems: (req, res, next) => {
    const dbInstance = req.app.get('db');
  
    dbInstance.read_items()
    .then(items => {
        res.status(200).send(items);
    })
    .catch(() => {
        res.status(500).send();
    })

},
getPartyItems: (req, res, next) => {
    const dbInstance = req.app.get('db');
   const {params} = req;

    dbInstance.read_party_items([params.party_id])
    .then(items => {
        res.status(200).send(items);
    })
    .catch(() => {
        res.status(500).send();
    })

},



updateItem: (req, res, next) => {
    const dbInstance =  req.app.get('db');
    const { name, description, qty } = req.body;
   

    dbInstance.update_item([req.params.id, name, description, qty])
    .then( () => res.status(200).send())
    .catch( () => res.status(500).send());


},
deleteItem: (req, res, next) => {

    const dbInstance =  req.app.get('db');
    const {params} = req;

    dbInstance.delete_item([params.id])
    .then(() => res.status(200).send())
    .catch(() =>  res.status(500).send());


}

}