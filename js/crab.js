document.addEventListener("DOMContentLoaded",
    function(event){

        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));


        function right(){
        	var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
        	if ((marginLeftOfCrab + 50)<w){
        		document.getElementById("crab").style.marginLeft=marginLeftOfCrab+50+"px";
        	}
        }

        function left(){
            var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
        	if(marginLeftOfCrab>50){
        		document.getElementById("crab").style.marginLeft=marginLeftOfCrab-50+"px";
        	}
        }

        function down(){
        	var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
        	if ((marginTopOfCrab+50)<h){
        		document.getElementById("crab").style.marginTop=marginTopOfCrab+50+"px";
        	}
        }

        function up(){
            var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            if(marginTopOfCrab>50){
            	document.getElementById("crab").style.marginTop=marginTopOfCrab-50+"px";
            }
        }

        function runX(){
            var marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            var marginLeftOfBox=Number((getComputedStyle(document.getElementById("box")).marginLeft).replace("px",""));
            var deltaMarginLeft=(marginLeftOfCrab-marginLeftOfBox-12.5)/50;
            if (deltaMarginLeft<0){
                var timerId=setInterval(right,1000);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(1000*deltaMarginLeft));
            }else if(deltaMarginLeft>0){
                var timerId=setInterval(left,1000);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(1000*deltaMarginLeft));
            }

        }
        function runY(){
            var marginTopOfBox=Number((getComputedStyle(document.getElementById("box")).marginTop).replace("px",""));
            var marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            var deltaMarginTop=(marginTopOfCrab-marginTopOfBox-12.5)/50;
            if (deltaMarginTop<0){
                var timerId=setInterval(down,1000);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(1000*deltaMarginTop));
            }else if(deltaMarginTop>0){
                var timerId=setInterval(up,1000);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(1000*deltaMarginTop));
            }

        }



    document.querySelector("#left").addEventListener("click", left);
    document.querySelector("#right").addEventListener("click", right);
    document.querySelector("#down").addEventListener("click", down);
    document.querySelector("#up").addEventListener("click", up);
    document.querySelector("#block").addEventListener("click", block);
    document.querySelector("#runX").addEventListener("click", runX);
    document.querySelector("#runY").addEventListener("click", runY);

    }
);