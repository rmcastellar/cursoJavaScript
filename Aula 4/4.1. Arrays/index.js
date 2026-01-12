let book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    publisher: 'Prentice Hall',
    year: 2008,
    isbn: '978-0-13-235088-4',
    chapters: { //podemos aninhar objetos
        chapter1: "fundamentals",
        chapter2: "fundamentals 2",
        chapter3: "fundamentals 3",
        chapter4: "fundamentals 4",
        chapter5: "fundamentals 5",
        chapter6: "fundamentals 6",
        chapter7: "fundamentals 7",
        chapter8: "fundamentals 8",
        chapter9: "fundamentals 9",
        chapter10: "fundamentals 10",
    },
    //funções dentro de objetos
    printBook: function() {
        console.log("Printing...")
    }
}


console.log(book);

book.printBook();
