class CalculadoraCientifica extends Calculadora{

    constructor(){
        super();

        this.preparaKeysCientifica();
    }

    preparaKeysCientifica(){
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            switch(keyName){
                case "x":
                    this.cuadrado();
                    break;
                case "<":
                    this.elevadoA();
                    break;
                case "s":
                    this.seno();
                    break;
                case "c":
                    this.coseno();
                    break;
                case "t":
                    this.tangente();
                    break;
                case "l":
                    this.logaritmo();
                    break;
                case "d":
                    this.elevado10A();
                    break;
                case "n":
                    this.exponenteNatural();
                    break;
                case "b":
                    this.modulo();
                    break;
                case "Shift":
                    this.shift();
                    break;
                case "ç":
                    this.pi();
                    break;
                case "f":
                    this.factorial();
                    break;
                case "(":
                    this.parentesisIzquierdo();
                    break;
                case ")":
                    this.parentesisDerecho();
                    break;
                
                }
            })
    
        }

    cuadrado(){
        if(!this.flagA){
            this.a = Number(eval(this.a + this.b)) * Number(eval(this.a + this.b))  + "";
        }else{
            this.a = Number(eval(this.a)) * Number(eval(this.a))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    elevadoA(){
        this.pantalla += "^";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "**";
        this.flagA = false;
        this.actualizarPantalla();
    }

    seno(){
        if(!this.flagA){
            this.a = Math.sin(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = Math.sin(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    coseno(){
        if(!this.flagA){
            this.a = Math.cos(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = Math.cos(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    tangente(){
        if(!this.flagA){
            this.a = Math.tan(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = Math.tan(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    elevado10A(){
        if(!this.flagA){
            this.a = 10 ** Number(eval(this.a + this.b))  + "";
        }else{
            this.a = 10 ** Number(eval(this.a))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    logaritmo(){
        if(!this.flagA){
            this.a = Math.log10(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = Math.log10(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    exponenteNatural(){
        if(!this.flagA){
            this.a = Math.exp(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = Math.exp(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    modulo(){
        this.pantalla += "Mod";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "%";
        this.flagA = false;
        this.actualizarPantalla();
    }

    shift(){

    }

    borrarPantalla(){
        this.a = "";
        this.pantalla = this.a;
        this.actualizarPantalla();
        this.flagA = true;
    }

    pi(){
        this.a = Math.PI;
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    factorial(){
        if(!this.flagA){
            this.a = this.factorialCalculo(Number(eval(this.a + this.b)))  + "";
        }else{
            this.a = this.factorialCalculo(Number(eval(this.a)))  + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }

    factorialCalculo(n){
        var total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }

    parentesisIzquierdo(){
        this.pantalla += "(";
        if(this.flagA){
            this.a += "(";
        }
        else{
            this.b += "(";
        }
        this.actualizarPantalla();
    }
    parentesisDerecho(){
        this.pantalla += ")";
        if(this.flagA){
            this.a += ")";
        }
        else{
            this.b += ")";
        }
        this.actualizarPantalla();
    }

    resetearMemoria(){
        this.memoria = 0;
    }
    guardaMemoria(){
        if(!this.flagA){
            this.memoria = Number(eval((this.a + this.b)));
        }else{
            this.memoria = Number(eval(this.a));
        }
    }





}

var calcu = new CalculadoraCientifica();