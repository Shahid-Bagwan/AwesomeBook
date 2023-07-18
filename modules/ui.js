// modules/ui.js

import { DateTime } from 'luxon';

export const containerForAllBooks = document.querySelector('.container');
export const bookTextField = document.querySelector('.bookName');
export const authorTextField = document.querySelector('.bookAuthor');
export const addButton = document.querySelector('.add');
export const addNew = document.getElementById('addNew');
export const contact = document.getElementById('contact');
export const list = document.getElementById('list');
const containerAllbooks = document.querySelector('div.container');
const inputForNewBook = document.querySelector('div.inputs');
const contactContainer = document.querySelector('div.contact');
const dateElement = document.querySelector('.date');
const dt = DateTime.now();

export function showAllBooks() {
  containerAllbooks.style.display = 'block';
  inputForNewBook.style.display = 'none';
  contactContainer.style.display = 'none';
  list.style.backgroundColor = 'black';
  contact.style.backgroundColor = 'grey';
  addNew.style.backgroundColor = 'grey';
}

export function showAddNew() {
  containerAllbooks.style.display = 'none';
  inputForNewBook.style.display = 'block';
  contactContainer.style.display = 'none';
  addNew.style.backgroundColor = 'black';
  contact.style.backgroundColor = 'grey';
  list.style.backgroundColor = 'grey';
}

export function showContact() {
  containerAllbooks.style.display = 'none';
  inputForNewBook.style.display = 'none';
  contactContainer.style.display = 'block';
  addNew.style.backgroundColor = 'grey';
  contact.style.backgroundColor = 'black';
  list.style.backgroundColor = 'grey';
}

export function updateDate() {
  dateElement.textContent = `${dt.toLocaleString()}`;
}
