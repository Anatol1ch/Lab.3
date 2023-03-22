/* var.6 task 5 */

class Employee {
  constructor(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Відділ: ${this.department}`);
    console.log(`Телефон: ${this.phone}`);
    console.log(`Зарплата: ${this.salary}`);
  }
}

// Створення об'єкту-колекції Співробітник
const employee = new Employee(
  "Іван Іванович",
  "Розробка",
  "+380991234567",
  15000
);

// Виклик методу для відображення даних про співробітника
employee.displayInfo();
