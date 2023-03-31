/*
Your program needs to expose a module, containing the three classes Employee, Junior, Senior, and Manager. 
The property's name and age are set through the constructor, while the salary and a manager’s dividend are initially set 
to zero and can be changed later. The list of tasks is filled by each position. The resulting objects also expose 
the functions work() and collectSalary(). When work() is called, one of the following lines is printed on the console, 
depending on the current task in the list:
"{employee name} is working on a simple task."
"{employee name} is working on a complicated task."
"{employee name} is taking time off work."
"{employee name} is supervising junior workers."
"{employee name} scheduled a meeting."
"{employee name} is preparing a quarterly report."
And when collectSalary() is called, print the following:
"{employee name} received {salary + bonuses} this month."
Input / Output
Any input will be passed as valid arguments, where applicable. Print any output that is required to the console as a string.
Submit your code as a revealing module, containing the four classes. Any definitions need to be named exactly as described above.
*/

function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.dividend = 0;
      this.tasks = [];
    }

    work() {
      const responsability = this.tasks.shift();
      console.log(`${this.name} ${responsability}`);
      this.tasks.push(responsability);
    }

    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`
      );
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ["is working on a simple task."];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        "is working on a complicated task.",
        "is taking time off work.",
        "is supervising junior workers.",
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
    }
  }

  return { Employee, Junior, Senior, Manager };
}

const classes = solution();
const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();

/*
Ivan is working on a simple task. 
Ivan is working on a simple task. 
 
 Ivan received 5811 this month. 
 
 Alex is working on a complicated task. 
 Alex is taking time off work. 
 Alex is supervising junior workers. 
 Alex is working on a complicated task. 
 
 
 Alex received 12050 this month. 
 
 
 Tom received 15000 this month. 
 
 Tom received 17500 this month. 
*/
