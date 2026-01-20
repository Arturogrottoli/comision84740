//Ejemplo sincronico

const buttonSync = document.getElementById("runSync");
const output = document.getElementById("output");

function operacionLentaSync() {

    const inicio = Date.now();
    while (Date.now() - inicio < 5000) { }
        return "OK"
    
   }

buttonSync.addEventListener("click",() =>

    {
        output.textContent = "";
        output.textContent += "Estoy en la clase de Arturo\n";
        output.textContent += "arranco la clase\n";

        const resultado = operacionLentaSync();


    output.textContent += "resultado;" + resultado + "\n";
    output.textContent += "Fin de la cuestion!"
    }

);


//ASincronico!


const buttonAsync = document.getElementById("runAsync")

function operacionLentaAsync(callback) {
    setTimeout(() =>{
        output.textContent += "LLego la comida!!!\n"
    },5000);
}


buttonAsync.addEventListener("click",() =>

    {
        output.textContent = "";
        output.textContent += "Estoy en la clase de Arturo pero grabada!\n";
        output.textContent += "Me agarro hambre, me pido una pizza\n";

        const resultado = operacionLentaAsync((resultado) =>{
            output.textContent += "resultado;" + resultado + "\n";
        }
    );


   
    output.textContent += "Mientras tanto sigo prestando atencion a la clase!\n"
    }

);


//SetTimeout con loader

const btnTimeoutLoader = document.getElementById("runTimeoutLoader") //Apunta al boton
const loader = document.getElementById("loader") //Apunta al div

btnTimeoutLoader.addEventListener("click", ()=>{
    output.textContent = "";
    loader.style.display = "block";

    output.textContent += "iniciamos una espera\n";

    setTimeout(()=>{
        loader.style.display = "none";
    output.textContent += "Aca se carga el catalogo de netflix!\n";
    
},5000);

output.textContent += "ahora la pagina no se bloquea\n";

});


//Ejemplo de try and catch


function dividir(a,b){
    if(b === 0){
        throw new Error("NO SE PUEDE DIVIDIR POR CERO, DANGER!!");
    }

    return a/b;
}

const btnTryCatch =  document.getElementById("runTryCatch");

btnTryCatch.addEventListener("click", ()=>{
    output.textContent = "";
    output.textContent += "Aca arranca el try and catch \n";

    try{
        output.textContent +=" entramos en el try\n";
        const resultado = dividir(1,0);

        output.textContent += "resultado:" + resultado + "\n";
    }
    catch(error){
        output.textContent += "aparecio el error que temiamos \n";
        output.textContent += "mensaje de error" + error.message +"\n";
    }finally{
        output.textContent += "Esto se ejecuta igual \n";
    }

    output.textContent += "el programa, funciono??? \n";

});


//El famosisimo fetch

const btnFetch = document.getElementById("runFetch");
const cardsContainer = document.getElementById("cards");

btnFetch.addEventListener("click", async () => {
    cardsContainer.innerHTML = "";
    output.textContent = "";
    output.textContent += "Iniciando fetch a la API de Rick and Morty...\n";
    
    try {
        output.textContent += "Haciendo petición a la API...\n";
        const response = await fetch("https://rickandmortyapi.com/api/character");
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        output.textContent += "Respuesta recibida, procesando datos...\n";
        const data = await response.json();
        const characters = data.results;
        
        output.textContent += `Se encontraron ${characters.length} personajes\n`;
        
        characters.forEach(character => {
            const card = document.createElement("div");
            card.className = "character-card";
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h1>${character.name}</h1>
                <p><strong>Status:</strong> ${character.status}</p>
                <p><strong>Species:</strong> ${character.species}</p>
                <p><strong>Origin:</strong> ${character.origin.name}</p>
            `;
            cardsContainer.appendChild(card);
        });
        
        output.textContent += "Personajes cargados exitosamente!\n";
        
    } catch (error) {
        output.textContent += `Error al cargar los personajes: ${error.message}\n`;
        cardsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});


