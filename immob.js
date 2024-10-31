


   $(document).ready(function() {





    $("img.fermer").click(function(){



    $("#recherche").fadeOut(400);



});



    $("a.chercher").click(function(){



    $("#recherche").fadeIn(400);



});



 $menuLeft = $('.pushmenu-left');



    $nav_list = $('#nav_list');







    $nav_list.click(function() {

	   

      $(this).toggleClass('active');



      $('.pushmenu-push').toggleClass('pushmenu-push-toright');



      $menuLeft.toggleClass('pushmenu-open');



    });



});







	$(window).scroll(function(){

         if($(window).scrollTop()<=420) {

              	$("#menufixed").fadeOut(400);





            }else {

              	$("#menufixed").fadeIn(400);

            }

		if($(window).scrollTop()>=125) {

			$("#nav").css({

				'position':'fixed',

				top : '0',

				left : '0',

				'z-index':'1000',



				width :'100%'

			})

		} else {

			$("#nav").css({

				'position':'static'



			})

		}

	});


  $(document).ready(function() {
     $("#envoi").click(function(){
    calcul();
    return false;
});
});
var z = 0;
var age=0;
	var max_age = 70;
	var period = 0;
	var revenu = 0;
	var somme = 0;
	var mont = 0;
	var typeco = 0;
	var snmg = 18000;
	var tcr = 0;
	var taux = 0;
	var mon = 0;
	var cout=0;
	var cout09=0;
	var isEpr = false;
	var duree = 0;

function afficheZone(){
	z = document.getElementById('type_crd').options[document.getElementById('type_crd').selectedIndex].value;
	if (z == 1){
		document.getElementById('epr').style.display = "block";
	}else{
		document.getElementById('epr').style.display = "none";
	}
}
function maskError(ch){
	document.getElementById(ch).style.display = "none";
	if (ch == "type_error")
		document.getElementById("type_rev_error").style.display = "none";
}
function razError(){
	document.getElementById('age_error').style.display = "none";
	document.getElementById('cout_error').style.display = "none";
	document.getElementById('revenu_error').style.display = "none";
	document.getElementById('montant_error').style.display = "none";
	document.getElementById('type_rev_error').style.display = "none";
}
function calcul(){

	razError();
	// Controle et validation des entree utilisteurs
	// Controle de l'age client.
	age = document.forms["simul"].elements["age"].value;
	if (isNaN(age) || age == "" || age < 18 || age >=70){
		document.getElementById('age').focus();
		document.getElementById('age').select();
		document.getElementById('age_error').innerHTML ="age incorrect";
		document.getElementById('age_error').style.display = "";
		return false;
	}else{
		period = max_age - Number(age);
		i = document.getElementById('type_crd').selectedIndex;
		if (i == 5 || i == 6){
			if (period >30){
				period = 30;
			}
		}else{
			if (period >40){
				period = 40;
			}
		}
		duree = period;
		period = period * 12;
		if (i==2 || i==4 || i==7 || i== 9 || i== 11 || i==13){
			if (duree > 2){
				period = Number(period) - 24;
			}
		}
	}
	// en cas du differe pour les credits ()

	//Controle des revenus
	revenu = document.forms["simul"].elements["revenu"].value;
	if (isNaN(revenu) || revenu == "" || revenu <= 0){
		document.getElementById('revenu').focus();
		document.getElementById('revenu').select();
		document.getElementById('age_error').innerHTML ="revenu incorrect";
		document.getElementById('revenu_error').style.display = "";
		return false;
	}else{
		if (revenu < snmg){
			document.getElementById('revenu_error').innerHTML ="revenu insuffisant";
			document.getElementById('revenu_error').style.display = "";
			document.getElementById('revenu').focus();
			document.getElementById('revenu').select();
			return false;
		}
	}
	// -- Controle Autres revenu

	if (document.getElementById('existe_autre').checked == true){
		mont = document.forms["simul"].elements["autre_revenu"].value;
		if (isNaN(mont) || mont == "" || mont <= 0){
			document.getElementById('autre_revenu').focus();
			document.getElementById('autre_revenu').select();
			document.getElementById('montant_error').innerHTML ="montant incorrect";
			document.getElementById('montant_error').style.display = "";
			return false;
		}
	}

	// ----
	// -------------
	// Controle du cout de logement
	cout = document.forms["simul"].elements["cout"].value;
	if (isNaN(cout) || cout == "" || cout <= 0){
		document.getElementById('cout_error').innerHTML ="Cout de logement est incorrect";
		document.getElementById('cout_error').style.display = "";
		document.getElementById('cout').focus();
		document.getElementById('cout').select();
		return false;
	}
	//
	cout09 = parseFloat(0.9 * cout);
	taux = document.getElementById('type_crd').options[document.getElementById('type_crd').selectedIndex].value;
	// ggggggggggggg
	// revenu c'est la somme avec revenu co-emprunt ou caution.
	typeco = 0;
	somme = revenu;
	if (document.getElementById('existe_autre').checked == true){
			somme = Number(revenu) + Number(mont);
			if (document.simul.autre_rd[1].checked)
				typeco = 1;

		//alert("type : " + typeco + " /  somme rev : "+ somme);
	}

	if (somme >= parseFloat(snmg*12)){
		if (taux == 2){
			document.getElementById('type_rev_error').innerHTML ="le revenu ne permet pas d'avoir un crédit bonifié.\nVeuillez choisir un autre type.";
			document.getElementById('type_rev_error').style.display = "";
			return false;
		}
	}

	if (somme < parseFloat(snmg*2.5)){
		tcr = parseFloat(somme*0.3);
	}else
		if (somme >= parseFloat(snmg*2.5) && somme < parseFloat(snmg*4)){
			tcr = parseFloat(somme*0.4);
		}else
		if (somme >= parseFloat(snmg*4)){
			tcr = parseFloat(somme*0.5);
		}

		// definir le taux de credit

	switch(parseInt(taux)){
		case 0 :
			document.getElementById('type_error').innerHTML = "Veuillez choisir un type.";
			document.getElementById('type_error').style.display = "";
			document.getElementById('type_crd').focus();
			return false;
			break;
		case 1 :
		// si cerdit non bonifie alors taux = {selon cas du client : epragnant ou non}

			if(document.simul.epargnant[0].checked)
				taux = document.simul.epargnant[0].value;
			else
				if(document.simul.epargnant[1].checked)
					taux = document.simul.epargnant[1].value;
			//tcr = parseFloat(somme*0.5);
			break;
		case 2 :
			// Si credit est bonif ==> taux =1 ou 3% suivant le salaire.
			taux = 1;
			if (somme > parseFloat(snmg*6) && somme < parseFloat(snmg*12))
				taux = 3;
			break;
		default :
			break;
	}
	// cobntrole de la bar du cout de logement
	if (taux==1 && cout > 12000000){
			document.getElementById('cout_error').innerHTML ="Coût du logement ne doit pas dépasser 12.000.000 DA pour les prêts bonifiés. Veuillez choisir un autre type du crédit ";
			document.getElementById('cout_error').style.display = "";
			document.getElementById('cout').focus();
			document.getElementById('cout').select();
			return false;
		}
	//************************************
	// gggggggggggg
	var tbase = taux;
	//alert("taux de base : " + taux);
	taux = parseFloat(taux/1200);
	// M * [1- (1 + i) ^ (-n)] / i
	//mon = parseFloat(1 - Math.pow(pasreFloat(1+taux),-periode)) / taux;
	period = -period;
	var t1 = parseFloat(1 + taux);
	if ((typeco == 1) && (tcr > 0.6 * Number(document.forms["simul"].elements["revenu"].value)))
		tcr = 0.6 * Number(document.forms["simul"].elements["revenu"].value);

	mon = parseFloat(tcr * parseFloat(1 - Math.pow(t1,period)) / taux);
	//mon = Math.round(mon*100)/100;
	mon = mon.toFixed(2);
// si le montatnt calculé est sup que 0.9 * cout du bien alors recalcule de la monsualité.
		if (mon > cout09){
			// recalcul de la monsualité
			mon = cout09;
			// C* i/ [1- (1 + i) ^ (-n)]
			tcr = parseFloat(mon *taux) / parseFloat(1 - Math.pow(t1,period))
			//mon * taux / (1 - Math.pow(t1,period)));

		}
	tcr = tcr.toFixed(2);
	document.getElementById('mon_res').innerHTML = mon + " DA";
	document.getElementById('duree_res').innerHTML = duree + " ans";
	document.getElementById('taux_res').innerHTML = tbase + " %";
	document.getElementById('mens_res').innerHTML = tcr + " DA";

	return false;

//	alert("MON : " + mon + "/ t1 : " + t1 + "/ periode : " + period + " / " + Math.pow(t1,periode));
	// M* [1- (1 + i) ^ (-n)] / i
}
function clearData(){
	document.getElementById('mon_res').innerHTML = "";
	document.getElementById('duree_res').innerHTML = "";
	document.getElementById('taux_res').innerHTML = "";
	document.getElementById('mens_res').innerHTML = "";
}

function showOthers(){
	if (document.getElementById('existe_autre').checked == true){
		document.getElementById('div_autres').style.display = "table-row";
		document.getElementById('autre_revenu').value = "";
		//document.getElementById('div_autres').style.visibility="visible";
	}else{
		document.getElementById('div_autres').style.display = "none";
		//document.getElementById('div_autres').style.visibility="hidden";
	}
	return false;
}