class TemperatureSensorA {
    constructor(location) {
        this.location = location;
    } // location = nom de la pièce
    detect() {
        return `Détection par ${this.constructor.name} dans ${this.location}`;
    } // Déclenche un message d’alerte (string)
}