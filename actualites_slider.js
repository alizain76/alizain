var carousel = $(".actualites_slider .main_carousel"),
    items = $(".actualites_slider .main_carousel .carousel_item"),
    currdeg  = 0;

$(".actualites_slider .next").on("click", { d: "n" }, rotate);
$(".actualites_slider .prev").on("click", { d: "p" }, rotate);


function rotate(e){
	  if(e.data.d=="n"){
	    currdeg = currdeg - 60;
	  }
	  if(e.data.d=="p"){
	    currdeg = currdeg + 60;
	  }
	  carousel.css({
	    "-webkit-transform": "rotateY("+currdeg+"deg)",
	    "-moz-transform": "rotateY("+currdeg+"deg)",
	    "-o-transform": "rotateY("+currdeg+"deg)",
	    "transform": "rotateY("+currdeg+"deg)"
	  });
	    items.css({
	    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
	    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
	    "-o-transform": "rotateY("+(-currdeg)+"deg)",
	    "transform": "rotateY("+(-currdeg)+"deg)"
	  });
}

$( document ).ready(function() {
    $('div.wow-bmp-pos-r:last ul li').each(function() {
	    var text_label = $(this).children("em").text();

		var label= $( document.createElement('span') );
		label.text(text_label);

		 $(this).children("a").append(label);
	    console.log(text_label);
	   
	});
});

/* arab */
$( document ).ready(function() {
    $('div.wow-bmp-pos-l:last ul li').each(function() {
	    var text_label = $(this).children("em").text();

		var label= $( document.createElement('span') );
		label.text(text_label);

		 $(this).children("a").append(label);
	    console.log(text_label);
	   
	});
});

 



/* filter page d'acceuil */
$(document).ready(function() {
    $('.frm-fluent-form').submit(function() { 
        $.ajax({
            type: 'POST',
            url:  $(this).attr('action'),
            data: $(this).serialize(),
          
          
		    complete: function(xhr, textStatus) {
		    	// verifier si le sesultas de filttrage existe 
		    	if ($(".ff-message-success").length) {
		    		


		    		$('.vous_etes_column').hide();
					
					$('.elementor-5678 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: none !important;');
					$('.elementor-6403 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: none !important;');
					$('.elementor-6444 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: none !important;');
					$('.elementor-6478 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: none !important;');
		    	

					$("#vous_etes_section_wrapper").css("padding", "40px 0px 60px 0px");

		    	
					$('.elementor-5678 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'width: 100% !important;');
					$('.elementor-6403 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'width: 100% !important;');
					$('.elementor-6444 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'width: 100% !important;');
			    	
			    	$(".ff-message-success").fadeTo(100, 1);
			    }
			    else {

			    	if (window.matchMedia('(min-width: 768px)').matches){
			    		$("#vous_etes_section_wrapper").css("padding", "140px 0px 140px 0px");
			    	}
					if (window.matchMedia('(max-width: 767px)').matches){
						$("#vous_etes_section_wrapper").css("padding", "100px 0px 100px 0px");
					}

			        $(".vous_etes_column").css("display", "flex");

			      
			    }

		    } 
           
        })
       
    });



    
});



function ResetFilterProducts(){


	 if ($(".ff-message-success").length) {

	 	if (window.matchMedia('(min-width: 768px)').matches)
		{	$('.elementor-5678 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 750px !important;');
		    $('.elementor-6403 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 750px !important;');
			$('.elementor-6444 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 750px !important;');
			$('.elementor-6478 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 750px !important;');

		}
	 	
	 	if (window.matchMedia('(max-width: 767px)').matches)
		{   $('.elementor-5678 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 300px !important;');
		    $('.elementor-6403 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 300px !important;');
			$('.elementor-6444 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 300px !important;');
			$('.elementor-6478 .elementor-element.elementor-element-b6e520e > .elementor-container').attr('style', 'max-width: 300px !important;');

		}


		$('.elementor-5678 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'calc( 100% - 140px) !important');
		$('.elementor-6444 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'calc( 100% - 140px) !important');
		$('.elementor-6403 .elementor-element.elementor-element-ea7df74.elementor-column').attr('style', 'calc( 100% - 140px) !important');

        $(".ff-message-success").remove();
		
     	if (window.matchMedia('(min-width: 768px)').matches){
    		$("#vous_etes_section_wrapper").css("padding", "140px 0px 140px 0px");
    	}
		if (window.matchMedia('(max-width: 767px)').matches){
			$("#vous_etes_section_wrapper").css("padding", "100px 0px 100px 0px");
		}


        $(".vous_etes_column").fadeIn(800);
        $(".fluentform .frm-fluent-form").removeClass("ff_force_hide");
       
        $(".fluentform .frm-fluent-form").fadeIn(800);

      
      
    }

}


/* menu overte in mouseover */

// $(".elementor-184 .elementor-element.elementor-element-98f4467 div.hfe-nav-menu-icon").mouseover(function(){
//   $(".hfe-nav-menu__toggle.elementor-clickable.hfe-flyout-trigger").addClass('hfe-active-menu');
//   $(".elementor-184 .elementor-element.elementor-element-98f4467 .hfe-flyout-wrapper .hfe-side").css("left", "0px");
//   $(".hfe-nav-menu__toggle.elementor-clickable.hfe-flyout-trigger").addClass('hfe-flyout-show');
 
//   $(".hfe-flyout-overlay").show();
// });

new WOW().init();