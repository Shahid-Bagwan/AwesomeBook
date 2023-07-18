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
    containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${this.bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${this.bookAuthor}</p></div><button class="remove">remove</button>`;
    containerForAllBooks.appendChild(containerForSingleBook);
    const singleBookObject = new SingleBook(this.bookName, this.bookAuthor);
    allBooks.push(singleBookObject);
    const ab = JSON.stringify(allBooks);
    localStorage.setItem('allBooks', ab);
    bookTextField.value = '';
    authorTextField.value = '';
  }
  // deal with it

  static handleRemoveButtonClick() {
    console.log('handleRemoveButtonClick');
    const removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i += 1) {
      removeButtons[i].addEventListener('click', () => {
        allBooks.splice(i, 1);
        localStorage.setItem('allBooks', JSON.stringify(allBooks));
      });
    }
  }
}