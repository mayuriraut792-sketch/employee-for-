document.getElementById("employeeForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let id = document.getElementById("empId").value;
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let salary = document.getElementById("salary").value;

    let table = document.getElementById("employeeTable");
    let row = table.insertRow();

    row.insertCell(0).textContent = id;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = role;
    row.insertCell(3).textContent = salary;
});