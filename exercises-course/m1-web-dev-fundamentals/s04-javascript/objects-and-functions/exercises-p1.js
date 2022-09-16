// 1)

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

// 2)

info.recorrente = 'Sim';

console.log(info);

// 3)

for (let keys in info) {
    console.log(keys);
}

// 4)

for (let keys in info) {
    console.log(info[keys]);
}

// 5)

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info) {
    if (info[key] === info2[key]) {
        console.log("Ambos recorrentes")
    } else {
        console.log(`${info[key]} e ${info2[key]}`)
    }
}

// 6)

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

//  7)

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowlink',
    editora: 'Rocco',
});

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);