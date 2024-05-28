/*Ejercicio 1
var nombre = "Javier"
var apellido = "Del Negro"
var legajo = 1124854

alert("Bienvenido " + nombre + " " + apellido + "\nSu legajo es: " + legajo)

var materia = prompt("Que materia esta cursando?: ")
alert("Esta cursando " + materia)
*/
function calcularEdad(anio,mes,dia){
    let fechaDeNacimiento= new Date(anio,mes-1,dia)
    let hoy = new Date 
    const miliSegundosPorDia = 86400000
    let diasVividos = Math.round(((hoy - fechaDeNacimiento)/miliSegundosPorDia))
    return diasVividos
}
let año = prompt("Que año nacio?")
let mes = prompt("Que numero de mes nacio?")
let dia = prompt("Que dia del mes nacio?")


calcularEdad(2000,11,15);
alert("Viviste " + calcularEdad(año, mes, dia) + " dias");