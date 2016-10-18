$(document).ready(function() {
    var doglife= 1000;
    var catlife= 1000;
    var attackpower;
    $("#dog").click(function() {
      $(".attack").removeClass("smallhit");
      $(".attack").removeClass("mediumhit");
      $(".attack").removeClass("bighit");
      attackpower= Math.floor(Math.random()*500);
      catlife -= attackpower;
      if (attackpower < 200){
        $(".attack").addClass("smallhit");
      }
      if (attackpower >= 200){
        $(".attack").addClass("mediumhit");
      }
      if (attackpower >= 300){
        $(".attack").addClass("bighit");
      }
      if (catlife <= 0){
        $(".attack").addClass("catdead");
        $(".attack").html("Deadededed");
      }
      else{
        $(".attack").html("BARK!" + "(" + catlife + ")");
      }

    });
    $("#cat").click(function() {
      $(".attack").removeClass("smallhit");
      $(".attack").removeClass("mediumhit");
      $(".attack").removeClass("bighit");
      attackpower= Math.floor(Math.random()*500);
      doglife -= attackpower;
      if (attackpower < 200){
        $(".attack").addClass("smallhit")
      }
      if (attackpower >= 200){
        $(".attack").addClass("mediumhit")
      }
      if (attackpower >= 300){
        $(".attack").addClass("bighit")
      }
      if (doglife <= 0){
          $(".attack").addClass("dogdead");
          $(".attack").html("Deadededed");
      }
      else {
        $(".attack").html("MEOW!" + "(" + doglife + ")");  
      }
    });
});
