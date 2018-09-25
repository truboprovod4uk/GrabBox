document.addEventListener("DOMContentLoaded",
    function(event){

        var delta = 50;
        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));

        function crabPos(){
            var crab = new Object()
            crab.marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            crab.marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            return crab;
        }

        function right(){
        	var c = crabPos();
        	if ((c.marginLeftOfCrab+delta)<w){
        		document.getElementById("crab").style.marginLeft=c.marginLeftOfCrab+delta+"px";
        	}
        }

        function left(){
            var c = crabPos();
        	if(c.marginLeftOfCrab>delta){
        		document.getElementById("crab").style.marginLeft=c.marginLeftOfCrab-delta+"px";
        	}
        }

        function down(){
        	var c = crabPos();
        	if ((c.marginTopOfCrab+delta)<h){
        		document.getElementById("crab").style.marginTop=c.marginTopOfCrab+delta+"px";
        	}
        }

        function up(){
            var c = crabPos();
            if(c.marginTopOfCrab>delta){
            	document.getElementById("crab").style.marginTop=c.marginTopOfCrab-delta+"px";
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