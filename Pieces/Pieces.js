class Pieces {

    constructor() {
        if (!Pieces.instance) {
            Pieces.instance = [this];
        } else if (Pieces.instance.length < 10) {
            Pieces.instance.push(this);
        }
        return Pieces.instance;
    }
}