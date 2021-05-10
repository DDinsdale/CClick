var c = 0;
var d = 1;
var fnum = 0;
var gnum = 0;
var f2 = 10;
var g2 = 1;
var log = 0;
var clicks = 0;
var gcs = 0;
var fcs = 0;
function myFunction() {
    c = c + d;
    document.getElementById("cookie").innerHTML = c;
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
    }
function dcFunction(){
    if(d < 2){
        if(c >= 10){
        c = c-10;
        d++;
        document.getElementById("cookie").innerHTML = c;
        var myLog = document.createElement("li");
        var tnode = document.createTextNode("Purchased Double Click");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
        
        }
        else{
            var myLog = document.createElement("li");
            var tnode = document.createTextNode("Not Enough Cookies");
            myLog.appendChild(tnode);
            document.getElementById("log").appendChild(myLog);
        }
    }
    else{
        var myLog = document.createElement("li");
        var tnode = document.createTextNode("Already Purchased");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
    }
}
function qcFunction(){
    if (d < 4){
        if (d == 2){
            if (c >= 100){
                c = c - 100;
                d = 4;
                document.getElementById("cookie").innerHTML = c;
                var myLog = document.createElement("li");
                var tnode = document.createTextNode("Purchased Quad Click");
                myLog.appendChild(tnode);
                document.getElementById("log").appendChild(myLog);
            }
            else{ 
                var myLog = document.createElement("li");
                var tnode = document.createTextNode("Not Enough Cookies");
                myLog.appendChild(tnode);
                document.getElementById("log").appendChild(myLog);
            }
        }
        else{
            var myLog = document.createElement("li");
            var tnode = document.createTextNode("Buy Double Click First");
            myLog.appendChild(tnode);
            document.getElementById("log").appendChild(myLog);
        }
    }
   else{
        var myLog = document.createElement("li")
        var tnode = document.createTextNode("Already Purchased");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
   }
    
}

function grandmaFunction(){
    if (c >= 50){
        c = c - 50;
        var myLog = document.createElement("li");
        var tnode = document.createTextNode("Purchased Grandma");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
        gnum++;
        document.getElementById("gnum").innerHTML = gnum;
        setInterval(function(){
            c = c + g2;
            document.getElementById("cookie").innerHTML = c;
            }, 
            1000);
    }
    else{
        var myLog = document.createElement("li")
        var tnode = document.createTextNode("Not Enough Cookies");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
        }
}

function factoryFunction(){
    if(c >= 500){
        c = c - 500;
        var myLog = document.createElement("li");
        var tnode = document.createTextNode("Purchased Factory");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
        fnum++;
        document.getElementById("fnum").innerHTML = fnum;
        setInterval(function(){
            c = c + f2;
            document.getElementById("cookie").innerHTML = c;
            }, 
            1000);
    }
    else{
        var myLog = document.createElement("li")
        var tnode = document.createTextNode("Not Enough Cookies");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
        }
    
}
function bGrandmaFunction(){
    if(g2 < 2){
        if(c >= 200){
            c = c- 200;
            g2 = 2;
            var myLog = document.createElement("li");
            var tnode = document.createTextNode("Purchased Better Grandma");
            myLog.appendChild(tnode);
            document.getElementById("log").appendChild(myLog);
        
        }
        else{
            var myLog = document.createElement("li")
            var tnode = document.createTextNode("Not Enough Cookies");
            myLog.appendChild(tnode);
            document.getElementById("log").appendChild(myLog);
        }
    }
    else{
        var myLog = document.createElement("li")
        var tnode = document.createTextNode("Already Purchased");
        myLog.appendChild(tnode);
        document.getElementById("log").appendChild(myLog);
    }
}