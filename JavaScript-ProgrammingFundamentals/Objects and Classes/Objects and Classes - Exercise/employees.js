function employees(input) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    let employeeList = [];

    for (let employee of input) {
        let name = employee;
        let personalNumber = employee.length;
        let newEmployee = new Employee(name, personalNumber);
        employeeList.push(newEmployee);
    }

    for (let employee of employeeList) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
/*
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18
*/

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);
/*
Name: Samuel Jackson -- Personal Number: 14
Name: Will Smith -- Personal Number: 10
Name: Bruce Willis -- Personal Number: 12
Name: Tom Holland -- Personal Number: 11
*/