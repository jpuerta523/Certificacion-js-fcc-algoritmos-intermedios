/* Entidades HTML 
respuesta  enviada a FCC */

    /* evalua la cadena de texto y reemplaza todos los elementos definidos por sus codigos Html equivalentes*/
    function convertHTML(str) {
        return  str
        .replaceAll(`&`,"&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll(`"`,"&quot;")
        .replaceAll(`'`,"&apos;")
    }

    console.log(convertHTML("<str>"))


