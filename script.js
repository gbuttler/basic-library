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
addBookToLibrary("Outlander", "	Diana Gabaldon", "850 pages", true);

addBookToLibrary("North and South", "	Elizabeth Gaskell", "480 pages", true);

addBookToLibrary("Oliver Twist ", "Charles Dickens", "608 pages", false);

// function to display book on HTML page
function displayLibrary() {
  //set book display to empty
  let booksToDisplay = "";

  console.log(myLibrary);
  let i = 0;

  myLibrary.forEach((Book) => {
    //check that the book info is being recieved
    console.log(Book.title);

    // append to the HTML
    booksToDisplay += `
  <div class="library-book">
        <p class="book-title">${Book.title}</p>
        <p class="book-author">${Book.author}</p>
        <p class="book-pages">${Book.pages}</p>
        <p class="book-isRead">${Book.readStatus()}</p>
        <button class='change-read-status-button' onclick='changeReadStatus(${i})'>Change read status</button>
        <button class=delete-book-button onclick='deleteBook(${i})'>Delete Book</button>
      </div>
  `;

    library.innerHTML = booksToDisplay;
    console.log(Book.read);
    i++;
  });
}

//call display library function
displayLibrary();

//function to display new book form
function showForm() {
  //check this function is being accessed
  console.log("show form button clicked");
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

    let libraryForm = document.getElementById("library-form");
    libraryForm.classList.toggle("hidden");

    displayLibrary();

    console.log(myLibrary);
  });

//function to allow you to toggle the read status
function changeReadStatus(i) {
  console.log("button click");
  let bookStatus = myLibrary[i];
  console.log(bookStatus.read);
  if (bookStatus.read === true) {
    bookStatus.read = false;
  } else {
    bookStatus.read = true;
  }
  displayLibrary();
}

//function to delete a book
function deleteBook(i) {
  let deleteBook = i;
  newLibrary = myLibrary.splice(deleteBook, 1);
  displayLibrary();
  console.log("book deleted");
}
