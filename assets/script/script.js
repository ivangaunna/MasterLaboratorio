document.addEventListener("DOMContentLoaded", function() {
    console.log(electrodomesticos);

    const contenedorProductos = document.getElementById("contenedorProductos");
    let cardsHTML = "";

    for(let electrod in electrodomesticos) {
        cardsHTML += crearCards(electrodomesticos[electrod]);
    }

    contenedorProductos.innerHTML = cardsHTML;

    function crearCards(electrod) {
        let card = document.createElement('div');
        card.classList.add('card');

        let id = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let marca = document.createElement('h6');
        let ver = document.createElement('h4');

        id.innerText = electrod.id;
        image.src = electrod.img;
        name.innerText = electrod.name;
        price.innerText = electrod.price;
        marca.innerText = electrod.marca;
        ver.innerText = electrod.ver;

        card.appendChild(id);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(marca);
        card.appendChild(ver);

        return card.outerHTML;
    }
});
