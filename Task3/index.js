/* var.6 task 3 */

class Tour {
  constructor(country, pricePerDay) {
    this.country = country;
    this.pricePerDay = pricePerDay;
  }

  calculateCost(numPeople, numDays) {
    const totalCost = numPeople * numDays * this.pricePerDay;
    return `${this.country} tour for ${numPeople} people for ${numDays} days will cost $${totalCost}.`;
  }
}

const turkeyTour = new Tour("Turkey", 50);
console.log(turkeyTour.calculateCost(2, 7));
