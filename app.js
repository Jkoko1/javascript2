function lifeInWeeks(age) {
    const year = 90;

    var ageC = prompt("How old are you?");
        
    var totalLeft = year - ageC;
        
    var output = "you have " + totalLeft + " years left";

    alert(output); 
    
    var days = totalLeft * 365;

    var weeks = totalLeft * 52;

    var months = totalLeft * 12;

    var totalRem = "You have " + days + " days, " + weeks + " weeks, " + months + " months left.";

    console.log(totalRem);

    // alert(totalRem);
    
    }

lifeInWeeks();