module.exports = {
    test: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {NAME, PASS} = req.params
        console.log(dbInstance, 'dbinstance')
        dbInstance.getTest([NAME, PASS])
        .then( response => {
            return res.status(200).json(response)
        })
        .catch(console.log)
    }
}