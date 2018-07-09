module.exports = {
    test: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getTest()
        .then( () => {
            return res.status(200).json()
        })
        .catch(console.log)
    }
}