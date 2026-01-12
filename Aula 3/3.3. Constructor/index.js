//constructor function por convesção usamos PascalNotation e nao camelCase
function CreateBook(title, author, publisher, year) {
  (this.title = title),
    (this.author = author),
    (this.publisher = publisher),
    (this.year = year);
}

const book1 = new CreateBook(
  "Clean Code",
  "Robert C. Martin",
  "Prentice Hall",
  2008
);

console.log(book1);

const book2 = new CreateBook(
  "Clean Code",
  "Robert C. Martin",
  "Prentice Hall",
  2009
);

console.log(book2);
