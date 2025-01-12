
// array to store employee data
const employees = [];


function addEmployee(event) {
     // stops the form from reloading
    event.preventDefault(); 

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = Number(document.getElementById('annualSalary').value); // converted to number

   
 // employee object
    const newEmployee = {
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary
    };

    employees.push(newEmployee);
    displayEmployees();  
    removeEmployee();
   
}

function displayEmployees() {
    const tableBody = document.getElementById('tBody');
    tableBody.innerHTML = '';

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button>Delete</button></td>
        `;


             
    }
}

function removeEmployee(event){
  console.log("row removed");
  event.target.closest("tr").remove();

}

