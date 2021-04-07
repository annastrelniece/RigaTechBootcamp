//6. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
//Table + form with 3 elements: input field and 2x select fields to pick the row and column

function submitForm(event) {
    event.preventDefault();
    const rowNumber = document.getElementById('pick-row').value;
    const colNumber = document.getElementById('pick-col').value;
    const rowIndex = parseInt(rowNumber) - 1;
    const colIndex = parseInt(colNumber) - 1;

    const rowElement = document.getElementById('table-body').children[rowIndex];
    const cellElement = rowElement.children[colIndex];

    const newValue = document.getElementById('new-cell-value').value;
    cellElement.innerHTML = newValue;
}