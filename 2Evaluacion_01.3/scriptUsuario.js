//  Página web 22/5/2024
/*  Elaborado por Yuhani Hernández Garcia       (Dolor de riñon)
                  Ricardo Daniel Hernández Sosa (PlansVsAngry999)*/

document.getElementById("Usuario").addEventListener("submit", function(event){
    event.preventDefault();
        //Restaurar los mensajes.
    document.getElementById("mensaje1").textContent = null;
    document.getElementById("mensaje2").textContent = null;
        //Declarar variables
        var pwd = document.getElementById("contra").value;
        var pwdLength = pwd.length;
        var user = document.getElementById("usu").value;
        var userArray = user.split("@");                //Dividir la cadena 'user' cada que exista un '@'. Asignar este arreglo a 'userArray'.
        
    if(user.indexOf("@") === -1){                        //Ubica la posición del arroba, en caso de que no exista en la cadena 'user'-->
        document.getElementById("mensaje1").innerHTML = "El usuario '" + user + "' no contiene ninguna dirección de correo.";
    }
    else if(userArray[1] != "goes.com"){                //la posición de "goes.com" en el arreglo debe ser [1], caso contario no existe en la cadena 'user'.
        document.getElementById("mensaje1").innerHTML = "La dirección '" + userArray[1]+ "' no pertenece a nuestro sitio.";
    }else{
        if(pwdLength < 10){                             //Si la longitud de la contraseña es menor a 10 -->.
            document.getElementById("mensaje2").textContent = "La contraseña es muy corta: "+ pwd.length+" caracteres.*";
        }
        else if(pwd != "1234567890"){                   //Si la contraseña es distintia de '123...', entonces es incorrecta.
            document.getElementById("mensaje2").textContent = "La contraseña es incorrecta*";
        }else{
            //Almacenar informacion en el navegador
            localStorage.setItem("user_name",userArray[0]);
            alert("Has iniciado sesión con exito");
            //Abrir una ventana nueva
            window.location.href="cards.html";
        }
    }
});
    //Botón de reseteo, al ejecutarse estable los valores de los input en nulos.
document.getElementById("Usuario").addEventListener("reset", function(event){
    event.preventDefault();
    document.getElementById("usu").value = null;
    document.getElementById("contra").value = null;
    document.getElementById("mensaje1").textContent= null;
    document.getElementById("mensaje2").textContent= null;
});


/*
    if(userArray[0] === userArray[0] && pwd === "123"){    //Si el usuario y contraseña son correctos -->
            //Almacenar informacion en el navegador
        localStorage.setItem("user_name",user);
        alert("Has iniciado sesión con exito");
            //Abrir una ventana nueva
        window.location.href="cards.html";
    }else if(userArray[0] != userArray[0] && pwd != "123"){//Si el usuario y contraseña son incorrectos -->
        document.getElementById("mensaje1").textContent = "El usuario es incorrecto*";
        document.getElementById("mensaje2").textContent = "La contraseña es incorrecta*";
    }else if(userArray[0] != userArray[0]){                //Si el usuario es incorrecto -->
        document.getElementById("mensaje1").textContent = "El usuario es incorrecto*";
    }else if(pwd != "123"){                 //Si la contraseña es incorrecto -->
        document.getElementById("mensaje2").textContent = "La contraseña es incorrecta*";
    }
*/


/*document.getElementById("Usuario").addEventListener("submit", function(event){
    event.preventDefault();

var usu = document.getElementById("usu").value;
var contra = document.getElementById("contra").value;

if (usu ==="abc"){
    document.getElementById("mensaje1").textContent = " ";
    document.getElementById("mensaje2").textContent = " ";
    
    if (contra==="xd"){
        document.getElementById("mensaje1").textContent = " ";
        document.getElementById("mensaje2").textContent = " ";
        alert("Inicio de sesión correcta");
        localStorage.setItem("nombre", usu)
        window.location.href="cards.html";
    
    } else{
        document.getElementById("mensaje1").textContent = " ";
        document.getElementById("mensaje2").textContent = "Contraseña Incorrecta";
    }

} else{
    document.getElementById("mensaje1").textContent = "Usuario Incorrecto";
    document.getElementById("mensaje2").textContent = " ";
}

});
*/
