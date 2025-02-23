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

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
//Scenario: Managers have additional responsibilities compared to regular employees.
//Create a Manager class that extends Employee.
// the manager class should inherit from employee:
class Manager extends Employee {           
    constructor(name, id, department, salary, teamSize){       // new property teamSize included
    super(name, id, department, salary);       //call employee constructor
    this.teamSize = teamSize;                 //manager's team size    
    };                                        //manager constructor completed
getDetails(){
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
}    //manager details
calculateBonus() {
    return this.salary * 12 * 0.10;   //bonus formula, returns 10% of manager's annual salary
}
calculateAnnualSalary() {
    return this.salary * 12 + this.calculateBonus();
}
};
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //new manager test case
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); 
