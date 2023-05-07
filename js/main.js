const inputTexto = document.querySelector(".input");
const saida = document.querySelector(".resultado");
const seletor = document.querySelector(".seletor");


function btnCryptografar(){
    const inputCryptografado = cryptografar(inputTexto.value);
    saida.value = inputCryptografado;
    inputTexto.value = "";
}





function cryptografar (textoCryptografado){

    let valorSeletor = seletor.options[seletor.selectedIndex].value;


    switch (valorSeletor) {
        case "1":
            
        let matrizAlura = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]; 

        textoCryptografado = textoCryptografado.toLowerCase();
     
         for(let i = 0; i < matrizAlura.length; i++){
             if (textoCryptografado.includes(matrizAlura[i][0])) {
                 textoCryptografado = textoCryptografado.replaceAll(matrizAlura[i][0], matrizAlura[i][1]);
             }
             
         }
         return textoCryptografado;

            break;
    
        case "2":

        let matrizMusical = [["e" , "mi"] ,["d" , "re"], ["c" , "do"], ["g" , "sol"], ["a" , "la"], ["f" , "fa"],["b" , "si"]];

        textoCryptografado = textoCryptografado.toLowerCase();

        for (let i = 0; i < matrizMusical.length; i++) {
            if (textoCryptografado.includes(matrizMusical[i][0])) {
                textoCryptografado = textoCryptografado.replaceAll(matrizMusical[i][0], matrizMusical[i][1]);
            }
            
        }
        return textoCryptografado;

           break;
           
        }
    
    }





function btnDescryptografar(){
    const inputCryptografado = descryptografar(inputTexto.value);
    saida.value = inputCryptografado;
    inputTexto.value = "";
}

function descryptografar (textoDescryptografado){

    let valorSeletor = seletor.options[seletor.selectedIndex].value;


    switch (valorSeletor) {
        case "1":
            
        
        let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]; 

        textoDescryptografado = textoDescryptografado.toLowerCase();

            for(let i = 0; i < matrizCodigo.length; i++){
                if (textoDescryptografado.includes(matrizCodigo[i][0])) {
                    textoDescryptografado = textoDescryptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
            
            }
            return textoDescryptografado;
            break;

            case "2":

            let matrizMusical = [["e" , "mi"] ,["d" , "re"], ["c" , "do"], ["g" , "sol"], ["a" , "la"], ["f" , "fa"],["b" , "si"]];

            textoDescryptografado = textoDescryptografado.toLowerCase();
    
            for (let i = 0; i < matrizMusical.length; i++) {
                if (textoDescryptografado.includes(matrizMusical[i][1])) {
                    textoDescryptografado = textoDescryptografado.replaceAll(matrizMusical[i][1], matrizMusical[i][0]);
                }
                
            }
            return textoDescryptografado;
    
               break;

        }
    }
