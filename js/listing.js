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
  return '<section class="float-left propertyBox caption " data-price="'+ this.price + '" data-bed="' + this.bed + '" data-pets="' + this.pets + '" data-location="' + this.location + '"><a href="img/' + this.imageName + '" title="' + this.description + '"><img src="img/' + this.imageName + '" width="100" height="100"/> </a><section class="description"><h2>' + this.propName + '</h2><ul><li>$ ' + this.price + '</li><li>Beds: ' + this.bed + '</li><li>Pets Allowed: ' + this.pets + '</li></ul></section></section>'
}

var addProperty = function(propName, bed, price, pets, location, imageName) {
    var property = new NewProperty(propName, bed, price, pets, location, imageName);
    $("#listings").append(property.toHtml());
  }

addProperty("Trendy Apartment",     0, 1100, "Yes", "Seattle",      "property1.jpg",  "This is a dope ass apartment");
addProperty("Total Dive",           3, 1800, "No",  "Capitol-Hill", "property2.jpg",  "This place is horrifically dirty but if you're a tough sob it'll do.");
addProperty("Charming Space",       0, 950,  "Yes", "Renton",       "property3.jpg",  "Cute little apartment in the heart of of Renton.");
addProperty("Modern Lodge",         3, 1800, "No",  "Renton",       "property4.jpg",  "It's old and creeky but it looks cool!");
addProperty("The Fremont Manor",    3, 2100, "Yes", "Fremont",      "property5.jpg",  "Group living at its best. And optional orgies every Tuesday night.");
addProperty("The Love Pad",         1, 750,  "Yes", "Capitol-Hill", "property6.jpg",  "Only the sexy need apply");
addProperty("Castle",               1, 850,  "No",  "Seattle",      "property7.jpg",  "It's a castle, 'nuff said. Rent it and be a baller who live in a castle.");
addProperty("Capitol-Hill Home",    3, 5000, "No",  "Capitol-Hill", "property8.jpg",  "Great house in a friendly neighbourhood.");
addProperty("Room from Saw",        1, 300,  "No",  "Renton",       "property9.jpg",  "This place is comparable to a nightmare, you won't be able to sleep much.");
addProperty("Pope's Palace",        1, 1800, "No",  "Seattle",      "property10.jpg", "Availability is extremely limited but it's a wonderful space if you are accepted.");
addProperty("Survivor Hut",         0, 200,  "No",  "Fremont",      "property11.jpg", "Test your wit and deception by living underneath this leaf hut.");
addProperty("Homey Home",           3, 1750, "No",  "Capitol-Hill", "property12.jpg", "Spacious and loving home perfect for a close group of friends.");
addProperty("Haunted House",        2, 1100, "No",  "capitolHill",  "property13.jpg", "Frequently frequented by ghoules and ghosts but other than that it is a wonderful house.");
addProperty("Trendy Space",         1, 1300, "No",  "Renton",       "property14.jpg", "This place is perfect for hipsters.");
addProperty("The Shire",            1, 900,  "No",  "Seattle",      "property15.jpg", "Stay warm in the winter and cool in the summer while living under this cozy grassy knoll. ");
addProperty("Cozy Igloo",           2, 750,  "No",  "Seattle",      "property16.jpg", "This place is great eh!");
addProperty("Master suite",         0, 1250, "No",  "Fremont",      "property17.jpg", "Upscale and very fancy. Only rich people who walk their cats will be accepted.");
addProperty("Cool Apartment",       2, 1200, "No",  "Seattle",      "property18.jpg", "It's pretty cool so you should apply quickly.");
addProperty("Renton Home",          3, 1900, "No",  "Renton",       "property19.jpg", "Big home with lots of bathrooms and a hot tub time machine.");
addProperty("Biggest Loser House",  3, 2100, "No",  "Fremont",      "property20.jpg", "Get temporarily fit in this intense living arrangement. Only +300 pounders need apply.");

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
      if ($(this).data("pets") != "Yes") {
        $(this).fadeOut(1000);
      }
    });
  }
  /*this function will be called in the locationSearch function. depending on the user's selection, a specific case will be run. */
  function bedSelector() {
    $(".propertyBox").each(function() {
    console.log("bed function ran");
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

