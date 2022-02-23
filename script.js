let memoria;

// inicializo botones div, inicializo div de pantalla.
const botones = document.querySelector(".botones");
const textoEnPantalla = document.querySelector(".texto");
// inicializo botones operadores
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const dividir = document.querySelector("#dividir");
const multiplicar = document.querySelector("#multiplicar");
const vaciar = document.querySelector("#vaciar");
const igual = document.querySelector("#igual");
toString(textoEnPantalla)

// obtener ultimo valor de texto en pantalla:
// textoEnPantalla.id[textoEnPantalla.id.length - 1]


const numerosAntesDelMas = () =>{if((textoEnPantalla.id).includes("+")){
    let memoria = 0;
    for(let i = 0; memoria < (textoEnPantalla.id.length - 1); i++){
        memoria++
        
    }
    
    return memoria;
}
    else {
        
    }

}



// función de reseteo
const reset = ()=>{
    textoEnPantalla.innerHTML = "";
    textoEnPantalla.value = "";
    sumar.value = "";
    restar.value = "";
    dividir.value = "";
    multiplicar.value = "";
}
// botón C = VACIAR
vaciar.addEventListener("click", (e)=>{
        reset()
})
// operadores
sumar.addEventListener("click",(e)=>{
    if(textoEnPantalla.id[textoEnPantalla.id.length - 1] != "+"){
        textoEnPantalla.innerHTML += "+"
        textoEnPantalla.id += "+";
        sumar.value = "+"
    }

    else{
        

    }
})
restar.addEventListener("click",(e)=>{
    if(textoEnPantalla.id[textoEnPantalla.id.length - 1] != "-"){
        textoEnPantalla.innerHTML += "-"
        textoEnPantalla.id += "-";
        restar.value = "-"
    }

    else{
        

    }
})
dividir.addEventListener("click",(e)=>{
    if(textoEnPantalla.id[textoEnPantalla.id.length - 1] != "/"){
        textoEnPantalla.innerHTML += "/"
        textoEnPantalla.id += "/";
        dividir.value = "/"
    }

    else{
        

    }
})
multiplicar.addEventListener("click",(e)=>{
    if(textoEnPantalla.id[textoEnPantalla.id.length - 1] != "*"){
        textoEnPantalla.innerHTML += "*"
        textoEnPantalla.id += "*";
        multiplicar.value = "*"
    }

    else{
        

    }
})

// igual xd
igual.addEventListener("click",(e)=>{

    
})

// generar botones numericos
for ( let i=0; botones.childElementCount < 16; i++ ) {
    let button = document.createElement("button");
    button.id = "boton"+i
    button.value = i
    button.className = "boton"
    button.innerHTML = i
    botones.appendChild(button)
}

//leer cada botón
for(let id in botones.childNodes){
    let boton = document.querySelector(`#boton${id}`)
    boton.addEventListener("click", (e)=>{
        textoEnPantalla.innerHTML += id;
        textoEnPantalla.id += "" + boton.value;

 
    })
}

//operaciones xd

