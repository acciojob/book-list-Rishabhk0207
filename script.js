//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#submit');
    let tbody = document.querySelector('#book-list');
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let isbn = document.querySelector('#isbn');

    // Function to create a new table row with title, author, and ISBN values
    function createElement(titleValue, authorValue, isbnValue) {
        let row = document.createElement('tr');

        let col = document.createElement('td');
        col.innerHTML = titleValue;
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = authorValue;
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = isbnValue;
        row.appendChild(col);

        let buttonCol = document.createElement('td');
        let button = document.createElement('button');
        button.innerHTML = 'X';
        button.addEventListener('click', function() {
            row.remove(); // Remove the row when the button is clicked
        });
        buttonCol.appendChild(button);
        row.appendChild(buttonCol);

        tbody.appendChild(row); // Append the row to the tbody
    }

    btn.addEventListener("click", (e) => {

        let titleValue = title.value.trim();
        let authorValue = author.value.trim();
        let isbnValue = isbn.value.trim();

        if (titleValue && authorValue && isbnValue) {
            createElement(titleValue, authorValue, isbnValue);

            // Clear the input fields after adding the row
            title.value = '';
            author.value = '';
            isbn.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
