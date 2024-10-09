interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

export const studentsList = [
    {
        firstname:'Ahmed',
        lastname:'Ahmed',
        age:5,
        location:'January'
    },
    {
        firstname:'Ahmed',
        lastname:'Mohamed',
        age:6,
        location:'March'
    },
]

function createTable() {
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.body.appendChild(table);

    let header = table.createTHead();
    let headerRow = header.insertRow(0);

    // Add Name and Location column headers
    let nameHeader = document.createElement("th");
    nameHeader.innerHTML = "Name";
    headerRow.appendChild(nameHeader);

    let locationHeader = document.createElement("th");
    locationHeader.innerHTML = "Location";
    headerRow.appendChild(locationHeader);

    // Add tbody for table rows
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
}

export function addRow(name: string, location: string) {
    // let name = document.getElementById("name").value;
    // let location = document.getElementById("location").value;

    if (name === "" || location === "") {
        alert("Please fill out both fields");
        return;
    }

    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();

    let nameCell = newRow.insertCell(0);
    let locationCell = newRow.insertCell(1);

    nameCell.innerHTML = name;
    locationCell.innerHTML = location;

}

export function renderTable() {
    createTable();
    studentsList.forEach((student) => addRow(student.firstname, student.location));
}
renderTable();
