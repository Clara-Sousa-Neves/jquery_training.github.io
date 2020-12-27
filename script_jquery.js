//$(function() {})
//$().ready(function(){})

$(document).ready(function() {

    $("#l1").click(function() {
        $("#i1").show();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
    });

    $("#l2").click(function() {
        $("#i1").hide();
        $("#i2").show();
        $("#i3").hide();
        $("#i4").hide();
    });

    $("#l3").click(function() {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").show();
        $("#i4").hide();
    });

    $("#l4").click(function() {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").show();
    });

    //let h1 = $("h1");
    //let oneNumber = $("<p>ola 1111</p>");

    // h1.append(oneNumber);
    //$("<p>222222</p>").appendTo(h1);

    //h1.prepend(oneNumber);
    //$("<p>222222</p>").prependTo(h1);

    // $("p").html("<strong>Negrito</strong> Bla bla bla");
    //$("p").text("<strong>Negrito</strong> Bla bla bla");

    $("h1").append("<p>Experience</p>");
    $("<p>More experiences</p>").prependTo(".appends");

    $("button").click(function() {
        $("h1").hide();
    });

    $("h3").css("color", "pink");
    $("#unico").css("color", "green");

    $("#red").click(function() {
        $("p").css("color", "red");
        //$("p").hide();
        $("#red")
            .removeClass("red");
    });

    $("#gold").click(function() {
        $("p").css("color", "gold");
        $("p").fadeOut("fast");
        $("p").delay(2000);
        $("p").fadeIn("slow");
        $("#message").text("Color changed!");
        $("#message").css("color", "gold");
        $("#message").css({ border: "2px solid gold", backgroundColor: "blue" });
        $("#message").fadeOut(3000);
        $("#message")
            // .addClass("green");

    });
});