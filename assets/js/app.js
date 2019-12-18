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
  const button = document.createElement('button');
  const statusButton = document.createElement('button');
  statusButton.className = 'status-button';
  statusButton.textContent = 'Unread';
  statusButton.setAttribute('data-index', index);
  button.className = 'delete-button';
  button.setAttribute('data-index', index);
  button.innerHTML = 'Delete';

  for (let key = 0; key < Object.values(element).length; key += 1) {
    const cell = row.insertCell();
    const text = document.createTextNode(Object.values(element)[key]);
    if (Object.keys(element)[key] === 'status') {
      cell.appendChild(statusButton);
    } else {
      cell.appendChild(text);
    }
  }
  const buttonCell = row.insertCell();
  buttonCell.appendChild(button);
}

function render(newBook = null) {
  const table = document.querySelector('.body-book-list');
  if (newBook == null) {
    for (let i = 0; i < myLibrary.length; i += 1) {
      generateTable(table, myLibrary[i], i);
    }
  } else {
    generateTable(table, newBook, myLibrary.length - 1);
  }
}


const buttonNewBook = document.querySelector('#new-book');
const tableBookList = document.querySelector('.body-book-list');

function addBookEvent() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  if (title.value !== '' && author.value !== '' && pages.value !== '') {
    const newBook = new Book(title.value, author.value, pages.value, 'Unread');
    title.value = '';
    author.value = '';
    pages.value = '';
    addBookToLibrary(newBook);
    render(newBook);
  }
}

function tableEvent(event) {
  if (event.target.classList.contains('delete-button')) {
    const indexToDelete = event.target.dataset.index;

    deleteBookFromLibrary(indexToDelete);
    this.innerHTML = '';

    render();
  } else if (event.target.classList.contains('status-button')) {
    const indexToUpdate = event.target.dataset.index;

    if (event.target.textContent === 'Unread') {
      event.target.textContent = 'Read';
      updateStatusInLibrary(indexToUpdate, 'Read');
    } else {
      event.target.textContent = 'Unread';
      updateStatusInLibrary(indexToUpdate, 'Unread');
    }
  }
}

buttonNewBook.addEventListener('click', addBookEvent);
tableBookList.addEventListener('click', tableEvent);
