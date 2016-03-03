module.exports = function(app) {
    app.get('/product-list', function(req, res) {
        res.sendFile('./product-list.json', { root: __dirname });
    });

    app.get('/categories', function(req, res) {
        res.sendFile('./categories.json', { root: __dirname });
    });
};