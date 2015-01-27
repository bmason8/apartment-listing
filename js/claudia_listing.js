$(function() {

  function Property(bed, price, cats, dogs, location) {
    this.bed = bed;
    this.price = price;
    this.cats = cats;
    this.dogs = dogs;
    this.location = location;
  }

  // var $checked = $("input:checked");
  var $checked = $("input").val();

  function Search() {
  	switch ($("#locationSelect").val()) {
  		case "seattle":
  			$(".property").each(function() {
  				if(($(this).data("location") !== "seattle") && ($(this).val() !== $checked)) {
   					$(this).fadeOut(1000);		
  				}
  			});
  		break;
  		case "renton":
  			$(".property").each(function() {
  				if ($(this).data("location") != "renton") {
  					$(this).fadeOut(1000);
  				}
  			});	
   		break
  		case "capitolHill":
  			$(".property").each(function() {
  				if ($(this).data("location") != "capitolHill") {
  					$(this).fadeOut(1000);
  				}
  			});	
  		break;
  		default:
  			alert("Nothing is Selected");
  	}
  }

  $("#list").on("click", Search);

});
