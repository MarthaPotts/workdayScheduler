//date at top
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

//localStorage: set the entire object and retrieve(get) in name, value pairs
var events = {
    "9": [], 
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};
//writes to localStorage (view via Applications/localStorage in console); saved as a legal string in object notation
var setEvents = function(){
    localStorage.setItem(events, JSON.stringify(events));
}
//retrieves from localStorage: parsed out of type-specific legal data
var getEvents = function(){
   var currentEvents = localStorage.getItems(events, JSON.parse(events));
   //data retrieved stored in currentEvents, where object name is events 'transfers' the data in object form to var currentEvents
   if(currentEvents){
       events = currentEvents
       //iterates array-like object and sorts from storage to document
       $.each(events, function(hour, task){
           var hourDiv = $('#' + hour);
           createEvent(task, hourDiv);
       })
       }
   }
//generates a rendered 'paragraph' to accept/create event at specific time
var createEvent = function(taskText, hourDiv) {
    var taskDiv = hourDiv.find('.task');
    var taskP = $('<p>').addClass('description').text(taskText)
     taskDiv.html(taskP);
}
//assess past/present/future and set background color to differentiate
var assessEvents = function(){
  var currentHour = moment().hour();
    $(".task-data").each(function(){
        var elementHour = parseInt($(this).attr('id'));

        if(elementHour < currentHour){
            $(this).removeClass(["present", "future"]).addClass("past");
        }else if( elementHour === currentHour){
            $(this).removeClass(["past", "future"]).addClass("present");
        }else{
            $(this).removeClass(["past", "present"]).addClass("future");
        }
        
    })
};

