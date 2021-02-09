function compte_a_rebours() {
    var compte_a_rebours = document.getElementById("compte_a_rebours");
    // la date à partir de laquelle on compte
    var cible = new Date("February 11, 2021 21:00:00");
    var timer_is_on = 0;
    var aujourdhui = new Date();

    var total_secondes = (cible - aujourdhui) / 1000;

    var prefixe = "Affichage dans ";
    if (total_secondes < 0) {
        prefixe = "Compte à rebours terminé il y a "; // On modifie le préfixe si la différence est négatif
        //total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
        clearTimeout(actualisation);
        timer_is_on = 0;
    }

    if (total_secondes > 0) {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_jour = "jours,";
        var mot_heure = "heures,";
        var mot_minute = "minutes,";
        var mot_seconde = "secondes";

        if (jours == 0) {
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1) {
            mot_jour = "jour,";
        }

        if (heures == 0) {
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1) {
            mot_heure = "heure,";
        }

        if (minutes == 0) {
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1) {
            mot_minute = "minute,";
        }

        if (secondes == 0) {
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1) {
            mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0) {
            et = "";
        }

        compte_a_rebours.innerHTML = prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;

        var actualisation = setTimeout("compte_a_rebours();", 1000);
        timer_is_on = 1;
    }
    else // Si total_secondes == 0 (puisque l'on a prit sa valeur absolue)
    {
        compte_a_rebours.innerHTML = 'Enfin il est temps!';
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to("#compte_a_rebours", { y: "0%", duration: 2 });
        tl.to(".slider", { y: "-100%", duration: 2.5, delay: 0.5 });
        tl.to("#compte_a_rebours", { y: "-100%", duration: 2 }, "-=2");
        tl.fromTo(".affiche", { opacity: 0 }, { opacity: 1, duration: 1 });
        //tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
        $('#compte_a_rebours').detach();
    }
}
compte_a_rebours()


// function decompte() {


// // la date courante
// var aujourdhui = new Date();


// // on crée les variables qui accueilleront les différences entre aujourd'hui et la date à atteindre
// var change_j = -1;
// var change_h = -1;
// var change_m = -1;


// // le total de millisecondes de différences
// var diff_mms = cible.getTime() - aujourdhui.getTime();
// console.log(diff_mms)

// // pareil pour les jours
// diff_jours = Math.floor(diff_mms / mms_jour);
// diff_mms -= diff_jours * mms_jour;


// // pour les heures
// diff_heures = Math.floor(diff_mms / mms_heure);
// diff_mms -= diff_heures * mms_heure;


// // les... minutes, bravo ;-)
// diff_minutes = Math.floor(diff_mms / mms_minute);
// diff_mms -= diff_minutes * mms_minute;


// // les secondes, ce qui reste en fait.
// var diff_secondes = Math.floor(diff_mms / mms_seconde);




// // on affecte nos résultats aux champs du formulaire
// document.getElementById("jours").innerHTML = diff_jours;
// document.getElementById("heures").innerHTML  = diff_heures;
// document.getElementById("minutes").innerHTML  = diff_minutes;
// document.getElementById("secondes").innerHTML = diff_secondes;


// // on relance la fonction pour actualiser à la seconde
// setTimeout("decompte()",1000);
// }