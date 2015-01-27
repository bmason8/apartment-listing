$(function() {
  
  /* this function is used for a basic filter search by the user. The user only searches using the city drop down list */
  function locationSearch() {
  	switch ($("#locationSelect").val()) {
  		case "seattle":
  			$(".property").each(function() {
  				if (($(this).data("location") != "seattle")) {
              $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
          if ($("#bed option:selected")) {
            bedSelector();
          }
  			});
  		break;
  		case "renton":
  			$(".property").each(function() {
  				if ($(this).data("location") != "renton") {
  					$(this).fadeOut(1000);
  				}
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
  			});	
   		break;
  		case "capitolHill":
  			$(".property").each(function() {
  				if ($(this).data("location") != "capitolHill") {
  					$(this).fadeOut(1000);
  				}
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
  			});	
  		break;
      case "fremont":
        $(".property").each(function() {
          if ($(this).data("location") != "fremont") {
            $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
        }); 
      break;
  		default:
  			alert("Nothing is Selected!!");
  	}
  }
  /*this function will be called if user selects checkbox that states 
  he or she owns a pet and would like to filter the apartment listings based off pet availability*/
  function petCheckbox() {
    $(".property").each(function() {
      if ($(this).data("pets") != "yes") {
        $(this).fadeOut(1000);
      }
    });
  }

  function bedSelector() {
    switch ($("#bed").val()) {
      case "studio":
        $(".property").each(function() {
          if ($(this).data("bed") != "studio") {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "1bed":

      break;
      case "2beds":

      break;
      case "3beds":

      break;
    }
  }
  
  $("#list").on("click", locationSearch);


});
