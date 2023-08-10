
const newBookBtn = document.querySelector('#book-btn');
const closeForm = document.querySelector('#close-form');
newBookBtn.style.cursor = "pointer";
closeForm.style.cursor = "pointer";

// click New Book button to open form
newBookBtn.addEventListener('click', displayForm);

function displayForm() {
    document.querySelector('.book-form').style.display = "block";
}
// click close to close the new book form
closeForm.addEventListener('click', closeBookForm);

function closeBookForm() {
    document.querySelector('.book-form').style.display = "none";
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
    let title = document.querySelector("#title").value;         //getting value from the new book form and assigning them here
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    let newBook = new Book(title, author, pages);               //creating a new book object by referencing above value from the form  
    myLibrary.push(newBook);                                    // pushing the new book object into myLibrary array                              
    console.log(myLibrary);
    cardContainer.innerHTML = '';

    for (let i=0; i<myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add("card");

        let indexNum = myLibrary.indexOf(myLibrary[i]);        // create index number               
        
        card.dataset.index = indexNum;                         // add a data-index attribute that correspond to the index of the array      
        //console.log(card.dataset.index);
        cardContainer.appendChild(card); 

        let bookTitle = document.createElement('div');
        bookTitle.classList.add("bookTitle"); 
        let cardTitle = myLibrary[i].title;          
        bookTitle.innerHTML = cardTitle;
        card.appendChild(bookTitle); 
        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add("bookInfo");
        let cardAuthor = `By ${myLibrary[i].author}`;
        bookAuthor.innerHTML = cardAuthor;
        card.appendChild(bookAuthor); 
        let bookPages = document.createElement('div');
        bookPages.classList.add("bookInfo");
        let cardPages = `${myLibrary[i].pages} pages`;
        bookPages.innerHTML = cardPages;
        card.appendChild(bookPages); 

        let deleteBook = document.createElement('button');
        deleteBook.classList.add("deleteBook");
        deleteBook.innerHTML = "Delete";
        card.appendChild(deleteBook);
        
        deleteBook.onclick = function () {            
            card.remove(); 
            myLibrary.splice(indexNum, 1);
            console.log(myLibrary);        
        }
        
    }   
    
}





