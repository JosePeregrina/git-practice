class Coin{
    constructor(numero = 0){
        //Se crea
                        // 0
        this._opciones = ["Sello","Aguila"]
        this._valor;

        if(numero === 0)this._valor = this._opciones[numero];
        else if(numero === 1) this._valor = this._opciones[numero];
    }

    getValor = () => {
        return this._valor;
    }

    _flip = () => {
            return Math.floor(Math.random() * 10)
    }

}

const moneda1 = new Coin(1);

console.log(moneda1.getValor())

function flip(){
    alert(moneda1.getValor)
}
