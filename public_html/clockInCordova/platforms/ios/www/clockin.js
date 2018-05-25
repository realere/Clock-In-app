/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var attempt = 3; //code for login attempt

var date = Date(); //code for date instance 
document.getElementById("displayDateTime").innerHTML = date;

var latitude;
var longitude;
var storage;

var student;

var studentCourses;




student = {
    username: "mark1",
    password: "password",
    firstName: "Mark",
    lastName: "Baskin",
    student_id: "S12345",
    program:" Msc Information Technology",
    lecture_date: "today",
    course: "Human Computer Interaction",
    lecture_address: "M 517",
    lecture_time: "30 mintues" 
    
};




document.getElementById("nextClass").innerHTML = 
        
        student.course +  "<br>"+ student.lecture_date 
        + " at " + "<br> " +student.lecture_address+ "<br>" 
        + " in " + student.lecture_time;

document.getElementById("studentInfo").innerHTML =
        student.firstName + " " + student.lastName + "<br>"
       + student.student_id + " <br>" + student.program;


function init (){
    document.addEventListener("deviceready", onDeviceReady, false );
    storage = window.localStorage;
};

function  onDeviceReady(){
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type','text/css' );
    
    
    
//    if (cordova.platformId === 'ios'){
//        node.setAttribute('href', 'clockinios.css');
//        window.StatusBar.overlayWebView(false);
//        window.StatusBar.styleDefault();
//    }else{
//        node.setAttribute('href', 'clockinandroid.css');
//        wind.StatusBar.backgroundColorByHexString('#1565C0');
//    }
//    document.getElementsByTagName()[0].appendChild(node);
}


//login page

 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username === "Formget" && password === "formget#123"){
        alert ("Login successfully");
        window.location = "homepage.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt === 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function getDirection(){
    window.location = "directionspage.html";
}


//google map 

//function intiMap(){
//    
//   var options = {
//       zoom:8,
//       center:{lat:55.8642, lng:-4.2518}
//   };
//   
//   var map = new google.maps.Map(document.getElementById("map"), options);
//}



//got it bottom disappear
function setCss(elm, prop, val){
    var node = document.getElementById(elm).style;
    node.setProperty(prop,val);
}