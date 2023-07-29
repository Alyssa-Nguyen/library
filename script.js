




const newBookBtn = document.querySelector('#book-btn');

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

addBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let newBook = new Book(title, author, pages);    
    myLibrary.push(newBook);
    console.log(myLibrary); 
    //addCard();
}

const cardContainer = document.querySelector('.card-container');
/*
function addCard() {
    for (let i=0; i<myLibrary.length; i++) {
        let card = document.createElement('div');
        myLibrary[i] = card.value;
        console.log(card);
    }
    

}
*/
