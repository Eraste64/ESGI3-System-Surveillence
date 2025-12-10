class MotionSensorA {
    constructor(location) {
        this.location = location;
    }
    detect() {
        return `Détection par ${this.constructor.name} dans ${this.location}`;
    } // Déclenche un message d’alerte (string)
}