/* var.6 task 4 */

String.prototype.printMe = function () {
  var level = this.uroven;
  if (level > 6 || level < 1) {
    level = 1;
  }
  document.write("<h" + level + ">Ура!</h" + level + ">");
};

function printZagolovok() {
  var s = new String(prompt("Введіть рівень заголовка (1-6):"));
  s.printMe();
}

printZagolovok();
