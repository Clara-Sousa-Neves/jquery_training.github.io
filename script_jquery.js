//$(function() {})

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


    $("button").click(function() {
        $("h1").hide();
    });

    $("h3").css("color", "pink");
    $("#unico").css("color", "green");

    $("#red").click(function() {
        $("p").css("color", "red");
        $("p").hide();
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
        $("#message").css("border", "2px solid gold");
        // $("#message").css(color: "gold", border: "2px solid gold", backgroundColor: "blue");
        $("#message").fadeOut(3000);
        $("#message")
            .addClass("green");

    });


});