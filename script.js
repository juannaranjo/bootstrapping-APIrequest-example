// seleccionamos los elementos del DOM que nos interesan
var mainWrapper = document.querySelector('#main-wrapper');


// ejemplo de como conectarnos a una API y traer la información
fetch('https://randomuser.me/api/?results=50').then((value) =>{
    return value.json();
}).then((value) => {
    // almacenamos la data que necesitamos en un Array
    var usersInfo = [];

    for(i = 0; i < value.results.length; i ++){

        var user = {}

        user.picture =  value.results[i].picture;
        user.name = value.results[i].name;
        usersInfo.push(user);
    }
    return usersInfo
}).then((usersInfo) => {
    console.log(usersInfo)
    // creamos los elementos div img y h4 para cada uno de los usuarios que tenemos en el array userInfo
    for(i = 0; i < usersInfo.length; i++){
        var containerDiv = document.createElement('div')
        var userPicture = document.createElement('img')
        var userName = document.createElement('h4')
        
        // a los elementos creados se les adiciona en sus atributos información que recolectamos de la respuesta de la API
        userPicture.src = usersInfo[i].picture.medium
        userName.innerHTML = usersInfo[i].name.first + " " + usersInfo[i].name.last

        // aderimos los elementos creados a contener principal que tenemos en el HTML
        containerDiv.appendChild(userPicture)
        containerDiv.appendChild(userName)
        mainWrapper.appendChild(containerDiv)
       
    }
})







