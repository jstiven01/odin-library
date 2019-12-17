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
  generateTable(table, myLibrary[myLibrary.length-1], myLibrary.length-1);
}

function generateTable(table, element, index) {

    let row = table.insertRow();
    let button = document.createElement('button');
    button.setAttribute('data-index', index)
    button.innerHTML = 'Delete';
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      console.log(key);
    }
    let buttonCell = row.insertCell();
    buttonCell.appendChild(button);
}


/* 
book1 = new Book("Harry Potter I", "Rowling", "880", "Read");
book2 = new Book("Harry Potter II", "Rowling", "780", "Read");
book3 = new Book("Harry Potter III", "Rowling", "80", "Read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
render();
*/

console.log(myLibrary)

const button_newBook = document.querySelector("#new-book");
function addBookEvent(){
    console.log(this);
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const newBook = new Book(title.value, author.value, pages.value, "Unread");
    addBookToLibrary(newBook);
    render();
}
button_newBook.addEventListener('click', addBookEvent);





