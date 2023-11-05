"use strict";

function getHeadline() {
    headlineWait();
    httpGetAsync('http://localhost:5000/headline', headlineResponse);
    //alert('hello');
}

function headlineWait() {
    document.getElementById("p1").innerHTML = "Here's what I think";
}

function headlineResponse(response) {
    const parsedResponse = JSON.parse(response)
    document.getElementById("p2").innerHTML = parsedResponse.headline;
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);;
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
