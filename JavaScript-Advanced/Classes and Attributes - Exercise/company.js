class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }

    if (this.departments.hasOwnProperty(department) === false) {
      this.departments[department] = {};
      this.departments[department].salary = 0;
      this.departments[department].employees = {};
      this.departments[department].employeesNumber = 0;
      this.departments[department].avgSalary = 0;
    }
    this.departments[department].employees[name] = {};
    this.departments[department].employees[name].salary = salary;
    this.departments[department].employees[name].position = position;
    this.departments[department].salary += salary;
    this.departments[department].employeesNumber += 1;
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let result = "Best Department is: ";

    let departmentsArray = Object.entries(this.departments);
    for (let department of departmentsArray) {
      department[1].avgSalary = (
        this.departments[departmentsArray[0][0]].salary /
        this.departments[departmentsArray[0][0]].employeesNumber
      ).toFixed(2);
    }

    departmentsArray.sort((a, b) => b[1].avgSalary - a[1].avgSalary);
    result += `${departmentsArray[0][0]}\n`;
    result += `Average salary: ${
      this.departments[departmentsArray[0][0]].avgSalary
    }\n`;

    let employeesArray = Object.entries(
      this.departments[departmentsArray[0][0]].employees
    );
    employeesArray.sort((a, b) => {
      if (b[1].salary != a[1].salary) {
        return b[1].salary - a[1].salary;
      } else {
        return a[0].localeCompare(b[0]);
      }
    });

    let employeesResult = [];
    for (let employee of employeesArray) {
      employeesResult.push(
        `${employee[0]} ${employee[1].salary} ${employee[1].position}`
      );
    }

    result += employeesResult.join("\n");
    return result;
  }
}

let c = new Company();
c.addEmployee("Stanimir", null, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

/*
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
*/
