//Task 1: Creating an Employee Class
//Scenario: You're developing a Human Resources system for a company and need to create an Employee class to  represent employees
class Employee {                 //class employee created with properties within
    constructor(name, id, department, salary) {
        this.name = name;        //name of employee
        this.id = id;           //employee id
        this.department = department; //employee department
        this.salary = salary;        //employee salary
    };     
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    };                        //returns a formatted string of employee details
   calculateAnnualSalary() {
    return this.salary * 12;  //calculating salary for year
   }
}; 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //new employee test case
console.log(emp1.getDetails()); //print employee details for emp1
console.log(emp1.calculateAnnualSalary()); //print out annual salary for emp1
