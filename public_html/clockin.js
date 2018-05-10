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

function description(){
    
};

document.getElementById("nextClass").innerHTML = 
        
        
        
        student.course +  "<br> " + student.lecture_date 
         + " at " + "<br> " +student.lecture_address+ "<br> "+ " in " + student.lecture_time;



//function getInfo() {
//    var username = document.getElementById("username").value;
//    var password = document.getElementById("password").value;
//    
//    
//    
//     for(i = 0; i < objStudent.length; i++)
//        
         
        
//     {
//        if(username === objStudent.username && password === objStudent.password) {
//            console.log(username);
//        } 
//    }
//}








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

