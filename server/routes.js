const controllers = require('./controllers.js');

module.exports = app => {

  app
    .get('/api/authors', controllers.getAllAuthors)
    .get('/api/authors/:id', controllers.getOneAuthor)
    .post('/api/authors', controllers.createAuthor)
    .put('/api/authors/update/:id', controllers.updateAuthor)
    .delete('/api/authors/:id', controllers.deleteAuthor);
}
