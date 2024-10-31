
var items = document.querySelector("wow-bmp ul");
for (i = 0; i < items.length; i++) {
	alert(items[i].id);

}



let floating_menu = document.querySelector(".floating-menu.float-menu-1");



window.onscroll = function()

{

    if(window.scrollY >= 250){

        floating_menu.style.display = 'block';

    }else{

        floating_menu.style.display = 'none';

    }

}



let agences = document.querySelector(".wpsm_counterbox .wpsm_count-icon i.fa-home").parentElement.nextElementSibling;

agences.style.color = '#DF007C';



let collaborateurs = document.querySelector(".wpsm_counterbox .wpsm_count-icon i.fa-users").parentElement.nextElementSibling;

collaborateurs.style.color = '#660066';



let gap = document.querySelector(".wpsm_counterbox .wpsm_count-icon i.fa-database").parentElement.nextElementSibling;

gap.style.color = '#1CB9EB';



let dap = document.querySelector(".wpsm_counterbox .wpsm_count-icon i.fa-university").parentElement.nextElementSibling;

dap.style.color = '#F59401';






