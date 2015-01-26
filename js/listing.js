$(function() {
  function Property(bed, price, cats, dogs, location) {
    this.bed = bed;
    this.price = price;
    this.cats = cats;
    this.dogs = dogs;
    this.location = location;
  }

// var allListings = [];

//   property = new Property(2, 1000, true, true, Victoria);
//   allListings.push(property);

  Property.prototype.toHtml = function() {
    return "<div class='propertyBox'><img src='" + this.location + "'><li class='listings' data-price='" + this.price + " " + "'>" + this.bed + " " + this.price + " " + this.location + "</li></div>";
  }

  function Listings() {
    thisListings = this;
    this.list = [
      {"bed" : "studio", "price" : 800, "cats" : true, "dogs" : false, "location" : "Seattle"},
      {"bed" : "1 bed", "price" : 1000, "cats" :false, "dogs" : true, "location" : "Renton"}
    ];

    $.each(thisListings.list, function() {
      var addProperty = new Property(this.bed, this.price, this.cats, this.dogs, this.location);
      $("#properties").append(addProperty.toHtml());
    });

  }


// var location = document.getElementbyID("locations").value;
//("[attribute='value']"))

function Search() {
switch ($("#locationSelect").val()) {
  case "seattle":
    $(".property").each(function () {
      if(($(this).data("location")) != "seattle"){
        $(this).fadeOut(1000);
      }
    })
    break;
  case "renton":
    console.log("It worked for Renton");
    break;
  case "capitolHill":
    console.log("It worked for Capitol Hill")
    break;
  default:
    console.log("I'm the default behaviour");

}
}

$("#list").on("click", Search);



});

