alert("hola");
edad();
function edad(){

    edad = prompt("¿cuantos años tienes");
    parseInt(edad);
    if(edad >=18){
        alert("puedes navegar tranquilamente por esta pagina web");
    }else if( edad < 18 && edad>0){
        alert("Lo sentimos; no tienes la edad suficiente para navegar por esta pagina web");
        window.open("about:blank","_self").close()  
    }

}
