$(document).ready(function() {
    var doglife= 1000;
    var catlife= 1000;
    var attackpower;
    var newHeight=300;
    var progressDogLife;
    $("#dog").click(function() {
      if(doglife>0){
        $(".attack").removeClass("smallhit");
        $(".attack").removeClass("mediumhit");
        $(".attack").removeClass("bighit");
        attackpower= Math.floor(Math.random()*500);
        catlife -= attackpower;
        if (attackpower < 200){
          $(".attack").addClass("smallhit");
          newHeight-=(attackpower/8);
          $("#catImg").height(newHeight+"px");
        }
        if (attackpower >= 300){
          $(".attack").addClass("mediumhit");
          newHeight-=(attackpower/8);
          $("#catImg").height(newHeight+"px");
        }
        if (attackpower >= 400){
          $(".attack").addClass("bighit");
          newHeight-=(attackpower/8);
          $("#catImg").height(newHeight+"px");
        }
        if (catlife <= 0){
          $(".attack").addClass("catdead");
          $(".attack").html("DOG IS WINNER!");
        }
        else{
          $(".attack").html("BARK!" + "(" + catlife + ")");
        }
        $(".catLife").css('width', (catlife/10)+'%').attr('aria-valuenow', (catlife/10));
      }
    });
    $("#cat").click(function() {
      if(catlife>0){
        $(".attack").removeClass("smallhit");
        $(".attack").removeClass("mediumhit");
        $(".attack").removeClass("bighit");
        attackpower= Math.floor(Math.random()*500);
        doglife -= attackpower;
        if (attackpower < 200){
          $(".attack").addClass("smallhit")
          newHeight-=(attackpower/8);
          $("#dogImg").height(newHeight+"px");
        }
        if (attackpower >= 200){
          $(".attack").addClass("mediumhit")
          newHeight-=(attackpower/8);
          $("#dogImg").height(newHeight+"px");
        }
        if (attackpower >= 300){
          $(".attack").addClass("bighit")
          newHeight-=(attackpower/8);
          $("#dogImg").height(newHeight+"px");
        }
        if (doglife <= 0){
            $(".attack").addClass("dogdead");
            $(".attack").html("CAT IS WINNER");
        }
        else {
          $(".attack").html("MEOW!" + "(" + doglife + ")");
        }
        $(".dogLife").css('width', (doglife/10)+'%').attr('aria-valuenow', (doglife/10));
      }
    });
});
