/* JS para categorias */
$ ("#form_categorias").submit (function () {
    var nombre = $("#categorias").val();

    if ($.trim(nombre)===''){
        alert ("Debe completar la categoría Francisco");
    return false;
    }

    return true;
});
/* JS para productos */
$ ("#form_productos").submit(function(){
    
    var producto = $ ("#pNombre").val();
    var descripcion = $ ("#descripciones").val();
    var categoria = $ ("#cate").val();

    var errores = [];

    if ($.trim(producto) === ''){
        errores.push ("Debe ingresar el producto");
    
    if ($.trim(descripcion) === ''){
        errores.push ("Debe ingresar la descripción");
    }        
    if ($.trim(categoria) === ''){
        errores.push ("Debe ingresar el categoria");
    }
    if (errores.length > 0){
        errores.push ("Francisco");
        alert (errores.join ("\n "));
        return false;
    }
    }
    return false;
})