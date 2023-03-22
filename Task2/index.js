/* var.6 task 2 */

function Employee(name, department, phone, salary) {
  this.name = name;
  this.department = department;
  this.phone = phone;
  this.salary = salary;
}

let employee1 = new Employee("Іван", "Відділ розвитку", "050-123-45-67", 20000);
console.log(employee1);

employee1.address = "вул. Шевченка, 10";
console.log(employee1);
