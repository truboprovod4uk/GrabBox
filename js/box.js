document.addEventListener("DOMContentLoaded",
    function(event){

        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));
        var bl=1

        function block(){
        	bl=bl*(-1);
        	console.log(bl);
        }

        function right(){
        	var marginLeftOfBox=Number((getComputedStyle(document.getElementById("box")).marginLeft).replace("px",""));
            var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            var deltaMarginLeft=marginLeftOfCrab-marginLeftOfBox-50;
            console.log("deltaMarginLeft: "+deltaMarginLeft)
        	if ((bl>0)&&(marginLeftOfBox+50<w)&&(deltaMarginLeft==12.5)){
        		document.getElementById("box").style.marginLeft=marginLeftOfBox+50+"px";
        	}
        }

        function left(){
            var marginLeftOfBox=Number((getComputedStyle(document.getElementById("box")).marginLeft).replace("px",""));
            var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            var deltaMarginLeft=marginLeftOfCrab-marginLeftOfBox+50;
            console.log("deltaMarginLeft: "+deltaMarginLeft);
        	if((bl>0)&&(marginLeftOfBox>40)&&deltaMarginLeft==12.5){
        		document.getElementById("box").style.marginLeft=marginLeftOfBox-50+"px";
        	}
        }

        function down(){
        	var marginTopOfBox=Number((getComputedStyle(document.getElementById("box")).marginTop).replace("px",""));
            var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            var deltaMarginTop=marginTopOfCrab-marginTopOfBox-50;
        	if ((bl>0)&&(marginTopOfBox+50<h)&&(deltaMarginTop==12.5)){
        		document.getElementById("box").style.marginTop=marginTopOfBox+50+"px";
        	}
        }

        function up(){
            var marginTopOfBox=Number((getComputedStyle(document.getElementById("box")).marginTop).replace("px",""));
            var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            var deltaMarginTop=marginTopOfCrab-marginTopOfBox+50;
            if((bl>0)&&(marginTopOfBox>40)&&(deltaMarginTop==12.5)){
            	document.getElementById("box").style.marginTop=marginTopOfBox-50+"px";
            }
        }


    document.querySelector("#left").addEventListener("click", left);
    document.querySelector("#right").addEventListener("click", right);
    document.querySelector("#down").addEventListener("click", down);
    document.querySelector("#up").addEventListener("click", up);
    document.querySelector("#block").addEventListener("click", block);
    }
);