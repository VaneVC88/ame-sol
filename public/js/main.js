$("#registro").on("submit", function(event){
    event.preventDefault();
    var name, email;
    name = $(this).find('input[name*="nombre"]').val();
    email = $(this).find('input[name*="email"]').val();
    console.log(name, email)
    var valido = true;
    var error = '';
    if(name.length === 0)
    {
        valido = false;
        error += 'Ingrese Nombre.\n';
    }
    if(email.length === 0)
    {
        valido = false;
        error += 'Ingrese Email.\n';
    }else
    {
        var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regExpEmail.test(email))
        {
            valido = false;
            error += 'El Email debe contener el formato correcto.\n';
        }
    }
    if(!valido)
    {
        alert(error)
        return;
    }

})





$("#form-share").on("submit", function(event){
    event.preventDefault();
    var email;
    email = $(this).find('input[name*="email"]').val();
    console.log(email)
    var valido = true;
    var error = '';
    if(email.length === 0)
    {
        valido = false;
        error += 'Ingrese Email.\n';
    }else
    {
        var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regExpEmail.test(email))
        {
            valido = false;
            error += 'El Email debe contener el formato correcto.\n';
        }
    }
    if(!valido)
    {
        alert(error)
        return;
    }

})