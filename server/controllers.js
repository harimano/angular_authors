const Author = require('./models');

module.exports = {

  getAllAuthors: (req, res) => {
    Author.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    console.log("server", DATA);
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}