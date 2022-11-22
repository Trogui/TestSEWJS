"use strict";
class Calculadora{

    constructor(){

        this.pantalla = ""
        this.memoria = "0";
        this.a = "";
        this.b = "";

        this.flagA = true;

        this.preparaKeys();


    }

    preparaKeys(){

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            switch(keyName){
                case "Backspace":
                    this.borrarUno();
                    break;
                case "Delete":
                    this.borrar();
                    break;
                case "Enter":
                    this.igual();
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
                case "m":
                    this.sumarMemoria();
                    break;
                case "r":
                    this.restarMemoria();
                    break;
                case "e":
                    this.enseñarMemoria();
                    break;
                case "%":
                    this.porcentaje();
                    break;
                case "v":
                    this.raiz();
                    break;
                case ",":
                    this.masmenos();
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
                default:
                    break;
            }
        })

    }

    actualizarPantalla(){
        document.querySelector('input[type = "text"]').value = this.pantalla;
    }
    enseñarMemoria(){
        this.pantalla = this.memoria + "";
        this.a = this.pantalla;
        this.flagA = true;
        this.actualizarPantalla();
    }
    sumarMemoria(){
        if(!this.flagA){
            this.memoria = Number(eval(this.memoria + "+" + (this.a + this.b)));
        }else{
            this.memoria = Number(eval(this.memoria + "+" + this.a));
        }
        
    }
    restarMemoria(){
        if(!this.flagA){
            this.memoria = Number(eval(this.memoria + "+" + (Number(eval(this.a + this.b)) * -1)));
        }else{
            this.memoria = Number(eval(this.memoria + "+" + (Number(eval(this.a)) * -1)));
        }
        
    }

    suma(){
        this.pantalla += "+";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "+";
        this.flagA = false;
        this.actualizarPantalla();  
    }
    resta(){
        this.pantalla += "-";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "-";
        this.flagA = false;
        this.actualizarPantalla();
    }
    multiplicacion(){
        this.pantalla += "*";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "*";
        this.flagA = false;
        this.actualizarPantalla();
    }
    division(){
        this.pantalla += "/";
        if(!this.flagA){
            this.a = this.a + this.b;
        }
        this.b = "/";
        this.flagA = false;
        this.actualizarPantalla();
    }
    digito(n){
        this.pantalla += n + "";
        if(this.flagA){
            this.a = this.a + Number(n);
        }
        else{
            this.b = this.b + Number(n);
        }
        this.actualizarPantalla();
    }
    igual(){
        if(this.a + this.b != ""){
            this.a = Number(eval(this.a + this.b)) + "";
            this.pantalla = this.a;
            this.flagA = true;
            this.actualizarPantalla();
        }
        
    }
    borrar(){
        this.pantalla = "";
        this.memoria = 0;
        this.a = "";
        this.b = "";
        this.actualizarPantalla();
    }
    borrarUno(){
        this.pantalla = this.pantalla.split(' ').join('').slice(0,-1);
        if(this.flagA){
            this.a = this.a.split(' ').join('').slice(0,-1);
        }
        else {
            this.b = this.b.split(' ').join('').slice(0,-1);
        }
        this.actualizarPantalla();
    }
    punto(){
        this.pantalla += "."
        if(this.flagA){
            this.a = this.a + ".";
        }
        else {
            this.b = this.b + ".";
        }
        this.actualizarPantalla();
    }
    masmenos(){
        if(this.pantalla.charAt(0) == "-"){
            this.pantalla = this.pantalla.split(' ').join('').slice(1);
            if(this.flagA){
                this.a = this.a.split(' ').join('').slice(1);
            }
            else {
                this.b = this.b.split(' ').join('').slice(1);
            }
        }
        else {
            this.pantalla = "-" + this.pantalla;
            if(this.flagA){
                this.a = "-" + this.a;
            }
            else {
                this.b = "-" + this.b;
            }
        }

        this.actualizarPantalla();
    }
    raiz(){
        if(!this.flagA){
            this.a = Math.sqrt(Number(eval(this.a + this.b))) + "";
        }else{
            this.a = Math.sqrt(Number(eval(this.a))) + "";
        }
        this.flagA = true;
        this.pantalla = this.a
        this.actualizarPantalla();
    }
    porcentaje(){
        this.pantalla += "%";

        if(this.flagA){
            this.a = this.a + "* 0.01"
        }
        else{
            this.b = this.b + "* 0.01"
        }
        this.actualizarPantalla();


    }
}

var calc = new Calculadora();
calc.actualizarPantalla();