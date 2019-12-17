console.log("this is a test");
let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render() {
  let table = document.querySelector(".book-list");
  generateTable(table, myLibrary);
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

book1 = new Book("Harry Potter I", "Rowling", "880", "Read");
book2 = new Book("Harry Potter II", "Rowling", "780", "Read");
book3 = new Book("Harry Potter III", "Rowling", "80", "Read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
render();

console.log(myLibrary)