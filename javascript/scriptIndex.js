$(document).ready(function () {
    console.log("page is ready");

    $("#playercount").text(Math.floor(Math.random() * 30000));

    $(".Login").click(function () {
        console.log("click");
        var voornaamHome = prompt("Gelieve uw naam in te vullen: ");
        $("#welkom").text("Welkom " + voornaamHome + "!");
    })
})