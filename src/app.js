
window.onload = function() {
  //write your code here
  let quien = ["El perro", "La abuela", "El cartero", "El pajarito"];
  let accion = ["comio", "piso", "cago", "rompio"];
  let que = ["mis deberes", "mi telefono", "el coche"];
  let cuando = [
    "antes de clase",
    "cuando me hiba a dormir",
    "cuando hacia deporte",
    "durante la comida",
    "cuando estaba jugando"
  ];
  //variables aleatorias
  let random1 = Math.floor(Math.random() * quien.length);
  let random2 = Math.floor(Math.random() * accion.length);
  let random3 = Math.floor(Math.random() * que.length);
  let random4 = Math.floor(Math.random() * cuando.length);
  //La respuesta
  document.getElementById("respuesta").innerHTML =
    quien[random1] +
    " " +
    accion[random2] +
    " " +
    que[random3] +
    " " +
    cuando[random4];


};
