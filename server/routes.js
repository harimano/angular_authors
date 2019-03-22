const controllers = require('./controllers.js');
const path = require('path');

module.exports = app => {

  app
    .get('/api/authors', controllers.getAllAuthors)
    .get('/api/authors/:id', controllers.getOneAuthor)
    .post('/api/authors', controllers.createAuthor)
    .put('/api/authors/:id', controllers.updateAuthor)
    .put('/api/authors/qoute/:id/:quote_id', controllers.updateAuthorQuote)
    .delete('/api/authors/:id', controllers.deleteAuthor)
    .post('/api/quotes', controllers.addQuote)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
