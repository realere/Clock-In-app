/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var date = Date();
document.getElementById("displayDateTime").innerHTML = date;


var student;

student = {
    name: "Mark",
    username: "mark1",
    password: "password",
    student_id: "S12345",
    lecture_date: "today",
    course: "Human Computer Interaction",
    lecture_address: "M 517",
    lecture_time: "30 mintues" 
    
};




//Human Computer Interaction <br> 
//                    Today at <br>
//                    M 517 <br> 
//                    in 30 Minutes 

function students_details() {
    
    //    student.course +  "<br>"+ student.lecture_date 
    //         + " at " + "<br> " +student.lecture_address+ "<br>" 
    //         + " in " + student.lecture_time;
    
}

document.getElementById("nextClass").innerHTML = 
        
        student.course +  "<br>"+ student.lecture_date 
        + " at " + "<br> " +student.lecture_address+ "<br>" 
        + " in " + student.lecture_time;




function init (){
    document.addEventListener("deviceready", onDeviceReady, False );
    storage = window.localStorage;
}

function  onDeviceReady(){
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type','text' );
    if (cordova.platformId === 'ios'){
        node.setAttribute('href', 'clockinios.css');
        window.StatusBar.overlayWebView(false);
        window.StatusBar.styleDefault();
    }else{
        node.setAttribute('href', 'clockinandroid.css');
        wind.StatusBar.backgroundColorByHexString('#1565C0');
    }
}


//login page

var attempt = 3; // Variable to count number of attempts.
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