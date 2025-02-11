'use strict'

const disciplinas = [
{nome:    'PWBE', cor: '#8A2BE2', icon: 'PPDM.png'},
{nome:    'PWFE', cor: '#BFEFFF', icon: 'PRO.png'},
{nome:    'PPDM', cor: '#54FF9F ', icon: 'PWBE.png'},
{nome:    'PRO', cor: '#FFD700', icon: 'PWFE.png'}

]

function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novaImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)

const personagens = [
    {nome: 'Zoro', descricao: 'Espadachim habilidoso, busca se tornar o maior espadachim do mundo.', imagem: '6c0b252b8d6c90099f71b49c201c2f60.jpg', cor: 'rgb(0, 80, 0)'},
    {nome: 'Luffy', descricao: 'Capitão dos Chapéus de Palha, sonha em ser o Rei dos Piratas e conquistar o One Piece.', imagem: '46e862b1894bc33053e17a9f437b1e76.jpg', cor: 'rgb(112, 0, 0)'},
    {nome: 'Sanji', descricao: 'Sanji é o cozinheiro da tripulação, mestre das artes marciais e sonha em encontrar o All Blue, o mar onde todos os oceanos se encontram.', imagem: '8ad9f8400a8bf8221aee075cd38bffa1.jpg', cor: 'rgb(104, 104, 0)'}
];

function criarCard(personagem) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = personagem.cor;

    const imagem = document.createElement('img');
    imagem.src = `icon/${personagem.imagem}`;
    imagem.alt = personagem.nome;

    const h2 = document.createElement('h2');
    h2.textContent = personagem.nome;

    const p = document.createElement('p');
    p.textContent = personagem.descricao;

    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
}
personagens.forEach(criarCard);
