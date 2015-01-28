$(function() {
  
  /* this function is used for a basic filter search by the user. The user only searches using the city drop down list */
  function locationSearch() {
    switch ($("#locationSelect").val()) {
      case "seattle":
        $(".propertyBox").each(function() {
          if (($(this).data("location") != "seattle")) {
              $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
          if ($("#bed option:selected")) {
            //call this function if bed selector is selected
            bedSelector();
          }
          if (!($("input:text[value='']"))) {
            //call this function if input text has values
            priceFilter();
          }
        });
      break;
      case "renton":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "renton") {
            $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
          if ($("#bed option:selected")) {
            //call this function if bed selector is selected
            bedSelector();
          }
          if (!($("input:text[value='']"))) {
            //call this function if input text has values
            priceFilter();
          }
        }); 
      break;
      case "capitolHill":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "capitolHill") {
            $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
          if (!($("input:text[value='']"))) {
            //call this function if input text has values
            priceFilter();
          }
        }); 
      break;
      case "fremont":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "fremont") {
            $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
          if (!($("input:text[value='']"))) {
            //call this function if input text has values
            priceFilter();
          }
        }); 
      break;
      default:
        alert("Please select a City.");
    }
  }
  /*this function will be called if user selects checkbox that states 
  he or she owns a pet and would like to filter the apartment listings based off pet availability*/
  function petCheckbox() {
    $(".propertyBox").each(function() {
      if ($(this).data("pets") != "yes") {
        $(this).fadeOut(1000);
      }
    });
  }
  /*this function will be called in the locationSearch function. depending on the user's selection, a specific case will be run. */
  function bedSelector() {
    switch ($("#bed").val()) {
      case "studio":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != "studio") {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "1bed":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != "1bed") {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "2beds":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != "2beds") {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "3beds":
      $(".propertyBox").each(function() {
          if ($(this).data("bed") != "3beds") {
            $(this).fadeOut(1000);
          }
        });
      break;
    }
  }

  /*this function is to filter listings based off of the user's minimum price and maximum price that are placed in the input text element */
  function priceFilter() {
    //get the value for each input text: Min Price & Max Price
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;

    $(".propertyBox").each(function() {
      if ($(this).data("price") <= minPrice) {
        if ($(this).data("price") < minPrice) {
          $(this).fadeOut(1000);
        }
      } else if (($(this).data("price") >= minPrice) && ($(this).data("price") < maxPrice)) {
        if ($(this).data("price") < minPrice) {
          $(this).fadeOut(1000);
        }
        if ($(this).data("price") > maxPrice) {
          $(this).fadeOut(1000);
        }
      } else if ($(this).data("price") > maxPrice)  {
          $(this).fadeOut(1000);
      } else {
        console.log("still show listings");
      }
    });
  }
  
  $("#list").on("click", locationSearch);

});
