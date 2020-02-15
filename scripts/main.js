calculateWorkExperience();
getCurrentYear();

/*
Function that calculates my work experiance. Displays years and days.
*/
function calculateWorkExperience() {
    var start = new Date("07/01/2017");
    var now = new Date();
    var diffDays = (now.getTime() - start.getTime()) / (1000 * 3600 * 24);
    var diffYears = Math.floor(diffDays / 365);
    diffDays = Math.floor(diffDays - (diffYears * 365));
    var output = diffYears + " years " + diffDays + " days ago";
    document.getElementById('work-experience').innerHTML = output;
}

/*
Function that calculates the current year for the footer.
*/
function getCurrentYear() {
    var year = new Date();
    document.getElementById("current-year").innerHTML = year.getFullYear();
}

/*
Function that sends e-mail.
*/
function sendEmail() {
    var email = ['info', '@', 'codeflair.ch'].join("");
    window.location.href = "mailto:" + email;
}