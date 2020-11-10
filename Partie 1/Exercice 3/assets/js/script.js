   //déclanchement fonction au chargement grâce au .ready qui indique qu'on est sur du jQuery (ici caché avec ce raccourcis)
   $(function(){
    // = $(document).ready(function()

    //Change la police d'écriture
         $('#text').css({"font-family": "Arial"});
        //  = même chose : $('#text').css("font-family","Arial");
    });

    // en js attention on ne peut pas écrire font-family de cette façon : il faut faire du KameCase comme ceci fontFamily