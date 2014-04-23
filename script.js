$(document).ready(function(){
  $("input[type=button]").click(function(){
    //alert(this.value);
    if(this.value == "Clear")
      {
      	$(".form-control").last().val("");
      	$(".form-control").first().val("");
      } 
    else if(this.value == "=")
      {
        try {
          total = eval($(".form-control").first().val());
          $(".form-control").last().val(total);
        } catch ( e ) {
          alert("Your input values (" + $(".form-control").first().val()+") is incorrect");
        }
      } 
    else
      {
      	$(".form-control").first().val($(".form-control").first().val()+this.value);
      } 
  });  
});