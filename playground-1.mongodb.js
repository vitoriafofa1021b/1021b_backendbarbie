// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('db_barbie');

// Create a new document in the collection.
db.getCollection('filmes').insertOne({
     _id:3,
     titulo: "barbie e o castelo de diamante",
     descricao:"filme"
     imagem:"fotofilme.jpg"
    });
