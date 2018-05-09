/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var date = Date();
 document.getElementById("displayDateTime").innerHTML = date;





function init (){
    document.addEventListener("deviceready", onDeviceReady, False );
    storage = window.localStorage;
}

function  onDeviceReady(){
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type','text' );
    if (cordova.platformId == 'ios'){
        node.setAttribute('href', 'clockinios.css');
        window.StatusBar.overlayWebView(false);
        window.StatusBar.styleDefault();
    }else{
        node.setAttribute('href', 'clockinandroid.css');
        wind.StatusBar.backgroundColorByHexString('#1565C0');
    }
}