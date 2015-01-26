$(function() {
  function Property(bed, price, cats, dogs, location) {
    this.bed = bed;
    this.price = price;
    this.cats = cats;
    this.dogs = dogs;
    this.location = location;
  }

  Property.prototype.toHtml = function() {
    return "<li class='listings' data-price='" + this.price + "'>" + this.bed + this.price + this.location + "</li>";
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
  $("#list").on("click", Listings);

});
