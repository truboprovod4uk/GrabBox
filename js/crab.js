document.addEventListener("DOMContentLoaded",
    function(event){

        var delta = 50;
        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));

        function cbPos(){
            var crabBoxPos = new Object()
            crabBoxPos.marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            crabBoxPos.marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            crabBoxPos.marginLeftOfBox=Number((getComputedStyle(document.getElementById("box")).marginLeft).replace("px",""));
            crabBoxPos.marginTopOfBox=Number((getComputedStyle(document.getElementById("box")).marginTop).replace("px",""));
            crabBoxPos.deltaMarginLeft=function(){
               return (crabBoxPos.marginLeftOfCrab-crabBoxPos.marginLeftOfBox-12.5)/50
               console.log((crabBoxPos.marginLeftOfCrab-crabBoxPos.marginLeftOfBox-12.5)/50);
            }
            crabBoxPos.deltaMarginTop=function(){
               return (crabBoxPos.marginTopOfCrab-crabBoxPos.marginTopOfBox-12.5)/50
               console.log((crabBoxPos.marginTopOfCrab-crabBoxPos.marginTopOfBox-12.5)/50);
            }
            return crabBoxPos;
        }

        function right(){
        	var c = cbPos();
        	if ((c.marginLeftOfCrab+delta)<w){
        		document.getElementById("crab").style.marginLeft=c.marginLeftOfCrab+delta+"px";
        	}
        }

        function left(){
            var c = cbPos();
        	if(c.marginLeftOfCrab>delta){
        		document.getElementById("crab").style.marginLeft=c.marginLeftOfCrab-delta+"px";
        	}
        }

        function down(){
        	var c = cbPos();
        	if ((c.marginTopOfCrab+delta)<h){
        		document.getElementById("crab").style.marginTop=c.marginTopOfCrab+delta+"px";
        	}
        }

        function up(){
            var c = cbPos();
            if(c.marginTopOfCrab>delta){
            	document.getElementById("crab").style.marginTop=c.marginTopOfCrab-delta+"px";
            }
        }

        function runX(){
            var cb=cbPos();
            deltaMarginLeft=cb.deltaMarginLeft();
            if (deltaMarginLeft<0){
                var timerId=setInterval(right,250);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(250*deltaMarginLeft));
            }else if(deltaMarginLeft>0){
                var timerId=setInterval(left,250);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(250*deltaMarginLeft));
            }
            setTimeout(runY, Math.abs(250*deltaMarginLeft));
        }

        function runY(){
            var cb=cbPos();
            deltaMarginTop=cb.deltaMarginTop();
            if (deltaMarginTop<0){
                var timerId=setInterval(down,250);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(250*deltaMarginTop));
            }else if(deltaMarginTop>0){
                var timerId=setInterval(up,250);
                setTimeout(function(){clearInterval(timerId)}, Math.abs(250*deltaMarginTop));
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