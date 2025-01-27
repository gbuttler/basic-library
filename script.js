// an array to hold the books
const myLibrary = [];
// finding the library class on the HTML page
const library = document.querySelector(".library");

// Book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readStatus = function () {
    if (this.read == true) {
      console.log("read status can be changed");
      return "Read";
    } else {
      return "Not read";
    }
  };
}

// function that will add a new book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

// dummy new books for test purposes
addBookToLibrary("Turning Pages", "A. Round", "139 pages", false);

addBookToLibrary("Blah", "A. Blaj", "3 pages", true);

addBookToLibrary("blegh ", "blegh", "139000 pages", false);

// //function to display read status
// function displayReadStatus() {}

// function to display book on HTML page
function displayLibrary() {
  //set book display to empty
  let booksToDisplay = "";

  console.log(myLibrary);

  myLibrary.forEach((Book) => {
    //check that the book info is being recieved
    console.log(Book.title);
    checkIfRead();
    // append to the HTML
    booksToDisplay += `
  <div class="library-book">
        <p class="book-title">${Book.title}</p>
        <p class="book-author">${Book.author}</p>
        <p class="book-pages">${Book.pages}</p>
        <p class="book-isRead">${Book.readStatus()}</p>
        <p class='book-read-status' id="book-read" style="display:none">Read</p>
        <p class='book-read-status' id="book-not-read" style="display:none">Not read</p>
        <button class=delete-book-button>Delete Book</button>
      </div>
  `;

    library.innerHTML = booksToDisplay;
    console.log(Book.read);
  });
}

//call display library function
displayLibrary();

//function to display new book form
function showForm() {
  //check this function is being accessed
  console.log("show form button clicked");
  //if display = none then make display inline
  let libraryForm = document.getElementById("library-form");
  libraryForm.classList.toggle("hidden");
}

//function to take form information and display on new book card
document
  .getElementById("library-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submission initialised");

    //get the values from the form submission
    Book.title = event.target.title.value;
    Book.author = event.target.author.value;
    Book.pages = event.target.pages.value;
    Book.read = event.target.read.checked;

    addBookToLibrary(Book.title, Book.author, Book.pages, Book.read);
    displayLibrary();
    checkIfRead();

    console.log(myLibrary);
  });

//function to check if book is read
function checkIfRead() {
  if ((Book.read = true)) {
    console.log("this book is read");
  } else {
    console.log("this is NOT read");
  }
}

//check to see if a book is 'Read' or 'Not read'
//if read make the button green and say 'read'
//if not read make the burron red and say 'not read'
// use an if statement to mean that on the click it will toggle back and forth
