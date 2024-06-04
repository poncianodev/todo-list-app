let lista = document.querySelector(".list-container");

function criarTarefa() {
  const tarefa = document.querySelector("#task-value").value;

  if (tarefa) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("task-item");

    let newIconCircle = document.createElement("i");
    newIconCircle.classList = "fa-regular fa-circle";

    let newP = document.createElement("p");
    newP.textContent = tarefa;

    let newIconRemove = document.createElement("i");
    newIconRemove.classList = "fa-solid fa-trash";

    newDiv.appendChild(newIconCircle);
    newDiv.appendChild(newP);
    newDiv.appendChild(newIconRemove);

    lista.appendChild(newDiv);
    document.querySelector("#task-value").value = "";
  }
}

lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-circle")) {
    itemCheck(event.target);
  } else if (event.target.classList.contains("fa-circle-check")) {
    itemCheck(event.target);
  }
});

function itemCheck(icon) {
  let div = icon.parentElement;
  let texto = div.querySelector("p");

  if (icon.classList.contains("fa-circle")) {
    icon.classList.remove("fa-circle");
    icon.classList.add("fa-circle-check");
    texto.style.textDecoration = "line-through";
  } else if (icon.classList.contains("fa-circle-check")) {
    icon.classList.remove("fa-circle-check");
    icon.classList.add("fa-circle");
    texto.style.textDecoration = "none";
  }
}

lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    limparTarefas(event.target);
  }
});

function limparTarefas(icon) {
  let div = icon.parentElement;

  div.remove();
}
