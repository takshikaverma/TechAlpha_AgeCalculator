let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");
let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
    // console.log("Birth Date:-", dob.value + "     " + "Current Date:-", currentDate.value)
    if (dob.value == "" || currentDate.value == "") {
        output.innerHTML = "Please select date";
        // console.log(output.innerHTML)
    } else {
        calculateAgeDifference(dob.value, currentDate.value)
    }
});


function calculateAgeDifference(start, end) {                              // 0123456789 (index)
    // console.log(start);                                                // 2022-04-07 (Date)
    let dobYear = parseInt(start.substring(0, 4), 10); // Base 10        // start , end-1(position)
    let dobMonth = parseInt(start.substring(5, 7), 10);
    let dobDate = parseInt(start.substring(8, 10), 10); // Base 10
    let currYear = parseInt(end.substring(0, 4), 10);
    let currMonth = parseInt(end.substring(5, 7), 10);
    let currDate = parseInt(end.substring(8, 10), 10);

    // console.log("DOB Year:-", dobYear + "    " + "DOB Month:-", dobMonth + "     " + "DOB Date:-", dobDate);                                       // 2022-04-07 (Date)
    // console.log("Current Year:-", currYear + "    " + "Current Month:-", currMonth + "    " + "Current Month:-", currDate);                                       // 2022-04-07 (Date)

    // -------------Year difference----------------
    let yearAgeDiff = currYear - dobYear;
    // console.log(yearAgeDiff);


    //--------------Month Difference-----------
    let monthAgeDiff;
    if (currMonth >= dobMonth) {
        monthAgeDiff = currMonth - dobMonth;
        // console.log(monthAgeDiff);
    }
    else {
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;             //12+ 2 -4 = 10   //dob 2021-04-25 
        // console.log(monthAgeDiff);                        //  current 2022-02-25 
    }


    // ------------------days difference-------------
    if (currDate >= dob) {
        dateAgeDiff = currDate - dobDate;
        console.log(dateAgeDiff);
    }
    else {
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
        // console.log(noOfDaysInDOB) // dob 2022-02-28   current 2022-03-01

        dateAgeDiff = noOfDaysInDOB + currDate - dobDate; // 28+01-28 =1

        //-------- case when monthAgeDiff goes negative-------
        if (monthAgeDiff < 0) {                 //dob 2021-03-31   //current 2022-03-31
            monthAgeDiff = 11;
            yearAgeDiff--
        }
    }
    output.innerHTML = yearAgeDiff + " Years, " + monthAgeDiff + " Months, " + dateAgeDiff + " Days, "

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
}







