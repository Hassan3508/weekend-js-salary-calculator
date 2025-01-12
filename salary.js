// array to store employee data
const employees = [];


function addEmployee(event) {
    event.preventDefault(); 

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = Number(document.getElementById('annualSalary').value); // converted to number


   // create a new employee object using shorthand method
   const newEmployee = {
    firstName,
    lastName,
    idNumber,
    jobTitle,
    annualSalary
};

// push the new employee object into the array
 employees.push(newEmployee);
   
}
  function displayEmployees() {
    const tableBody = document.getElementById('tBody'); 
    tableBody.innerHTML = ''; // Clear existing table rows

    for(let i = 0; i < employees.length; i++) {
        const employee = employees[i];
       tableBody.innerHTML += `<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
        
           </tr>`;      
    }
}

 