  jQuery(document).ready(function($) {
    $("#calcule-result").click(function(){
        var capital=$("#capital").val();
        var resultat=capital*(0.96/100);

        var prime=  resultat*(1+0.96/100) ;
        var global= Number(prime.toFixed(2)) + Number(capital) ;
        $("#result").val(resultat.toFixed(2));
   });
  $("#calcule-prime").click(function(){
        var capital=$("#capital").val();
        var resultat=capital*(0.96/100);
        var prime=  resultat*(1+0.96/100) ;
        var global= Number(prime.toFixed(2)) + Number(capital) ;

        $("#prime-a-payer").val(prime.toFixed(2));
        $("#global").val(global);
    });
      $("#nouvelle").click(function(){
        $("#capital").val('');
        $("#global").val('');
          $("#result").val('');
         $("#prime-a-payer").val('');
       });
    });


jQuery(function($) {'use strict';

    // User define function
    function Scrolll() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;


    };

    $(window).scroll(function(event) {
        Scrolll();
    });

    $('li a').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 330}, 1500);
       var url = $(this).attr('href');
               window.history.pushState(document.title,document.title,url);
              var tit =url.replace('#','');
               document.title = tit;
        return false;
    });





         $(document).ready(function() {


        //Animated Number
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({value: start}).animate({value: stop}, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                        }
                    }
                });
            });
        };

        $('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });



/* SIMULATEUR SIM_AUTOMOBILE */

$('#calculer_sim_automobile').click(function() {
    var duree = $('#duree').val();
    if (duree <= 60 && duree >= 12) {
    var revenu = $('#revenu').val();
    var taux = $("input[name='taux']:checked").val();
    var taux_mens = taux/12/100;
    var montant = $('#montant_vehicule').val();
    var mnt_crd = montant*0.85;
    


var Financement = mens * (1 - (Math.pow((1 + (taux_mens * 1.19)), - duree))) / (taux_mens * 1.19);
var prec = (Financement * 100 / montant) ;
var taux_interet = (taux/100)*100;

if (prec <= 85)
           {    
                var mens = (revenu) * 0.3 ;
                $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2)+" DA"));
                $('#mensualite').text(formatMoney(mens.toFixed(2)));
                $('#taux_d_interet').text(taux_interet.toFixed(2)+" %");
                $('#duree_du_credit').text(duree);

           }
else{
               

               var mens = mnt_crd * ((taux_mens * 1.19) / (1 - Math.pow((1 + (taux_mens * 1.19)), - duree)));
               var prec = (mnt_crd * 100 / montant) ;
               $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2))+" DA");
               $('#mensualite').text(formatMoney(mens.toFixed(2)));
               $('#taux_d_interet').text(taux_interet.toFixed(2)+" %");
               $('#duree_du_credit').text(duree); 
           }

}

else {
        alert("La durée maximale du crédit est de 60 mois et la durée minimale est de 12 mois");
}

});

/*****************************/

/* SIMULATEUR credit_confort  nouveau*/
$('#calculer_sim_confort_new').click(function() {

    var duree = $('#duree').val();
    if (duree <= 36 && duree >= 12) {
    var revenu = $('#revenu').val();
    var apport_personnel = $('#apport_personnel').val();
    var taux = $("input[name='taux']:checked").val();
    var taux_mens = taux/12/100;
    
    var montant = $('#montant_bien').val();
    var montantCredit = montant - apport_personnel ;
    
    var mensualite = montantCredit * ((taux_mens * 1.19) / (1 - Math.pow((1 + (taux_mens * 1.19)), -duree)));
    var commission_gestion = ((montantCredit * 0.5) / 100) * 1.19;
    var frai_dossier = 2000 * 1.19;
    var interet = ((mensualite * duree) - montantCredit);
    var cout_total_credit = (interet + commission_gestion + frai_dossier);
    var taux_interet = (taux/100)*100;
    if(montantCredit  <= 150000)
       {
         if(revenu < 20000)
              {
                 
                alert("le revenu doit etre egal ou supérieur au SNMG lorsque le montant du crédit sollicité est inférieur ou égal à 150 000,00 DA");
              }
       }
    else 
       {
        if(montantCredit  >= 300000)
             {
                if(revenu < 40000)
                {
                   
                  alert("le revenu doit etre egal ou supérieur à deux fois (2) le SNMG, losque le montant du crédit sollicité est égal ou supérieur à 300 000,00 DA");
                } 
             }
        else
            {
               if(revenu < 30000)
              {
                 
                alert("le revenu doit etre egal ou supérieur à une fois et demi (1,5) le SNMG, losque le montant du crédit sollicité est supérieur à 150 000,00 DA");
              } 
            }
           
       }

    

    $('#montant_du_credit').text(formatMoney(montantCredit.toFixed(2)))+" DA";
    $('#mensualite').text(formatMoney(mensualite.toFixed(2)));
    $('#taux_d_interet').text(taux_interet.toFixed(2)+" %");
    $('#duree_du_credit').text(duree);

         
} else {
        alert("La durée maximale du crédit est de 36 mois");
}

});

/*****************************/

/* SIMULATEUR credit_confort */

$('#calculer_sim_confort').click(function() {
    var duree = $('#duree').val();
    if (duree <= 36 && duree >= 12) {
    var revenu = $('#revenu').val();
    var taux = $("input[name='taux']:checked").val();
    var taux_mens = taux/12/100;
    
    var montant = $('#montant_vehicule').val();
    var mnt_crd = montant*0.85;
    


var Financement = mens * (1 - (Math.pow((1 + (taux_mens * 1.19)), - duree))) / (taux_mens * 1.19);
var prec = (Financement * 100 / montant) ;
var taux_interet = (taux/100)*100;

if (prec <= 85)
           {    
                var mens = (revenu) * 0.3 ;
                $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2)))+" DA";
                $('#mensualite').text(formatMoney(mens.toFixed(2)))
                $('#taux_d_interet').text(taux_interet.toFixed(2)+" %");
                $('#duree_du_credit').text(duree);

           }
else{
               

               var mens = mnt_crd * ((taux_mens * 1.19) / (1 - Math.pow((1 + (taux_mens * 1.19)), - duree)));
               var prec = (mnt_crd * 100 / montant) ;
               $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2))+" DA");
               $('#mensualite').text(formatMoney(mens.toFixed(2)));
               $('#taux_d_interet').text(taux_interet.toFixed(2)+" %");
               $('#duree_du_credit').text(duree); 
           }

} else {
        alert("La durée maximale du crédit est de 36 mois");
}

});

/* SIMULATEUR credit_location  (Avec le Revenu)*/ 

$('#calculer_sim_location').click(function() {
    var duree = $('#duree').val();
    if (duree <= 24 && duree >= 1) {
    var revenu = $('#revenu').val();
    if(revenu < 36000)
          {
            alert(" le revenu doit etre supérieur ou égal à deux fois le SNMG");
          }
    else {
    var CapRemb = revenu * 30/100;
    var CapRembTotal =CapRemb * duree;
    var taux_interet = $("input[name='taux']:checked").val();
    var formule1 = taux_interet/12/100;
    var montant = $('#montant_location').val();
    var mnt_crd = montant*1;
    var mensualiteHT = mnt_crd * formule1 * (Math.pow((1 +formule1 ),duree) /(Math.pow((1 +formule1 ),duree) - 1));
    if(CapRembTotal < montant)
        { 
            alert("la capacité de remboursement est insuffisant");
        }
    else {
    if(montant <= 1500000)
          {    
               $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2))+" DA");
               $('#mensualite').text(formatMoney(mensualiteHT.toFixed(2)));
               $('#taux_d_interet').text(taux_interet +" %");
               $('#duree_du_credit').text(duree);
          }  
    else
         {
                alert("le plafond de financement ne peut dépasser les 1500000");
         }
    } 
     }
    }
    else {
               alert("La durée maximale du crédit est de 24 mois");
           }

});

/* SIMULATEUR credit_location (sans le Revenu)*/

$('#calculer_sim_location_sans_revenu').click(function() {
    var duree = $('#duree').val();
    if (duree <= 24 && duree >= 1) {
    
    var taux_interet = $("input[name='taux']:checked").val();
    var formule1 = taux_interet/12/100;
    var montant = $('#montant_location').val();
    var mnt_crd = montant*1;
    var mensualiteHT = mnt_crd * formule1 * (Math.pow((1 +formule1 ),duree) /(Math.pow((1 +formule1 ),duree) - 1));
    
    if(montant <= 1500000)
          {    
               $('#montant_du_credit').text(formatMoney(mnt_crd.toFixed(2))+" DA");
               $('#mensualite').text(formatMoney(mensualiteHT.toFixed(2)));
               $('#taux_d_interet').text(taux_interet +" %");
               $('#duree_du_credit').text(duree);
          }  
    else
         {
                alert("le plafond de financement ne peut dépasser les 1500000");
         }
    } 

    else {
               alert("La durée maximale du crédit est de 24 mois ");
           }

});
/*****************************/
/* SIMULATEUR CREDIT IMMOB */
$('#calculer_sim_immob').click(function() {
    var type_de_credit = $('#type_de_credit').val();
    var revenu = $('#revenu').val();
    var age = $("#age").val();
    var montant_bien = $("#montant_bien").val();
    var taux = 0;
    var ctr = 0;
/* calcul_tauxinteret */
    if (type_de_credit == "bonifie") {
        if ( revenu >= 18000 && revenu <= 18000 * 6)
               {
                   taux = 1 ;
                   console.log(taux);
               }
               else
               {
                   if ( revenu >= 18000*6 &&  revenu <= 18000*12)
                   {
                       taux = 3 ;
                       console.log(taux);
                   }
               } 
    }
    if (type_de_credit == "non_bonifie")
           {

            taux = $("input[name='taux']:checked").val();
            console.log(taux);
           }
    if (type_de_credit == "bonifie_lpp")
           {
               taux = 3 ;
               console.log(taux);
           }
/* end calcul_tauxinteret */
/* calcul_duree_credit*/
duree = (75 - age)*12;
     if (duree > 40 * 12){
        duree = 480;
     }   
/* end calcul_duree_credit */
/* calcul_mensualite */
if ((revenu) >= 18000 && (revenu) <= (45000))
{
    ctr = 0.3 * ((revenu));
}
if ((revenu) > 45000 && (revenu) <= (72000))
{
    ctr = 0.4 * ((revenu));
}
if ( (revenu) > 72000)
{
    ctr = 0.5 * ((revenu)) ;
}
var credit_accordee = (montant_bien) * 0.9 ;
var taux_int = (taux / 1200) ;
var mens1 = (1 + taux_int) ;
duree = -duree;
var montantcr = (ctr * (1 - Math.pow(mens1, duree)) / taux_int);

if (montantcr>credit_accordee)
           {
               montantcr = credit_accordee;
               ctr = (montantcr * taux_int) / (1 - Math.pow(mens1, duree));
           }
/* end calcul_mensualite */
/* immob_results */
$('#montant_du_credit').text(formatMoney(montantcr.toFixed(2))+" DA");
$('#mensualite').text(formatMoney(ctr.toFixed(2)));
$('#taux_d_interet').text((taux/100*100).toFixed(2)+" %");
$('#duree_du_credit').text((duree / 12) * -1); 
/* end immob_results */     
});          


/* Formatage des numéros */
function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
  
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };
/********************************/


    });

    //Initiat WOW JS
    new WOW().init();
    //smoothScroll
    smoothScroll.init();

   $("a#tooglemenu").click(function(){

        $("#menu-principale").toggleClass("overt");
    });
   $("a#iconmenu").click(function(){

    $("#mobileul").slideToggle();
    });
    $("#mobileul a").click(function(){

  $("#mobileul").hide();
    });


        $('#home').click(function() {


    location.reload();
    return false;
});
$(window).scroll(function(){
   /* $("#haut").text($(this).scrollTop());*/


if($(this).scrollTop() >=105 ){

$("#mobilefixed").addClass('fixed');

   }
else
{
$("#mobilefixed").removeClass('fixed');
}
   /* scroool */



if($(this).scrollTop() !=0){
    if($('#haut').css('display')=="none"){
    $('#haut').fadeIn('slow');}
}else{
$('#haut').fadeOut('slow');
}
});


    });


