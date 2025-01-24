// an array to hold the books - this will later be looped through to display the books
const myLibrary = [];

// Book object
function Book(title, author, numpages, read) {
  this.title = title;
  this.author = author;
  this.numpages = numpages;
  this.read = read;
}

// function that will add a new book to the library
function addBookToLibrary(title, author, numpages, read) {
  const newBook = new Book(title, author, numpages, read);

  myLibrary.push(newBook);
}

// dummy new book for test purposes
addBookToLibrary("Turning Pages", "A. Round", "139 pages", "Read");

addBookToLibrary("Blah", "A. Blaj", "3 pages", "Read");

addBookToLibrary("blegh ", "blegh", "139000 pages", "Not read");

// create function to display book on HTML page
let library = document.getElementsByClassName("library");
console.log(library);
myLibrary.forEach((Book) => {
  console.log(Book.title);
  //   let libraryBook = document.createElement("div");
  //   console.log(libraryBook);
  //   libraryBook.setAttribute("class", "library-book");
  //   library.append(Book.title);
  // create p for title and set attribute
  // create p for author and set attribute
  // create p for pages and set attribute
  // create p for read or not and set attribute
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
