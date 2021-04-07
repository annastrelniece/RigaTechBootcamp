//5. Write a JavaScript function to add rows to a table.
function insertRow() {
    const tableElement = document.getElementById('sampleTable');
    const tableBodyElement = tableElement.children[0];
    const rowCount = tableBodyElement.children.length;
    console.log(rowCount);
    const nextRowNumber = rowCount + 1;

    const newRow = `
        <tr>
            <td>Row${nextRowNumber} cell1</td>
            <td>Row${nextRowNumber} cell2</td>
        </tr>
    `;
    tableBodyElement.innerHTML += newRow;
}