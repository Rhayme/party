module.exports = {
    
    createUser: (req, res, next) => {

        const dbInstance = req.app.get('db');

        const {email, password} = req.body;

        dbInstance.create_user([email, password])
        .then(() => res.status(200).send())
        .catch(()  => res.status(500).send());

    },

    deleteUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_user([params.id])
        .then( () => res.status(200).send())
        .catch(() => res.status(500).send())
        }
    
}