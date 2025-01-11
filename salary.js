

function addEmployee(event) {
  
  // stops the form from reloading
  event.preventDefault();
  console.log('form is ready')


   // grab values from the input
  const FirstName= document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const idNumber = document.getElementById("idNumber");
  const jobTitlle = document.getElementById("jobTitle");
  const annualSalary = document.getElementById("annualSalary");
  
  console.log(FirstName.value);
  console.log(lastName.value);
  console.log(idNumber.value);
  console.log(jobTitlle.value);
  console.log( annualSalary.value);

}