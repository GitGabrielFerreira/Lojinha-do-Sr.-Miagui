let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let cardContainer = document.getElementById("itens_section");

ITENS_LOJA.forEach(function(item) {
    let card_box = document.createElement("div");
    card_box.className = "card_box";

    let nomElement = document.createElement("h3");
    nomElement.textContent = item.nome;

    let prec = document.createElement("p");
    prec.textContent = "Preço: R$" + item.preco.toFixed(2);

    let img = document.createElement("img");
    img.src = item.url_img;
    img.alt = item.nome;

    let descricao = document.createElement("p");
    descricao.textContent = item.descricao;
    
    card_box.appendChild(img);
    card_box.appendChild(nomElement);
    card_box.appendChild(prec);
    card_box.appendChild(descricao);

    
    cardContainer.appendChild(card_box);
});

