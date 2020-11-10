   //déclanchement fonction au chargement grâce au .ready qui indique qu'on est sur du jQuery
   $(function(){

    //Couleur rouge
        $('#text li').css('color','#d40f2a');

    // on cible les enfants de ul par le biais de children()
    $("ul").children().css('color','blue');
    // on peut aussi écrire ul > li (c'est la même chose)
    });


    //la dernière instruction sera celle prise en compte
