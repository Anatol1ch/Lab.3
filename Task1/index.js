/* var.6 task 1 */

function Employee(name, department, phone, salary) {
  this.name = name;
  this.department = department;
  this.phone = phone;
  this.salary = salary;
}
let employee1 = new Employee("John Smith", "Sales", "555-1234", 50000);
console.log(employee1);
