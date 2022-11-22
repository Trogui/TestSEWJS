class CalculadoraRPN{

    constructor(){

        this.pantalla = "";
        this.stack = [];

        this.preparaKeys();


    }

    preparaKeys(){

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            switch(keyName){
                case "Backspace":
                    this.borrar1();
                    break;
                case "Delete":
                    this.borrarTodo();
                    break;
                case "Enter":
                    this.enter();
                    break;
                case "*":
                    this.multiplicacion();
                    break;
                case "+":
                    this.suma();
                    break;
                case "-":
                    this.resta();
                    break;
                case "/":
                    this.division();
                    break;
                case ".":
                    this.punto();
                    break;
                case "s":
                    this.seno();
                    break;
                case "a":
                    this.arcoSeno();
                    break;
                case "c":
                    this.coseno();
                    break;
                case "b":
                    this.arcoCoseno();
                    break;
                case "t":
                    this.tangente();
                    break;
                case "g":
                    this.arcoTangente();
                    break;
                case "9":
                    this.digito(9);
                    break;
                case "8":
                    this.digito(8);
                    break;
                case "7":
                    this.digito(7);
                    break;
                case "6":
                    this.digito(6);
                    break;
                case "5":
                    this.digito(5);
                    break;
                case "4":
                    this.digito(4);
                    break;
                case "3":
                    this.digito(3);
                    break;
                case "2":
                    this.digito(2);
                    break;
                case "1":
                    this.digito(1);
                    break;
                case "0":
                    this.digito(0);
                    break;
                case ",":
                    this.masmenos();
                    break;
                default:
                    break;
            }
        })

    }

    enter(){
        this.stack.push(Number(this.pantalla));

        this.pantalla = "";

        this.actualizarPantalla();
    }

    actualizarPantalla(){

        var newPantalla = "";

        for(let i = this.stack.length - 1; i >= 0; i--){
            newPantalla += i+1 + ":" + this.stack[i] + "\n";
        }

        document.querySelector('textarea').value = newPantalla;
        document.querySelector('input[type = "text"]').value = this.pantalla;

    }

    digito(n){
        this.pantalla += n + "";
        this.actualizarPantalla();
    }

    borrar1(){
        this.pantalla = this.pantalla.slice(0, -1);
        this.actualizarPantalla();
    }

    borrarTodo(){
        this.pantalla = "";
        this.stack = [];
        this.actualizarPantalla();
    }

    resta(){
        if(this.stack.length >= 2){

            var number1 = this.stack.pop();
            var number2 = this.stack.pop();

            var newNumber = number1 - number2;

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    suma(){
        if(this.stack.length >= 2){

            var number1 = this.stack.pop();
            var number2 = this.stack.pop();

            var newNumber = number1 + number2;

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
        
    }

    multiplicacion(){
        if(this.stack.length >= 2){

            var number1 = this.stack.pop();
            var number2 = this.stack.pop();

            var newNumber = number1 * number2;

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    division(){
        if(this.stack.length >= 2){

            var number1 = this.stack.pop();
            var number2 = this.stack.pop();

            var newNumber = number1 / number2;

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    punto(){
        this.pantalla += ".";
        this.actualizarPantalla();
    }

    masmenos(){
        if(this.pantalla.charAt(0) == "-"){
            this.pantalla = this.pantalla.split(' ').join('').slice(1);
            this.actualizarPantalla();
        }
        else {
            this.pantalla = "-" + this.pantalla;
            this.actualizarPantalla();
        }
    }

    seno(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.sin(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    coseno(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.cos(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    tangente(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.tan(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    arcoSeno(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.asin(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    arcoCoseno(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.acos(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }
    arcoTangente(){
        if(this.stack.length >= 1){

            var number1 = this.stack.pop();

            var newNumber = Math.atan(number1);

            this.stack.push(newNumber);
            this.actualizarPantalla();
        }
    }

}
