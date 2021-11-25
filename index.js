// alert("adicionar data atual ao lado do nome do tec e no recortar")
// alert("add link e serv conc")
const defect_input = document.querySelector("#defect_input");
const concluded_list = document.querySelector("#concluded_list")
const obs_list = document.querySelector("#obs_list");
const conclusion_list = document.querySelector("#conclusion_list");
const folha = document.querySelector("#folha");

const rem_defect_btt = document.querySelector("#rem_defect_btt");
const add_defect_button = document.querySelector("#add_defect_button");
const cut_button = document.querySelector("#cut_button");
const now = new Date;
const today = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear().toString().substr(-2)}`

console.log(today);

const relatedDefects = [
  {
    name: "verificamos que o hd está com erro critico de Ultra DMA.",
    actions: ["Troca do HD", "Instalação do sistema", "Backup "],
    link: "• Link do HD",
  },
  {
    name: "Verificamos que a maquina está suja internamente",
    actions: ["Limpeza interna simples"],
  },
]
const relatedDefectsNames = ()=> {
  return relatedDefects.map((d) => d.name);
}
const relatedActions = ()=> {
  return relatedDefects.reduce((acc, defect, index) => {
    defect.actions.forEach((action, actionindex) =>{
      let obj = {
        name:action,
        parentIndex:index,
        actionindex:actionindex
      }
      acc.push(obj);
    })
    return acc;
  },[])
}
// console.log(relatedActions());

async function clipboardCopy(id) {
  let text = document.querySelector(id).value;
  await navigator.clipboard.writeText(text);
}
function clearInputById(id) {
  document.querySelector(id).value = "";
}
function clipboardCut(id) {
  clipboardCopy(id.currentTarget.myParam); // nescessario para passar parame  no eventlistener
  clearInputById("#defect_input");
}
function renderObs() {// render Defects
  concluded_list.innerHTML = `- SERVIÇOS CONCLUÍDOS - Téc. Max Leal (${today}) -----------------------------------------------------`
  obs_list.innerHTML =
    `- OBS.: - Téc. Max Leal (${today}) --------------------------------------------`;
  const table =  document.createElement("table");
  table.setAttribute("class", "obsTable")

  relatedDefects.forEach((defect, index) => {// foreach()
    const tr = document.createElement("tr")
    tr.setAttribute("class", "defect")
    tr.setAttribute("id",`${index}`)
    const td_number = document.createElement("td")
    const td_text = document.createElement("td")
    td_number.innerText = `${index + 1}.`
    td_text.innerText = defect.name
    tr.appendChild(td_number)
    tr.appendChild(td_text)
    table.appendChild(tr);
  });// foreach() end
  obs_list.appendChild(table);
}

function renderConclusion() {

  conclusion_list.innerHTML = `- CONCLUSÃO DA ANALISE - Téc. Max Leal (${today}) --------------------------------------------`; //LIMPA O HTML KKK
  const table = document.createElement("table")
  
  relatedActions().forEach((action, index) =>{
    const tr = document.createElement("tr")
    
    const td_number = document.createElement("td")
    const td_text = document.createElement("td")
    td_number.innerText = `${index +1}.`
    td_text.innerText = action.name
    tr.setAttribute("parentindex", action.parentIndex)
    tr.setAttribute("actionindex", action.actionindex)
    tr.setAttribute("id",index)
    tr.appendChild(td_number)
    tr.appendChild(td_text)
    table.appendChild(tr);
  })
  conclusion_list.appendChild(table);

  // relatedDefects.forEach((defect, aindex) => {
  //   let action_list = document.createElement("ol"); // actions <ol>
  //   action_list.setAttribute("id", "action_list");
  //   defect.actions.forEach((action, bindex) => {
  //     // dentro das acoes
  //     let action_item = document.createElement("li"); // cria <li>
  //     action_item.innerText = action; // define o texto da li
  //     action_item.setAttribute("class", "action"); // define a classe do li
  //     action_item.setAttribute("id", `${bindex}${aindex}`); // adiciona o id no action_list
  //     action_list.appendChild(action_item); // adiciona a li na lista
  //   }); // concluiu a lista de açoes do primeiro defeito
  //   conclusion_list.appendChild(action_list); // adiciona a lista ao html
  // });
}

function renderScreen() {
  renderObs();
  renderConclusion();
  // console.log("defeitos relatados", relatedDefects)
  // console.log('lista de nome dos relatados', relatedDefectsNames());
}

function addDefect(element_id) {
  
  const defectInput = document.querySelector(element_id.currentTarget.myParam).value;
  const nohaveDefectOnList = relatedDefects[0] == undefined;
  const def_obj = defects.filter((i) => i.name === defectInput); // filter defectInput on data list

  if (nohaveDefectOnList) {
    relatedDefects.push(def_obj[0]); // add to related
    renderScreen();
  } else {
    // relatedDefects.forEach(defect_obj =>{
    if (relatedDefectsNames().indexOf(defectInput) != -1) {
      console.log(
        def_obj.name,
        defectInput,
        relatedDefects.indexOf(defectInput)
      );
      alert("já existe");
    } else {
      const def_obj = defects.filter((i) => i.name === defectInput);
      relatedDefects.push(def_obj[0]);
      renderScreen();
    }
    // })
  }
  clearInputById("#defect_input");
}

function removeDefect() {
  let target_id = event.target.parentNode.id[0];// tr id
  let target_class = event.target.parentNode.className

  if (target_class === "defect") {
    let defect_index = target_id
    relatedDefects.splice(defect_index, 1);
    console.log("defect removed");
  }
  console.log(event.target);
  renderScreen();
}
function removeConclusion() {
  const target = event.target
  const target_line = target.parentNode// tr
  const obs_index = target_line.getAttribute("parentindex")
  const act_index = target_line.getAttribute('actionindex')
  console.log(obs_index, act_index);
  console.log(relatedDefects[obs_index]);
  relatedDefects[obs_index].actions.splice(act_index, 1)
  renderScreen();
}
// console.log(relatedDefects[0].actions);
function click_in_defect() {
  removeDefect()
}
function clicki_in_action(){
  removeConclusion()
}

(function main() {
  // ----------------MAIN FUNCTION---------------------------------
  autocomplete(defect_input, defects_name);

  // Eventos click:
  cut_button.addEventListener("click", clipboardCut, false); // click co copy
  cut_button.myParam = "#defect_input";

  add_defect_button.addEventListener("click", addDefect, false);
  add_defect_button.myParam = "#defect_input";

  // rem_defect_btt.addEventListener('click', removeDefect, false)

  obs_list.addEventListener("click", click_in_defect, false);
  conclusion_list.addEventListener("click", clicki_in_action, false);
})();

// function deleteItem(value) {
//   const position = defeitos_arr.indexOf(value)
//   if (position !== -1) { //se encontrar na lista
//     defeitos_arr.splice( position, 1)
//     localStorage.setItem("storage", defeitos_arr)
//     alert(`Item ${value} DELETED successfolly`);
//   } else {
//     alert("já existe um item na lista com esse nome")
//   }
// }

// function addNewItem(value) {
//   if (defeitos_arr.indexOf(value) === -1) { //se nao encontrar na lista
//     defeitos_arr.push(value);
//     localStorage.setItem("storage", defeitos_arr)
//     alert(`Item ${value} ADDED successfully`);

//   } else {
//     alert("já existe um item na lista com esse nome")
//   }
// }
/*const defeitos_arr = Object.keys(data).map(function (key, index) {
  return data[key].name;
});*/
// function loadStorage() {
//   if (localStorage.getItem("storage")) {
//     defeitos_arr = localStorage.getItem("storage").split(",");
//   }
// }


