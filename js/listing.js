$(function() {
function NewProperty(propName, bed, price, pets, location, imageName) {
    this.propName = propName;
    this.bed = bed;
    this.price = price;
    this.pets = pets;
    this.location = location;
    this.imageName = imageName;
  }

NewProperty.prototype.toHtml = function() {
  return '<div class="propertyBox" data-price="' + this.price + '" data-bed="' + this.bed + '" + data-pets="' + this.pets + '" + data-location="' + this.location + '"><img src="img/' + this.imageName + '" />'  + '<h1>' + this.propName + '</h1>' + '<ul><li>$ ' + this.price + '</li><li>' + this.bed + '</li>' + '<li>' + this.pets + '</li></ul><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>';
}

var addProperty = function(propName, bed, price, pets, location, imageName) {
    var property = new NewProperty(propName, bed, price, pets, location, imageName);
    $("#listings").append(property.toHtml());
  }

addProperty("Trendy Apartment",   2, 1100, "Yes", "Seattle",      "property1.jpg");
addProperty("Total Dive",         3, 1800, "No",  "Capitol-Hill", "property2.jpg");
addProperty("Charming Space",     2, 950,  "Yes", "Renton",       "property3.jpg");
addProperty("Vintage Home",       3, 1500, "No",  "Renton",       "property4.jpg");
addProperty("The Fremont Manor",  2, 1100, "Yes", "Fremont",      "property5.jpg");
addProperty("The Love Pad",       1, 750,  "Yes", "Capitol-Hill", "property6.jpg");

//~~~~~~~~~~~~ FILTERS START HERE!!!!!!!!!!!!!!!!!! ~~~~~~~~~~~~~~~~

/* this function is used for a basic filter search by the user. The user only searches using the city drop down list */
  function locationSearch() {
    $(".propertyBox").each(function() {
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
    $(".propertyBox").each(function() {
      if ($(this).data("pets") != "yes") {
        $(this).fadeOut(1000);
      }
    });
  }
  /*this function will be called in the locationSearch function. depending on the user's selection, a specific case will be run. */
  function bedSelector() {
    $(".propertyBox").each(function() {
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

    $(".propertyBox").each(function() {
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

