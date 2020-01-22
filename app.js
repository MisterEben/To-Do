
// ----*****(DELETING CONTENT)******----------

const del = document.querySelector('#theBooks ul')

del.addEventListener('click', function(e){

    if(e.target.className == 'btn'){
        const li = e.target.parentElement;
        
        del.removeChild(li);
    } 
})

// ________________________________________________________________
// ***********ADDING BOOKS**************

const addForm = document.forms['add-book']



addForm.addEventListener('submit', function(e){
    
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    // creating Element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span'); 

    // Adding the text
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    // Adding ClassNames
    bookName.classList.add('title');
    deleteBtn.classList.add('btn');


    // hiding Books
    const hideBook = document.querySelector('#hide');

    hideBook.addEventListener('change', function(e){
        
        if(hideBook.checked){
            del.display = "none";
        } else{
            del.style.display = "initial";
        }
    })


    document.addEventListener("DOMContentLoaded", function (event) {
        var _selector = document.querySelector('input[name=myCheckbox]');
        _selector.addEventListener('change', function (event) {
            if (_selector.checked) {
                // do something if checked
            } else {
                // do something else otherwise
            }
        });
    });




    function Init () {
        var checkbox = document.getElementById ("add-book hide");
        if (checkbox.addEventListener) {
            checkbox.addEventListener ("CheckboxStateChange", OnChangeCheckbox, false);
        }
    }

    function OnChangeCheckbox (event) {
        var checkbox = event.target;
        if (checkbox.checked) {
            alert ("The check box is checked.");
        }
        else {
            alert ("The check box is not checked.");
        }
    }
// __________________________________________


    // appending to Document
    li.appendChild(bookName);
    li.appendChild(deleteBtn); 
    del.appendChild(li);
});

 
// Searching Pane
 const searchBar = document.forms['header'].querySelector('input');

 searchBar.addEventListener('keyup', function(e){
     const term = e.target.value.toLowerCase();
     const books = del.getElementsByTagName('li');

     Array.from(books).forEach(function(book){
         const title = book.firstElementChild.textContent;
         if(title.toLowerCase().indexOf(term) != -1){
             book.style.display = 'block';
         } else{
            book.style.display = 'none';
         }
     })
 })


 let canvas = document.getElementById("canva");
let canvx = canvas.style.background = 'pink';