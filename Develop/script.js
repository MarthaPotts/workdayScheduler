//date at top
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

//localStorage: get/stringify, set/parse
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

var setEvents = function(){
    localStorage.setItem(events, JSON.stringify(events));
}
var getEvents = function(){
   var currentEvents = localStorage.getItems(events, JSON.parse(events));
   if(currentEvents){
       events = currentEvents
       //create events/tasks function where fields do not clear
       $.each(events, function(hour, task){
           var hourDiv = $('#' + hour);
           createEvent(task, hourDiv);
       })
       }
   }
   