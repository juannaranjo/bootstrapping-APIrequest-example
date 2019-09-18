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
    console.log('info usuarios API', usersInfo)
    // creamos los elementos div img y h4 para cada uno de los usuarios que tenemos en el array userInfo
    for(i = 0; i < usersInfo.length; i++){
        var containerAnchor = document.createElement('a');
        var userPictureElment = document.createElement('img');
        var userNameElement = document.createElement('h4');

        var userPicture = usersInfo[i].picture ;
        var userName = usersInfo[i].name.first + " " + usersInfo[i].name.last ;
        var urlplusParams = './userPage.html' + '?' + 'name=' + userName + '&' + 'pic=' + userPicture.large;
        
        //a los elementos "a" creados, se les adiciona en su atributo "href" información que necesitaremos para la redirección a la nueva página del usuario
        containerAnchor.href = urlplusParams;
        containerAnchor.classList.add('user-container');

        // a los elementos creados se les adiciona en sus atributos información que recolectamos de la respuesta de la API
        userPictureElment.src = userPicture.medium;
        userPictureElment.alt = 'Profile picture of ' + userName;
        userNameElement.innerHTML = userName;

        // aderimos los elementos creados al contener principal que tenemos en el HTML
        containerAnchor.appendChild(userPictureElment);
        containerAnchor.appendChild(userNameElement);
        mainWrapper.appendChild(containerAnchor);
    }
})
