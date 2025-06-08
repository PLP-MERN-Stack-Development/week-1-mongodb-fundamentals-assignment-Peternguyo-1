// queries.js - MongoDB queries for the PLP Bookstore Assignment

// --- Task 1: Find all books ---
// Example: Find all documents in the 'books' collection
db.books.find({});

// --- Task 2: Find books by a specific author (e.g., 'George Orwell') ---
db.books.find({ author: "George Orwell" });

// --- Task 3: Find books published after 1950 ---
db.books.find({ published_year: { $gt: 1950 } });

// --- Task 4: Find books in a specific genre (e.g., 'Fiction') ---
db.books.find({ genre: "Fiction" });

// --- Task 5: Find in-stock books ---
db.books.find({ in_stock: true });

// --- Task 6: (Insert a new book (CRUD - Create)) ---
db.books.insertOne({
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    genre: 'Science Fiction',
    published_year: 1979,
    price: 9.99,
    in_stock: true,
    pages: 193,
    publisher: 'Pan Books'
});

// Example: Update the price of '1984' (CRUD - Update)
db.books.updateOne(
  { title: '1984' },
  { $set: { price: 11.99 } }
); 

// Example: Delete 'Moby Dick' (CRUD - Delete)
db.books.deleteOne({ title: 'Moby Dick' }); 

// Example: Find books by George Orwell and published after 1940 ($and operator)
db.books.find({
  $and: [
    { author: "George Orwell" },
    { published_year: { $gt: 1940 } }
  ]
});

// Example: Aggregate: Count books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      count: { $sum: 1 }
    }
  }
]);

// Example: Create an index on 'author' for faster lookups
db.books.createIndex({ author: 1 }); 