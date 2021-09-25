var prompt = require("prompt-sync")()

//@author Pedro Jardel Lima

/* Método que mostra todos os números divisores de um número informado pelo usuário
utilizando DO WHILE */

console.log("Digite um número, para sair digite '0' ")

var num = Number(prompt("Número: "))
var divisor = 0
var resp = " "

do {
    if (num == 0) {
        break
    }
    divisor ++
    if (num % divisor == 0) {
        resp = resp + divisor + " "
    }
} while (divisor <= num)

console.log(`Divisores do ${num}: ${resp}`)