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

function deleteBookFromLibrary(index){
    myLibrary.splice(index, 1);
    console.log("mylibrary deleted", myLibrary);
}

function render(newBook = null) {

  let table = document.querySelector(".body-book-list");
  if (newBook == null) {
    for(let i=0; i< myLibrary.length; i++){
      generateTable(table, myLibrary[i], i);
    }
  }else{
    generateTable(table, newBook, myLibrary.length-1);
  }
}

function generateTable(table, element, index) {

    let row = table.insertRow();
    let button = document.createElement('button');
    button.className = "delete-button"
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
const table_bookList = document.querySelector(".body-book-list")

function addBookEvent(){
    console.log(this);
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const newBook = new Book(title.value, author.value, pages.value, "Unread");
    title.value  = ""; 
    author.value  = "";
    pages.value  = "";
    addBookToLibrary(newBook);
    render(newBook);
}

function tableEvent(event){

    if (!event.target.classList.contains('delete-button')) return;

    let index_to_delete = event.target.dataset['index'];

    deleteBookFromLibrary(index_to_delete);
    this.innerHTML = "";

    console.log("Oi button", index_to_delete);
    render();
    
}
button_newBook.addEventListener('click', addBookEvent);
table_bookList.addEventListener('click', tableEvent);





