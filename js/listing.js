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
addProperty("Total Dive",         4, 1800, "No",  "Capitol Hill", "property2.jpg");
addProperty("Charming Space",     2, 950,  "Yes", "Renton",       "property3.jpg");
addProperty("Vintage Home",       3, 1500, "No",  "Renton",       "property4.jpg");
addProperty("The Fremont Manor",  2, 1100, "Yes", "Fremont",      "property5.jpg");
addProperty("The Love Pad",       1, 750,  "Yes", "Capitol Hill", "property6.jpg");


});

