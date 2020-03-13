
//function userinput() {
    //var timetocook = document.getElementById("time").value;
    //var intakecal = document.getElementById("calories").value;

//}

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log("page initialized");
    $('#submitdiy').click(verify);
}

function verify(e) {
    console.log("Search for diy recipes");
    e.preventDefault();
    var timetocook = document.getElementById("time").value;
    var intakecal = document.getElementById("calories").value;

    var time1 = "0 - 20 minutes";
    var time2 = "20 - 40 minutes";
    var time3 = "40 minutes and above";

    var cal1 = "0 - 499 Calories";
    var cal2 = "500 - 999 Calories";
    var cal3 = "1000 Calories and above";

    var minCal = 0;
    var maxCal = 0;
    var minTime = 0;
    var maxTime = 0;

    if (timetocook == time1) {
        minTime = 0;
        maxTime = 20;
    } else if (timetocook == time2) {
        minTime = 20;
        maxTime = 40;
    } else if (timetocook == time3) {
        minTime = 20;
        maxTime = 99999;
    }

    if (intakecal == cal1) {
        minCal = 0;
        maxCal = 499;
    } else if (intakecal == cal2) {
        minCal = 500;
        maxCal = 999;
    } else if (intakecal == cal3) {
        minCal = 1000;
        maxCal = 9999;
    }

    if ((minCal == 0 && maxCal == 0) || (minTime == 0 && maxTime == 0)) {
        console.log("Incorrect input!");
        alert("Please input valid information!");
    } else {
        window.location = '/diy1'
        
    }

    localStorage.setItem("minCal", minCal);
    localStorage.setItem("maxCal", maxCal);
    localStorage.setItem("minTime", minTime);
    localStorage.setItem("maxTime", maxTime);

}