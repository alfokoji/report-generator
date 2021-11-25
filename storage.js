// actions separadas dos defeitos localizados por referencia "tipo id" funciona melhor..
/*
{
name:"",
actions:[""]
},

*/


const defects = [
{
name:"Verificamos que a carcaça está quebrada na região das dobradiças. Recomendamos um reparo de carcaça MÉDIO.",
actions:["Reparo de carcaça MÉDIO."]
},
  {
    name: "Verificamos que o sistema está extremamente lento e demorando a inicializar. Recomendamos uma formatação e Reinstalação do sistema.",
    actions: [
      "Formatação e reinstalação do sistema",
      "Backup = "
    ]
  },
  {
    name: "Verificamos que a fonte da maquina está queimada. Recomendamos a troca da fonte de alimentação.",
    actions: [
      "Troca da fonte de alimentação."
    ]

  },
  {
    name: "Verificamos que o componente da tela responsável pela luminosidade está queimado. Recomendamos a troca da tela",
    actions: ["Troca de tela.      				LINK E FOTO"]
  },
  {
    name: 'Não encontramos a placa mãe compativel com nossos fornecedores. - Téc. Max Leal data:',
    actions: []
  },
  {
    name: 'verificamos que o hd está com erro critico de Ultra DMA além de outros erros. Recomendamos a sua troca e o backup dos arquivos com urgencia..',
    actions: [
      "Troca do HD						LINK",
      "Instalação do sistema",
      "Backup = "
    ],
    link: "• Link do HD",
  },
  {
    name: "Verificamos que a maquina está suja internamente. Recomendamos uma limpeza interna SIMPLES. ",
    actions: [
      "Limpeza interna SIMPLES."
    ]
  },
  {
    name: "Verificamos que a maquina está MUITO suja internamente. Recomendamos uma limpeza interna MÉDIA. ",
    actions: [
      "Limpeza interna média"
    ]
  },
  {
    name: "Verificamos a maquina está sobreaquecendo. recomendamos umalimpeza interna média.",
    actions: [
      "Limpeza interna média"
    ]
  },
  {
    name: "Verificamos que a maquina possui chave de ativação do Windows, porem não está com o Windows ativado. Recomendamos uma formatação e reinstalação do sistema para efetuar sua ativação, pois a versão instalada é incompatível com a chave da maquina.",
    actions: [
      "Formatação e reinstalação do sistema",
      "Backup = "
    ]
  }
]
const defects_name = defects.map(defect => defect.name)


// const data = { 
//   defects : {
//     'verificamos que o hd está com erro critico de "Ultra DMA". ':[
//       "Troca do HD							LINK",
//       "Instalação do sistema"
//     ],
//     "Verificamos que a maquina está suja internamente":["Limpeza interna SIMPLES."],
//     "Verificamos que a maquina está MUITO suja internamente":["Limpeza interna média"]
//   }
// }

// const defeitos_arr = (add=0, newItem="")=> {
//   if (add==0) {


//     if(localStorage.getItem('storage')) {
//       return  localStorage.getItem('storage');
//     } else {
//       const a = [
//         "HD com erro critico",
//         "Tela defeituosa"
//       ]
//       localStorage.setItem('storage', a);
//       return localStorage.getItem('storage');
//     }

//   }else if(add=="add") {// add novo item
//     if (defeitos_arr().split(',').indexOf(newItem)==-1) {// se não há na lista
//       let arr = localStorage.getItem('storage').split(',')
//       arr.push(newItem)
//       localStorage.setItem('storage', arr)
//     } else {
//       alert("Este item já existe");
//     }
//   }
// }
// defeitos_arr("add", "mais um item")
// console.log(defeitos_arr().split(',').indexOf("mais um itsem"));