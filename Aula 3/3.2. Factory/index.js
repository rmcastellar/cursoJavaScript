



//factory function
function createBook(title, author, publisher, year) {
    
    let book = {
        title: title,
        author: author,
        publisher: publisher,
        year: year,
    }

    return book;
}

const book1 = createBook("Clean Code", "Robert C. Martin", "Prentice Hall", 2008);
const book2 = createBook("Mente Brava", "John Doe", "Prentice Hall", 2008);

console.log(book1);
console.log(book2);


//posso adicionar uma variavel a apenas 1 objeto
book1.color = "red";
console.log(book1);
