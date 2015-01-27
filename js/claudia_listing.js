$(function() {

  // var seattle = function() {
  //   switch ($('.property').data('pets')) {
  //     case "true":
  //       $('.property').each
  //   }
  // }
  // is(":checked") && $("input").data("pets") == "true")
  
  function Search() {
  	switch ($("#locationSelect").val()) {
  		case "seattle":
  			$(".property").each(function() {
  				if (($(this).data("location") != "seattle")) {
            if ($("input:checkbox").is(":checked")) {
                // $(".property").data("pets").fadeIn(1000);
                $(".property").data("pets", "false").fadeOut(1000);
            } else {
              $(this).fadeOut(1000);
            }
          }
  			});
  		break;
  		case "renton":
  			$(".property").each(function() {
  				if ($(this).data("location") != "renton") {
  					$(this).fadeOut(1000);
  				}
  			});	
   		break
  		case "capitolHill":
  			$(".property").each(function() {
  				if ($(this).data("location") != "capitolHill") {
  					$(this).fadeOut(1000);
  				}
  			});	
  		break;
  		default:
  			alert("Nothing is Selected");
  	}
  }

  
  $("#list").on("click", Search);


});
