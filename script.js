// an array to hold the books - this will later be looped through to display the books
const myLibrary = [];

// Book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function that will add a new book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

// dummy new book for test purposes
addBookToLibrary("Turning Pages", "A. Round", "139 pages", "Read");

addBookToLibrary("Blah", "A. Blaj", "3 pages", "Read");

addBookToLibrary("blegh ", "blegh", "139000 pages", "Not read");

// create function to display book on HTML page
const library = document.querySelector(".library");
let booksToDisplay = "";
console.log(library);
myLibrary.forEach((Book) => {
  //check that the book info is being recieved
  console.log(Book.title);
  // append to the HTML
  booksToDisplay += `
  <div class="library-book">
        <p class="book-title">${Book.title}</p>
        <p class="book-author">${Book.author}</p>
        <p class="book-pages">${Book.pages}</p>
        <p class="book-isRead">${Book.read}</p>
      </div>
  `;

  library.innerHTML = booksToDisplay;

  console.log(booksToDisplay);
});

function showForm() {
  //check this function is being accessed
  console.log("show form button clicked");
  //if display = none then make display inline
  let libraryForm = document.getElementById("library-form");
  libraryForm.classList.toggle("hidden");
}

document
  .getElementById("library-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submission initialised");

    //get the values from the form submission
    Book.title = event.target.title.value;
    Book.author = event.target.author.value;
    Book.pages = event.target.pages.value;
    Book.read - event.target.read.value;

    function addBookToLibrary(title, author, pages, read) {
      const newBook = new Book(title, author, pages, read);

      myLibrary.push(newBook);
    }

    addBookToLibrary();
    console.log(myLibrary);
  });

// idea section below

//use to add array items to page? - code copied from a previous project
// document
//   .getElementsByClassName("library")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("I am submitted");
//     const bookTitle = document.getElementsByClassName("book-title");
//     para = document.createElement("p");
//     para.setAttribute("class", "projectSummary");
//     projectDesc.appendChild(para);
//     projectObject.projectName = event.target.name.value;
//     projectObject.projectMedium = event.target.medium.value;
//     para.innerHTML = `My project is called ${projectObject.projectName} and I'm going to be ${projectObject.projectMedium} it`;
//   });

//create all of the elements to house the information
// let libraryBook = document.createElement("div");
// libraryBook.setAttribute("class", "library-book");
// let bookTitle = document.createElement("p");
// bookTitle.setAttribute("class", "book-title");
// let bookAuthor = document.createElement("p");
// bookAuthor.setAttribute("class", "book-author");
// let bookPages = document.createElement("p");
// bookPages.setAttribute("class", "book-pages");
// let bookIsRead = document.createElement("p");
// bookIsRead.setAttribute("class", "book-isRead");

// append the paragraphs to the div
// libraryBook.appendChild(bookTitle);
// libraryBook.appendChild(bookAuthor);
// libraryBook.appendChild(bookPages);
// libraryBook.appendChild(bookIsRead);

// console.log(libraryBook);

// get and set attributes from books in array
// bookTitle.innerHTML = Book.title;
// bookAuthor.innerHTML = Book.author;
// bookPages.innerHTML = Book.pages;
// bookIsRead.innerHTML = Book.read;
// libraryBook.appendChild(Book.title);
// create p for title and set attribute
// create p for author and set attribute
// create p for pages and set attribute
// create p for read or not and set attribute
