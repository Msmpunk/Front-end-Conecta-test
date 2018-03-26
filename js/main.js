var users;

$.ajax({
    // la URL para la petición
    url : 'http://localhost:4000/api/v1/users',
    type : 'GET',
    dataType : 'json',
    success : function(response) {
        users = response.users
        console.log(users)

        if(!users){
          $('#table').append('<div class="center">'+'No hay usuarios'+'</div>')
        }else{
          for (var i = 0; i < users.length; i++) {
            $('tbody').append('<tr>' +
              '<td>'+response.users[i].firstName+'</td>'+
              '<td>'+response.users[i].lastName+'</td>'+
              '<td>'+response.users[i].roles+'</td>'+
              '<td>'+response.users[i].username+'</td>'+
            '</tr>')
          }
        }

    },
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },

    // código a ejecutar sin importar si la petición falló o no
    complete : function(xhr, status) {
      console.log({
        message: 'Peticion realizada con exito',
        status: status
      })
    }
});
