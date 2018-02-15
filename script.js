$(document).ready(function() {
    $("#nbaSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#nbaInput").val();
    var myurl= "http://api.football-data.org/v1/fixtures?timeFrame=n2";

    $.ajax({
        headers:{'X-Auth-Token':'3ea2ae4780b94241b0be5507865d1ae7'},
        url : myurl,
        dataType : "json",
        type: 'GET',

        success : function(json) {
            var results = "";
        $("#nbaResults").html(results);
        
        console.log(json);
        }
    });
    });
});