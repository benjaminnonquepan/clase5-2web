/* Helper: detecta el día de hoy y resalta su columna en la tabla de horario.
   No hay que editarlo al agregar materias: solo se edita el HTML. */

document.addEventListener("DOMContentLoaded", function () {
  var aliases = {
    sunday: ["sunday", "domingo"],
    monday: ["monday", "lunes"],
    tuesday: ["tuesday", "martes"],
    wednesday: ["wednesday", "miercoles"],
    thursday: ["thursday", "jueves"],
    friday: ["friday", "viernes"],
    saturday: ["saturday", "sabado"]
  };

  var englishDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()];
  var spanishDay = aliases[englishDay][1];
  var activeNames = aliases[englishDay];

  document.querySelectorAll("[data-today-list]").forEach(function (el) {
    var current = el.getAttribute("data-today-list");
    el.hidden = !activeNames.includes(current);
  });

  var label = document.querySelector("[data-today-label]");
  if (label) {
    label.textContent = spanishDay.charAt(0).toUpperCase() + spanishDay.slice(1);
  }

  document.querySelectorAll("[data-day]").forEach(function (el) {
    var current = el.getAttribute("data-day");
    if (activeNames.includes(current)) {
      el.classList.add("is-today");
    }
  });
});
