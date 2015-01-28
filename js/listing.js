$(function() {
function NewProperty(propName, bed, price, pets, location, imageName) {
    this.propName = propName;
    this.bed = bed;
    this.price = price;
    this.pets = pets;
    this.location = location;
    this.imageName = imageName;
    this.description = description;
  }

NewProperty.prototype.toHtml = function() {
  return '<li><section class="propertyBox caption" data-price="' + this.price + '" data-bed="' + this.bed + '" + data-pets="' + this.pets + '" + data-location="' + this.location + '"><a title="' + this.description + '" href="img/' + this.imageName +'"/><img src="img/' + this.imageName + '" width="100" height="100"/></a><section class="description"><h2>' + this.propName + '</h2>' + '<ul><li>$ ' + this.price + '</li><li>' + this.bed + '</li>' + '<li>' + this.pets + '</li></ul></section></section></li>';
}

var addProperty = function(propName, bed, price, pets, location, imageName) {
    var property = new NewProperty(propName, bed, price, pets, location, imageName);
    $("#listings").append(property.toHtml());
  }

addProperty("Trendy Apartment",   2, 1100, "Yes", "Seattle",      "property1.jpg", "This is a dope ass apartment");
addProperty("Total Dive",         3, 1800, "No",  "Capitol-Hill", "property2.jpg");
addProperty("Charming Space",     2, 950,  "Yes", "Renton",       "property3.jpg");
addProperty("Vintage Home",       3, 1500, "No",  "Renton",       "property4.jpg");
addProperty("The Fremont Manor",  2, 1100, "Yes", "Fremont",      "property5.jpg");
addProperty("The Love Pad",       1, 750,  "Yes", "Capitol-Hill", "property6.jpg");

//~~~~~~~~~~~~ FILTERS START HERE!!!!!!!!!!!!!!!!!! ~~~~~~~~~~~~~~~~

/* this function is used for a basic filter search by the user. The user only searches using the city drop down list */
  function locationSearch() {
    switch ($("#locationSelect").val()) {
      case "seattle":
        $(".propertyBox").each(function() {
          if (($(this).data("location") != "Seattle")) {
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
        });
      break;
      case "renton":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "Renton") {
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
        });
      break;
      case "capitolHill":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "Capitol-Hill") {
            $(this).fadeOut(1000);
          }
          if ($("input:checkbox").is(":checked")) {
            //call this function only if checkbox is selected
            petCheckbox();
          }
        });
      break;
      case "fremont":
        $(".propertyBox").each(function() {
          if ($(this).data("location") != "Fremont") {
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
    $(".propertyBox").each(function() {
      if ($(this).data("pets") != "Yes") {
        $(this).fadeOut(1000);
      }
    });
  }
  /*this function will be called in the locationSearch function. depending on the user's selection, a specific case will be run. */
  function bedSelector() {
    switch ($("#bed").val()) {
      case "studio":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != 0) {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "1bed":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != 1) {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "2beds":
        $(".propertyBox").each(function() {
          if ($(this).data("bed") != 2) {
            $(this).fadeOut(1000);
          }
        });
      break;
      case "3beds":
      $(".propertyBox").each(function() {
          if ($(this).data("bed") != 3) {
            $(this).fadeOut(1000);
          }
        });
      break;
    }
  }

  function priceFilter() {
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;

    $(".property").each(function() {
      if ($(this).data("price") < minPrice) {

      } else if (($(this).data("price") >= minPrice) && ($(this).data("price") < maxPrice)) {

      } else if ($(this).data("price") >= maxPrice) {

      } else {
        $(this).show();
      }
    });
  }

  $("#list").on("click", locationSearch);


});

