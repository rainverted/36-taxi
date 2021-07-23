class Taxi {
    constructor(driver) {
        this.driver = driver;
        this.kmDriven = 0;

        this.price = 1;
        this.profit = 0;
    }

    intro() {

        console.log(`Sveiki, as ${this.driver} ir kilometro kaina su manimi yra ${this.price.toFixed(2)} Eur.`);
    }

    updatePrice(updatedPrice) {
        this.price = updatedPrice;
        console.log(`${this.driver} nustate nauja kilometro kaina - ${this.price.toFixed(2)} Eur.`);
    }

    ride(kmDriven) {
        this.kmDriven += kmDriven;
        this.profit += this.price * kmDriven;

    }

    stats() {
        console.log(`${this.driver} nuvaziavo ${this.kmDriven} km ir uzdirbo ${this.profit.toFixed(2)} Eur.`);
    }
}

module.exports = Taxi;