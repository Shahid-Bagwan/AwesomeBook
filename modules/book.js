// modules/book.js
import { containerForAllBooks, bookTextField, authorTextField } from './ui.js';

// list for all books
export const allBooks = [];

export class SingleBook {
  constructor(name, author) {
    this.bookName = name;
    this.bookAuthor = author;
  }

  add() {
    const containerForSingleBook = document.createElement('div');
    containerForSingleBook.classList.add('containerBooks');
    containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${this.bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${this.bookAuthor}</p></div><button class="remove" data-index="${allBooks.length}">remove</button>`;
    containerForAllBooks.appendChild(containerForSingleBook);

    const singleBookObject = new SingleBook(this.bookName, this.bookAuthor);
    allBooks.push(singleBookObject);
    const ab = JSON.stringify(allBooks);
    localStorage.setItem('allBooks', ab);

    bookTextField.value = '';
    authorTextField.value = '';
  }

  static handleRemoveButtonClick() {
    const removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i += 1) {
      removeButtons[i].addEventListener('click', (event) => {
        const button = event.target;
        const bookIndex = button.dataset.index;

        if (bookIndex !== undefined) {
          allBooks.splice(bookIndex, 1);
          localStorage.setItem('allBooks', JSON.stringify(allBooks));
          // Optionally, you may also remove the book element from the DOM
          // if it is rendered dynamically.
          button.parentElement.remove();
        }
      });
    }
  }
}