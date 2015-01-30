$(function() {
  /* this function is used for a basic filter search by the user. The user only searches using the city drop down list */
  function locationSearch() {
    $(".property").each(function() {
      if (($(this).data("location")) != ($("#locationSelect").val())) {
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
      if (($("#min-price").val() != "") || ($("#max-price").val() != "")) {
        //call this function if input text has values
        priceFilter();
        // console.log("i'm working");
      }
    });
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
  /*this function will be called in the locationSearch function. depending on the user's selection, a specific case will be run. */
  function bedSelector() {
    $(".property").each(function() {
      if ($(this).data("bed") != ($("#bed").val())) {
        $(this).fadeOut(1000);
      }
    });
  }

/*this function is to filter listings based off of the user's minimum price and maximum price that are placed in the input text element */
  function priceFilter() {
    //get the value for each input text: Min Price & Max Price
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;

    $(".property").each(function() {
      if ($(this).data("price") < minPrice && minPrice != "") {
        $(this).fadeOut(1000);
      }
      if ($(this).data("price") > maxPrice && maxPrice != "") {
        $(this).fadeOut(1000);
      }
    });
  }
  
  $("#list").on("click", locationSearch);

});
