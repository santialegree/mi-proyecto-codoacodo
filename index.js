$(window).scroll(function() {
 
    var position =$(this).scrollTop();
    
    // Si el usuario baja el scroll muestro el div qeu contiene el enlace botón
    if (position > 300) {
       $(".botonarriba").fadeIn('slow');
     } else {
     $(".botonarriba").fadeOut('slow');
    }
   });