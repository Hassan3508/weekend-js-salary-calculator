// array to store employee data
const employees = [];

let totalMonthlyCost = 0;

function addEmployee(event) {
    event.preventDefault(); 

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const annualSalary = parseFloat(document.getElementById('annualSalary').value); 

   // Check if any of the fields are empty
   if (!firstName || !lastName || !idNumber || !jobTitle || !annualSalary) {
    return;
}  
 // employee object
    const newEmployee = {
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary
    };


    employees.push(newEmployee);
    totalMonthlyCost += annualSalary / 12;
    displayEmployees();
    const employeeForm = document.getElementById('employeeForm');
    employeeForm.reset();

    
    
   
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
           <td><button onclick="removeEmployee(event)">Delete</button></td>
           </tr>`;      
    }
    
}

function removeEmployee(event){
  console.log("row removed");
  event.target.closest("tr").remove();

}

/*
function updateTotalMonthlyCost() {
    const totalCostElement = document.getElementById('totalMonthlyCost');
    totalCostElement.textContent = `Total Monthly Cost: $${totalMonthlyCost.toFixed(2)}`;
  
    if (totalMonthlyCost > 20000) {
      totalCostElement.classList.add('red-background');
    } else {
      totalCostElement.classList.remove('red-background');
    }
  }
 
 */
 
 
 

