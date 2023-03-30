    function date_heure(id)
{
        date = new Date;
        // annee = date.getFullYear();
        // moi = date.getMonth();
        // mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        // j = date.getDate();
        // jour = date.getDay();
        // jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        // resultat = '<table><tr><td style=\"width:300px; font-family:arial;text-align:center;font-size:12pt;font-weight:bold; \">'+jours[jour]+' '+j+' '+mois[mois]+' '+annee+'</td></tr><tr><td  style=\"font-family:arial;text-align:center;font-size:22pt;font-weight:bold; \">'+h+':'+m+':'+s+'</ts></tr></table>';
        resultat = '<tr><td>'+h+':'+m+'</ts></tr></table>';
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}