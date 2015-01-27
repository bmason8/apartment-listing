$(function() {

  function Property(name, bed, price, cats, dogs, location) {
    this.name = name;
    this.bed = bed;
    this.price = price;
    this.cats = cats;
    this.dogs = dogs;
    this.location = location;
  }

  Property.prototype.toHtml = function() {
    return "<li class='property' data-location='" + this.location + "' data-price='" + this.price + "'>" + "I work " + this.name + " " + this.bed + "</li>";
  }

  function Seattle() {
    thisSeattle = this;
    this.list = [
      {"name" : "The Manor", "bed" : "studio", "price" : 900, "cats" : "no", "dogs" : "no", "location" : "Seattle"},
      {"name" : "The Manor", "bed" : "1 bed", "price" : 1100, "cats" : "yes", "dogs" : "no", "location" : "Seattle"}
    ];

    $.each(thisSeattle.list, function() {
      var addProperty = new Property(this.name, this.bed, this.price, this.cats, this.dogs, this.location);
      $("#listings").append(addProperty.toHtml);
    });
  }

  function Renton() {
    thisRenton = this;
    this.list = [
      {"name" : "The Manor", "bed" : "studio", "price" : 900, "cats" : "no", "dogs" : "no", "location" : "renton"},
      {"name" : "The Manor", "bed" : "1 bed", "price" : 1100, "cats" : "yes", "dogs" : "no", "location" : "renton"}
    ];

    $.each(thisRenton.list, function() {
      var addProperty = new Property(this.name, this.bed, this.price, this.cats, this.dogs, this.location);
      $("#listings").append(addProperty.toHtml);
    });
  }
  // function Search() {
  // 	switch ($("#locationSelect").val()) {
  // 		case "seattle":
  // 			$(".property").each(function() {
  // 				if($(this).data("location") !== "seattle") {
  //  					$(this).fadeOut(1000);		
  // 				}
  // 			});
  // 		break;
  // 		case "renton":
  // 			$(".property").each(function() {
  // 				if ($(this).data("location") != "renton") {
  // 					$(this).fadeOut(1000);
  // 				}
  // 			});	
  //  		break
  // 		case "capitolHill":
  // 			$(".property").each(function() {
  // 				if ($(this).data("location") != "capitolHill") {
  // 					$(this).fadeOut(1000);
  // 				}
  // 			});	
  // 		break;
  // 		default:
  // 			alert("Nothing is Selected");
  // 	}
  // }

  property = new Property();
  $("#list").on("click", function() {
    // alert("I work")
    if ($('#locationSelect').val() == "Seattle") {
      Seattle();
    }  
  });

});
