import React from "react";
import employeeData from "./data";
import ReactDOM from 'react-dom';
import SenderComponent from './src/senderComponent';

ReactDOM.render(<SenderComponent />, document.getElementById('root'));

const app = () => {
  function displayEmployeeData(employee) {
    const message = `
        Full Name: ${employee.fullName}
        Age: ${employee.age}
        Date of Birth: ${employee.dob}
        Salary: ${employee.salary}
        Designation: ${employee.designation}
        Department: ${employee.department}
      `;

    alert(message);
  }

  const employeeListContainer = document.getElementById("employeeList");

  employeeData.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee";
    employeeDiv.innerHTML = `
        <img src="${employee.image}" alt="${employee.fullName}">
        <p class="employee-name">${employee.fullName}</p>
        <p class="employee-designation">${employee.designation}</p>
      `;

    employeeDiv.addEventListener("mouseover", () => {
      displayEmployeeData(employee);
    });

    employeeListContainer.appendChild(employeeDiv);
  });
};

export default app;