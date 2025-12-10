class TemperatureSensorB {
    constructor(location, threshold) {
        this.location = location;
        this.threshold = threshold;
    } // location = nom de la pièce, threshold = température
    detect() {
        return `Détection par ${this.constructor.name} dans ${this.location}, température : ${this.threshold}°C`;
    } // Déclenche un message d’alerte (string)
}