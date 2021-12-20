// SELECT ELEMENTS

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector(".btn");
const list = document.querySelector("#book-list");
const trash = document.querySelector(".trash"); 

// ADD EVENT LISTENER

submit.addEventListener('click', function(e) {
    e.preventDefault();  // Prevents actual submit

    if(title.value === '' || author.value === '' || pages.value === '') {
        alert("Please complete all fields");
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
    }

    // CLEAR ALL INPUT FIELDS AFTER SUBMISSION
 title.value = '';
 author.value = '';
 pages.value = '';
 checkbox.checked = false;

   
});
 
// DELETE BOOK INFO FROM BOOK LIST

document.querySelector('#book-list').addEventListener('click', function(e) {
    deleteBook(e.target)
});
        
function deleteBook(e) {
    if(e.classList.contains('trash')) {
        e.parentElement.parentElement.remove();
    }
}

