class ThermalSensorB {
    constructor(position) {
        this.position = position;
    } // position {
    scanHeatSignature() {
        return {
            sensor: this.constructor.name,      // nom du capteur
            detection: "thermal",               // type de détection
            date: new Date().toISOString(),     // date actuelle
        };
    } // Déclenche une donnée complexe json, voir ci dessous
}

console.log(new ThermalSensorB("Entrée").scanHeatSignature());