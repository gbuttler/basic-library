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
}

// function that will add a new book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

// dummy new books for test purposes
addBookToLibrary("Turning Pages", "A. Round", "139 pages", "Read");

addBookToLibrary("Blah", "A. Blaj", "3 pages", "Read");

addBookToLibrary("blegh ", "blegh", "139000 pages", "Not read");

// function to display book on HTML page
function displayLibrary() {
  //set book display to empty
  let booksToDisplay = "";
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
        <input type="checkbox" id="read-checkbox">
        <p class='book-read-status' id="book-read" style="display:none">Read</p>
        <p class='book-read-status' id="book-not-read" style="display:none">Not read</p>
        <button class=delete-book-button>Delete Book</button>
      </div>
  `;

    library.innerHTML = booksToDisplay;
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
    Book.read = event.target.read.value;

    addBookToLibrary(Book.title, Book.author, Book.pages, Book.read);
    displayLibrary();

    console.log(myLibrary);
  });

//function to check if book is read

function checkIfRead() {
  let readCheckbox = document.getElementById("read-checkbox");
  let yesRead = document.getElementById("book-read");
  let notRead = document.getElementById("book-not-read");

  //tick box if book is marked as read in the object
  if (Book.read === "Read") {
    yesRead.style.display = "block";
  } else {
    notRead.style.display = "block";
  }
}
