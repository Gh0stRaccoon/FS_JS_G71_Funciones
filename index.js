const ele1 = document.querySelector("#tarea1");
const ele2 = document.querySelector("#tarea2");
const ele3 = document.querySelector("#tarea3");

const getPriority = (element) => {
  // seleccionamos el elemento con la clase priority que está dentro de nuestro
  // elemento recibido por parámetros "element"
  const priorityElement = element.querySelector(".priority");

  // extraemos el contenido EN TEXTO de nuestrp elemento priority
  const priorityValue = priorityElement.textContent;
  // Si priorityValue es mayor a 7
  if (priorityValue > 7) {
    priorityElement.textContent = "Alta importancia";
  } else if (priorityValue === 7) {
    // Si priorityValue es igual a 7
    priorityElement.textContent = "Importancia Exacta";
  } else {
    // en cualquier otro caso (menor a 7 en este caso)
    priorityElement.textContent = "Baja importancia";
  }
};

// reutilizamos la función
getPriority(ele1);
getPriority(ele2);
getPriority(ele3);

/* ARROW FUNCTIONS */
// función flecha con return explícito (usando la palbra reservada "return")
const retorna = () => {
  return 1 + 2;
};

// función flecha con return implícito, generalmente utilizada para cálculos sencillos
const retorna2 = () => 1 + 2;

// ambas funciones dan el mismo resultado y lo podríamos guardar en una variable gracias al return
console.log(retorna());
console.log(retorna2());

/* Limpieza de formulario */
const form = document.querySelector("form");

function submit(event) {
  event.preventDefault(); // evitamos el comportamiento por defecto (refrescar la página) de nuestro formulario
  event.target.reset(); // limpiamos el formulario
}

form.addEventListener("submit", submit); // le agregamos un escuchador cuando se haga submit sobre el formulario

// ejemplo creación de un elemento en JS
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    const divElement = document.createElement("div");
    //hacemos los cambios necesarios a nuestro elemento html
    divElement.style.width = "200px";
    divElement.style.height = "200px";
    divElement.style.border = "2px solid black";
    // le asignamos un escuchador cuando se haga un click
    divElement.addEventListener("click", () => {
      console.log("cambiocolor");
    });

    // lo agregamos a nuestro HTML dentro del elemento body (como hijo de body)
    document.body.appendChild(divElement);
  }
});
