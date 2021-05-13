// let value; 
// let time; 
$(document).ready(function() {
    //event listener
    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val(); 
        let time = $(this). parent().attr("id"); 

        localStorage.setItem(time, value); 
    }); 
    // let currentHour; 
    // let blockHour; 
    function hourUpdater() {
        let currentHour = moment().hours(); 
        //iterate over time blocks 
        $(".time-block").each(function(){
            let blockHour = parseInt($(this).attr("id")); 
            if (blockHour < currentHour) {
                $(this).addClass("past"); 
            } else if (blockHour === currentHour) {
                $(this).removeClass("past"); 
                $(this).addClass("present"); 
            } else {
                $(this).removeClass("past"); 
                $(this).removeClass("present"); 
                $(this).addClass("future"); 
            }
        }); 
    }
    hourUpdater(); 

    let interval = setInterval(hourUpdater, 15000); 

    $("#9 .description").val(localStorage.getItem("9")); 
    $("#10 .description").val(localStorage.getItem("10")); 
    $("#11 .description").val(localStorage.getItem("11")); 
    $("#12 .description").val(localStorage.getItem("12")); 
    $("#13 .description").val(localStorage.getItem("13")); 
    $("#14 .description").val(localStorage.getItem("14")); 
    $("#15 .description").val(localStorage.getItem("15")); 
    $("#16 .description").val(localStorage.getItem("16")); 
    $("#17 .description").val(localStorage.getItem("17")); 
    
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
}); 