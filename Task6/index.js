/* var.6 task 6 */

class MenuItem {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }

  show() {
    document.write(`<li><a href="${this.url}">${this.title}</a></li>`);
  }
}

let menuItems = [];

for (let i = 0; i < 4; i++) {
  let title = prompt(`Введіть назву пункту меню ${i + 1}:`);
  let url = prompt(`Введіть URL для пункту меню ${i + 1}:`);

  let menuItem = new MenuItem(title, url);
  menuItems.push(menuItem);
}

document.write("<ul>");
menuItems.forEach((menuItem) => menuItem.show());
document.write("</ul>");
