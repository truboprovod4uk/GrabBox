document.addEventListener("DOMContentLoaded",
    function(event){

        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));


        function right(){
        	var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
        	if ((marginLeftOfCrab + 50)<w){
        		document.getElementById("crab").style.marginLeft=marginLeftOfCrab+50+"px";
        		console.log("left: " + Number(marginLeftOfCrab + 50));
        	}
        }

        function left(){
            var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
        	if(marginLeftOfCrab>50){
        		document.getElementById("crab").style.marginLeft=marginLeftOfCrab-50+"px";
        		console.log("left: " + Number(marginLeftOfCrab - 50));
        	}
        }

        function down(){
        	var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
        	if ((marginTopOfCrab+50)<h){
        		document.getElementById("crab").style.marginTop=marginTopOfCrab+50+"px";
        		console.log("top: " + Number(marginTopOfCrab + 50));
        	}
        }

        function up(){
            var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            if(marginTopOfCrab>50){
            	document.getElementById("crab").style.marginTop=marginTopOfCrab-50+"px";
        	    console.log("top: " + Number(marginTopOfCrab - 50));
            }
        }


    document.querySelector("#left").addEventListener("click", left);
    document.querySelector("#right").addEventListener("click", right);
    document.querySelector("#down").addEventListener("click", down);
    document.querySelector("#up").addEventListener("click", up);
    document.querySelector("#block").addEventListener("click", block);
    }
);