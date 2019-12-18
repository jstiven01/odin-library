const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function deleteBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function updateStatusInLibrary(index, status) {
  myLibrary[index].status = status;
}

function generateTable(table, element, index) {
  const row = table.insertRow();
  const button = document.createElement("button");
  const statusButton = document.createElement("button");
  statusButton.className = "status-button";
  statusButton.textContent = "Unread";
  statusButton.setAttribute("data-index", index);
  button.className = "delete-button";
  button.setAttribute("data-index", index);
  button.innerHTML = "Delete";
  for (let key in element) {
    let cell = row.insertCell();
    let text = document.createTextNode(element[key]);
    if (key == "status") {
      cell.appendChild(statusButton);
    } else {
      cell.appendChild(text);
    }
  }
  let buttonCell = row.insertCell();
  buttonCell.appendChild(button);
}

function render(newBook = null) {
  const table = document.querySelector(".body-book-list");
  if (newBook == null) {
    for (let i = 0; i < myLibrary.length; i += 1) {
      generateTable(table, myLibrary[i], i);
    }
  } else {
    generateTable(table, newBook, myLibrary.length - 1);
  }
}


const button_newBook = document.querySelector("#new-book");
const table_bookList = document.querySelector(".body-book-list");

function addBookEvent() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  if (title.value != "" && author.value != "" && pages.value != "") {
    const newBook = new Book(title.value, author.value, pages.value, "Unread");
    title.value = "";
    author.value = "";
    pages.value = "";
    addBookToLibrary(newBook);
    render(newBook);
  }
}

function tableEvent(event) {
  if (event.target.classList.contains("delete-button")) {
    let index_to_delete = event.target.dataset["index"];

    deleteBookFromLibrary(index_to_delete);
    this.innerHTML = "";

    render();
  } else if (event.target.classList.contains("status-button")) {
    let index_to_update = event.target.dataset["index"];

    if (event.target.textContent == "Unread") {
      event.target.textContent = "Read";
      updateStatusInLibrary(index_to_update, "Read");
    } else {
      event.target.textContent = "Unread";
      updateStatusInLibrary(index_to_update, "Unread");
    }
  }
}

button_newBook.addEventListener("click", addBookEvent);
table_bookList.addEventListener("click", tableEvent);
