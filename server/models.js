const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser:true})
  .catch(err => console.log(err));

const AuthorSchema = new mongoose.Schema({
    Name: {
      type: String, 
      default: ""
    },
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema); 
