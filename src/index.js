// index.js

import {
  showAllBooks, showAddNew, showContact, updateDate,
  addButton, containerForAllBooks, bookTextField, authorTextField, list, addNew, contact,
} from '../modules/ui.js';
import { SingleBook, allBooks } from '../modules/book.js';

// Date
updateDate();

window.onload = () => {
  if (JSON.parse(localStorage.getItem(allBooks)) !== 0) {
    SingleBook.handleRemoveButtonClick();
  }
};

function displayBooks() {
  const arrayFromLocalStorage = localStorage.getItem(allBooks);
  if (arrayFromLocalStorage !== null) {
    allBooks = JSON.parse(arrayFromLocalStorage);
    for (let i = 0; i < allBooks.length; i += 1) {
      const containerForSingleBook = document.createElement('div');
      containerForSingleBook.classList.add('containerBooks');
      containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${allBooks[i].bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${allBooks[i].bookAuthor}</p></div><button class="remove">remove</button>`;
      containerForAllBooks.appendChild(containerForSingleBook);
    }
  }
}

displayBooks();

addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    const book = new SingleBook(bookTextField.value, authorTextField.value);
    book.add();
    SingleBook.handleRemoveButtonClick();
  }
});

list.addEventListener('click', showAllBooks);
addNew.addEventListener('click', showAddNew);
contact.addEventListener('click', showContact);
