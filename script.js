
const newBookBtn = document.querySelector('#book-btn');

// click New Book button to open form
newBookBtn.addEventListener('click', displayForm);

function displayForm() {
    document.querySelector('#book-form').style.display = "block";
}

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

const addBookBtn = document.querySelector("#addBookBtn");
const cardContainer = document.querySelector('.card-container');


// click Add Book to add new book info to myLibrary array
addBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let newBook = new Book(title, author, pages);    
    myLibrary.push(newBook);
    console.log(myLibrary);
    cardContainer.innerHTML = '';   
    myLibrary.forEach((newBook) => {
        let card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = newBook.title + newBook.author;
        console.log(card);
        cardContainer.appendChild(card);        
    });
}





