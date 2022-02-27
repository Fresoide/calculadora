
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
const borrar = document.querySelector("#borrar");
const igual = document.querySelector("#igual");
toString(textoEnPantalla)

// obtener ultimo valor de texto en pantalla:
// textoEnPantalla.id[textoEnPantalla.id.length - 1]

const enPantalla = ()=>{
    let text = textoEnPantalla.value;
    textoEnPantalla.id = text;
    
}
  
document.addEventListener("keydown", (e)=>{
    // si el usuario presiona enter (tecla 13)
if(event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9" || event.key == "0" || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/"){       
        textoEnPantalla.value += event.key;
        textoEnPantalla.id += event.key}
        if(event.key == "Enter"){
            let memoria = eval(textoEnPantalla.id);
           textoEnPantalla.value = memoria;
           textoEnPantalla.id = memoria;
        }
        if(event.key == "Backspace"){
            const texto = textoEnPantalla.id;
            const texto2 = texto.substr(0, texto.length - 1);
            textoEnPantalla.id = texto2;
            textoEnPantalla.value = texto2;
        }


    }
);







// función de reseteo
const reset = ()=>{
    textoEnPantalla.value = "";
    textoEnPantalla.id = ""
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




//  ver ultimo caracter de string (textoEnpantalla.id)
const getLastString =  ()=>{
    let cadena = textoEnPantalla.id;
    let resultado = cadena.substr(-1);
    return resultado

}
//terminar validaciones para que no se repitan operadores
sumar.addEventListener("click",(e)=>{
        if(getLastString() != "+" && getLastString() != "-" && getLastString() != "/" && getLastString() != "*"){
        textoEnPantalla.value += "+"
        textoEnPantalla.id += "+";
        sumar.value = "+"
    }

    else{
        

    }
})
restar.addEventListener("click",(e)=>{
        if(getLastString() != "+" && getLastString() != "-" && getLastString() != "/" && getLastString() != "*"){
        textoEnPantalla.value += "-"
        textoEnPantalla.id += "-";
        restar.value = "-"
    }

    else{
        

    }
})
dividir.addEventListener("click",(e)=>{
        if(getLastString() != "+" && getLastString() != "-" && getLastString() != "/" && getLastString() != "*"){
        textoEnPantalla.value += "/"
        textoEnPantalla.id += "/";
        dividir.value = "/"
    }

    else{
        

    }
})
multiplicar.addEventListener("click",(e)=>{
        if(getLastString() != "+" && getLastString() != "-" && getLastString() != "/" && getLastString() != "*"){
        textoEnPantalla.value += "*"
        textoEnPantalla.id += "*";
        multiplicar.value = "*"
    }

    else{
        

    }
})
// borrar
borrar.addEventListener("click", (e)=>{
    const texto = textoEnPantalla.id;
    const texto2 = texto.substr(0, texto.length - 1);
    textoEnPantalla.id = texto2;
    textoEnPantalla.value = texto2;
})
// igual xd
igual.addEventListener("click",(e)=>{
    let memoria = eval(textoEnPantalla.id);
textoEnPantalla.id = memoria;
textoEnPantalla.value = memoria;


})

// generar botones numericos
for ( let i=0; botones.childElementCount < 17; i++ ) {
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
        textoEnPantalla.value += id;
        textoEnPantalla.id += "" + boton.value;

 
    })
}

//operaciones xd

