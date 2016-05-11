var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();
var resultString = "";

function daysLeft() {
    var a = $( "#datepicker" ).datepicker('getDate').getTime();
    var b = today.getTime();
    var c = 24*60*60*1000;
    var diffDays = Math.round((a - b)/c);
    if (a !== null) {
	    if (diffDays < 0) {
	    	diffDays = diffDays *-1;
	    	resultString = ("<p>The date you chose was " + diffDays + " days ago! Please choose a date in the future!");
	    } else if (diffDays === 0) {
	    	resultString = "Your deadline is tomorrow!";
		} else {
			resultString = ("<p>You have " + diffDays + " days left!");
		}
	}
	else {
    	alert("You need to choose a date!");
    }
}

$("#datepicker").on("change", function(){
    daysLeft();
    $("#result").html(resultString);
});


// 16. STRETCH Challenges:

// For the highly ambitious, you may write a couple if statements and customize the result HTML string accordingly.
// Here are the possibilities I've thought of; there may be more.
// condition 1:  there is an input but someone has selected a date in the past
// condition 2:  there is an input and the day is tomorrow
// condition 3:  there is an input and the date is in the future

//  Conditions 4, 5 an 6 can't be done because the only input at the moment is the selection the user makes 
//		from the datepicker. I believe what was required was to define what would happen if the input
//		box doesn't get any input but we haven't done anything to that so I'll assume that we are doing
//		something to them in the next step.

// condition 4:  there is NO input but someone has selected a date in the past
// condition 5:  there is NO input and the day is tomorrow
// condition 6:  there is NO input and the date is in the future.



