require("file-loader?name=[name].[ext]!./index.html");

import React from "react";

import ReactDOM from "react-dom";

import App from "./app";

 

ReactDOM.render(<App />, document.getElementById("app"));


import employeeData from './data';

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

const employeeListContainer = document.getElementById('employeeList');

employeeData.forEach(employee => {
  const employeeDiv = document.createElement('div');
  employeeDiv.className = 'employee';
  employeeDiv.innerHTML = `
    <img src="${employee.image}" alt="${employee.fullName}">
    <p class="employee-name">${employee.fullName}</p>
    <p class="employee-designation">${employee.designation}</p>
  `;

  employeeDiv.addEventListener('mouseover', () => {
    displayEmployeeData(employee);
  });

  employeeListContainer.appendChild(employeeDiv);
});
