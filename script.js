
let btnInformation = document.getElementsByTagName('a');

let info = [
    { index: 1, text: 'REGRAS Lorem ipsum dolor sit amet, consectetur adipisicing elit.Id dolor ratione eum eveniet beatae ipsa numquam voluptatum sapiente exercitationem iure! Voluptatem consequatur harum enim in inventore voluptates adipisci repellat dolores!' },
    { index: 2, text: 'CAMPEONATOS Lorem ipsum dolor sit amet, consectetur adipisicing elit.Id dolor ratione eum eveniet beatae ipsa numquam voluptatum sapiente exercitationem iure! Voluptatem consequatur harum enim in inventore voluptates adipisci repellat dolores!' },
    { idex: 3, text: ' JOGADOERS Lorem ipsum dolor sit amet, consectetur adipisicing elit.Id dolor ratione eum eveniet beatae ipsa numquam voluptatum sapiente exercitationem iure! Voluptatem consequatur harum enim in inventore voluptates adipisci repellat dolores!' },
    { index: 4, text: ' PARTIDAS Lorem ipsum dolor sit amet, consectetur adipisicing elit.Id dolor ratione eum eveniet beatae ipsa numquam voluptatum sapiente exercitationem iure! Voluptatem consequatur harum enim in inventore voluptates adipisci repellat dolores!' }
]

for (let i = 0; i < btnInformation.length; i++) {
    btnInformation[i].onclick = function (ev) {
        ev.preventDefault();
        let showInformation = document.getElementById('Regras');
        showInformation.innerHTML = `<div style="width:300px;margin:3rem auto;position:relative;"><span class="fechar">&times;</span><p style="color:white">${info[i].text}</p></div>`;

        let closeInformation = showInformation.querySelector('.fechar');
        closeInformation.onclick = () => {
            showInformation.style.width = '0px';
            showInformation.innerHTML = ''; // Limpa o conteúdo do modal
        };
        showInformation.style.width = '400px';
    };
}





let y = document.getElementById("modal");
let m = document.getElementById("modalImage");
let l = document.getElementById("modalLegend");

document.getElementById("mod").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod1").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod2").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod3").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod4").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod5").addEventListener("click", function () {

    m.className = "vrt";
    l.className = "vrt";
    y.style.display = "block";

    m.src = this.src;
    l.textContent = this.alt;
})


document.getElementById("close").addEventListener("click", () => {
    modal.style.display = "none"
})


let btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function (ev) {
        ev.preventDefault();
        let texts = this.nextElementSibling;
        texts.style.display = (texts.style.display === 'block') ? 'none' : 'block'
    }
}


