const x = document.getElementById("Regras");

function abrirRegras(){  
    x.style.width = "33.3%";
}
function abrirCampeonatos(){  
    x.style.width = "33.3%";
}
function abrirJogadores(){  
    x.style.width = "33.3%";
}
function abrirPartidas(){  
    x.style.width = "33.3%";
}

document.getElementsByClassName("fechar")[0].addEventListener("click", ()=>{
         x.style.width = "0%";
})


let y = document.getElementById("modal");
let m = document.getElementById("modalImage");
let l = document.getElementById("modalLegend");

document.getElementById("mod").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod1").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod2").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod3").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod4").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})
document.getElementById("mod5").addEventListener("click",function(){
    
    m.className  = "vrt";
    l.className = "vrt";
    y.style.display = "block";
    
    m.src = this.src;
    l.textContent = this.alt;
})

  
document.getElementById("close").addEventListener("click", ()=>{
    modal.style.display = "none"
})


