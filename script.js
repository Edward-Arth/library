const myLibrary = [];
const myLibraryTitles = [];
const myLibraryAuthors = [];
const myLibraryPages =[];
const myLibraryRead = [];

let bookTable = document.querySelector('#books');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " " + author + " " + pages + " " + read;
    };
};

function addBookToLibrary (Book) {
    let pushy = myLibrary.push(Book);
    let pushy1 = myLibraryTitles.push(Book.title);
    let pushy2 = myLibraryAuthors.push(Book.author);
    let pushy3 = myLibraryPages.push(Book.pages);
    let pushy4 = myLibraryRead.push(Book.read);
};

function visualLib () {
    for (i = 0; i < myLibrary.length; i++) {
        if (bookTable.innerHTML.includes(myLibraryTitles[i]) == false) {
            bookTable.innerHTML += '<th scope="row">' + myLibraryTitles[i] + '<td>' + myLibraryAuthors[i] + '</td>' + '<td>' + myLibraryPages[i] + '</td>' + '<td>' + myLibraryRead[i] + '</td>';
        }
    };
};

function openForm() {
    document.getElementById("bookForm").style.display = "block";
};

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
    document.getElementById("formContainer").reset();
};

const subBtn = document.querySelector("#subBtn");

subBtn.addEventListener("click", subBtnClick, false);

function subBtnClick (event) {
    event.preventDefault();
    let titleID = document.querySelector("#titleID").value;
    let authorID = document.querySelector("#authorID").value;
    let pagesID = document.querySelector("#pagesID").value;
    let readID = document.querySelector("#readID").value;
    let newBook = new Book(titleID, authorID, pagesID, readID);
    addBookToLibrary(newBook);
    visualLib();
    closeForm();
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '256 pages', 'Yes');
const portrait = new Book('A Portrait of the Artist as a Young Man', 'James Joyce', '299 pages', 'No');

addBookToLibrary (theHobbit);
addBookToLibrary (portrait);

visualLib();