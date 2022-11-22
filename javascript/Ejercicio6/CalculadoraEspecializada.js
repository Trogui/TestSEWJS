"use strict";
const días = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
class CalculadoraEspecializada extends CalculadoraRPN{
  constructor() {
    super()
    this.preparaKeysEspecializada();


  }

  preparaKeysEspecializada(){

      document.addEventListener('keydown', (event) => {
          const keyName = event.key;
          switch(keyName){
              case "¡":
                  this.borrarPantalla();
                  break;
              case "d":
                  this.diasHastaFecha();
                  break;
              case "e":
                  this.diaSemana();
                  break;
              case "z":
                  this.diferenciaDias();
                  break;
              case "x":
                  this.diferenciaSemanas();
                  break;
              case "f":
                  this.esFinDeSemana();
                  break;
              case "n":
                  this.numeroSemana();
                  break;
              case "v":
                  this.borrar1Pila();
                  break;
              case "r":
                this.fechaRandom();
                break;
          }
      })

  }

  isDate(string) {
    return !isNaN(Date.parse(string));
  }

  borrarPantalla(){
    this.pantalla = "";
    this.actualizarPantalla();
}

  enter() {
    if (!this.isDate(this.pantalla)) {
      this.pantalla = "El formato es YYYY-MM-DD \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(29);
    } else {
      this.stack.push(new Date(this.pantalla));
      this.pantalla = "";
      this.actualizarPantalla();
    }
  }

  actualizarPantalla() {
    var newPantalla = "";

    for (let i = this.stack.length - 1; i >= 0; i--) {
      if (this.isDate(this.stack[i])) {
        newPantalla +=
          i + 1 + ":" + this.stack[i].toISOString().split("T")[0] + "\n";
      } else {
        newPantalla += i + 1 + ":" + this.stack[i] + "\n";
      }
    }

    document.querySelector('textarea').value = newPantalla;
    document.querySelector('input[type = "text"]').value = this.pantalla;
  }

  borrar1Pila() {
    this.stack.pop();
    this.actualizarPantalla();
  }

  guion() {
    this.pantalla += "-";
    this.actualizarPantalla();
  }

  diaSemana() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();
      if (this.isDate(posibleFecha)) {
        this.stack.push(días[posibleFecha.getDay()]);
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 1 operando \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(34);
    }
  }

  diasHastaFecha() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();

      if (this.isDate(posibleFecha)) {
        var diffTiempo = posibleFecha.getTime() - Date.now();
        var diffDías = diffTiempo / (1000 * 3600 * 24);
        this.stack.push(Math.floor(diffDías) + 1 + " Días");
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 1 operando \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(34);
    }
  }

  diferenciaDias() {
    if (this.stack.length >= 2) {
      var posibleFecha1 = this.stack.pop();
      var posibleFecha2 = this.stack.pop();

      if (this.isDate(posibleFecha1) && this.isDate(posibleFecha2)) {
        var diffTiempo = posibleFecha1.getTime() - posibleFecha2.getTime();
        var diffDías = diffTiempo / (1000 * 3600 * 24);
        this.stack.push(diffDías + " Días");
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha2);
        this.stack.push(posibleFecha1);
        this.pantalla =
          "Los operandos han de ser fechas \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 2 operandos \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(35);
    }
  }

  diferenciaSemanas() {
    if (this.stack.length >= 2) {
      var posibleFecha1 = this.stack.pop();
      var posibleFecha2 = this.stack.pop();

      if (this.isDate(posibleFecha1) && this.isDate(posibleFecha2)) {
        var diffTiempo = posibleFecha1.getTime() - posibleFecha2.getTime();
        var diffDías = diffTiempo / (1000 * 3600 * 24);
        var diffSemanas = diffDías / 7;
        this.stack.push(Math.round(diffSemanas * 10) / 10 + " Semanas");
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha2);
        this.stack.push(posibleFecha1);
        this.pantalla =
          "Los operandos han de ser fechas \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 2 operandos \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(35);
    }
  }

  esFinDeSemana() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();
      if (this.isDate(posibleFecha)) {
        if (this.esFinde(posibleFecha)) {
          this.stack.push("Es fin de semana");
        } else {
          this.stack.push("No es fin de semana");
        }
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 1 operando \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(34);
    }
  }

  esFinde(fecha) {
    return (fecha.getDay() == 0 || fecha.getDay() == 6);
  }

  esDiaLaborable() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();
      if (this.isDate(posibleFecha)) {
        if (this.esFinde(posibleFecha)) {
          this.stack.push("No es día laborable");
        } else {
          this.stack.push("Es día laborable");
        }
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 1 operando \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(34);
    }
  }

  fechaRandom() {
    var year = Math.floor(Math.random() * 1300) + 1000;
    var month = Math.floor(Math.random() * 12) + 1;
    if (month == 2) {
      var day = Math.floor(Math.random() * 28) + 1;
    } else {
      var day = Math.floor(Math.random() * 30) + 1;
    }

    this.stack.push(new Date(year + "-" + month + "-" + day));
    this.actualizarPantalla();
  }

  numeroSemana() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();
      if (this.isDate(posibleFecha)) {
        var Year1st = new Date(posibleFecha.getFullYear(), 0, 0);
        var diferencia = posibleFecha - Year1st;
        var tiempo1Dia = 1000 * 60 * 60 * 24;
        var dia = Math.floor(diferencia / tiempo1Dia);

        if (dia % 7 == 0) {
          var semana = dia / 7;
        } else {
          var semana = Math.floor(dia / 7) + 1;
        }

        this.stack.push("Semana Nº " + semana);
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    }
  }

  esAñoBisiesto() {
    if (this.stack.length >= 1) {
      var posibleFecha = this.stack.pop();
      if (this.isDate(posibleFecha)) {
        var year = posibleFecha.getFullYear();

        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          this.stack.push("Es año bisiesto");
        } else {
          this.stack.push("No es año bisiesto");
        }
        this.actualizarPantalla();
      } else {
        this.stack.push(posibleFecha);
        this.pantalla =
          "El operando ha de ser una fecha \t\t\t\t" + this.pantalla;
        this.actualizarPantalla();
        this.pantalla = this.pantalla.slice(36);
      }
    } else {
      this.pantalla = "Ha de haber minimo 1 operando \t\t\t\t" + this.pantalla;
      this.actualizarPantalla();
      this.pantalla = this.pantalla.slice(34);
    }
  }
}

var calc = new CalculadoraEspecializada();
calc.actualizarPantalla();
