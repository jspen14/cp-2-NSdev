$(document).ready(function() {
    $("#nbaSubmit").click(function(e) {
    e.preventDefault();
    //var value = $("#nbaInput").val();
    var myurl= "http://api.icndb.com/jokes/random/";

    $.ajax({
        url : myurl,
        dataType : "json",
       

        success : function(json) {
            var results = "";

            results += "<h2>" +  json.value.joke + "</h2>";
        $("#nbaResults").html(results);
        

        console.log(json);
        }//success close
    });//ajax close
    });//click close
});//ready close