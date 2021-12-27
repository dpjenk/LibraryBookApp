// SELECT ELEMENTS

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector(".btn");
const list = document.querySelector("#book-list");

// ADD EVENT LISTENER

submit.addEventListener('click', function(e) {
    e.preventDefault();  // Prevents actual submit

    if(title.value === '' || author.value === '' || pages.value === '') {
        showAlert('Please complete all fields', 'danger');
    } else {
        const newRow = document.createElement('tr');
        list.appendChild(newRow);

        const newTitleColumn = document.createElement('td');
        newRow.appendChild(newTitleColumn);
        newTitleColumn.innerText = title.value;

        const newAuthorColumn = document.createElement('td');
        newRow.appendChild(newAuthorColumn);
        newAuthorColumn.innerText = author.value;

        const newPagesColumn = document.createElement('td');
        newRow.appendChild(newPagesColumn);
        newPagesColumn.innerText = pages.value;

        const newReadColumn = document.createElement('td');
        newRow.appendChild(newReadColumn);
        if (checkbox.checked === true) {
            newReadColumn.innerText = "Yes";
        } else {
            newReadColumn.innerText = "No"
        }   
        
        const newTrashColumn = document.createElement('td');
        newRow.appendChild(newTrashColumn);
        newTrashColumn.insertAdjacentHTML('beforeend', '<i class="far fa-trash-alt trash"></i>');  
        
        showAlert('Book Added', 'success');
        
    }
    
    // DELETE BOOK INFO FROM BOOK LIST
    document.querySelector('#book-list').addEventListener('click', function(e) {
        e.stopImmediatePropagation(); // ADDED TO STOP MESSAGE FROM BEING DISPLAYED TWICE. FOUND THIS ON INTERNET SEARCH TO SOLVE DUPLICATE PROBLEM. THIS METHOD PREVENTS OTHER LISTENERS OF THE SAME EVENT FROM BEING CALLED.
        deleteBook(e.target); 
        showAlert('Book Deleted', 'success');
    
    function deleteBook(e) {   //EL IS THE ELEMENT WHICH IS THE ENTIRE TABLE ROW
        if(e.classList.contains('trash')) {
            e.parentElement.parentElement.remove(); //NEED PARENT ELEMENT TWICE TO DELETE ENTIRE ROW          
            } 
        }   
         
}); 
// ALERT MESSAGE DISPLAYED ON FORM RATHER THAN POP-UP ALERT MESSAGE
    function showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

         // REMOVES ALERT MESSAGE IN 2 SECONDS
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }


    
    // CLEAR ALL INPUT FIELDS AFTER SUBMISSION
 title.value = '';
 author.value = '';
 pages.value = '';
 checkbox.checked = false;

});





