document.addEventListener("DOMContentLoaded",
    function(event){

        var h=Number((getComputedStyle(document.getElementById("playground")).height).replace("px",""));
        var w=Number((getComputedStyle(document.getElementById("playground")).width).replace("px",""));
        var bl=-1

        function block(){
        	bl=bl*(-1);
        	console.log(bl);
            if(bl==1){
                document.getElementById("block").style.background="green";
            }else{
                document.getElementById("block").style.background="gray";
            }
        }
 
        function isCentersMatch(deltaX, deltaY){
            marginLeftOfBox=Number((getComputedStyle(document.getElementById("box")).marginLeft).replace("px",""));
            marginLeftOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginLeft).replace("px",""));
            marginTopOfBox=Number((getComputedStyle(document.getElementById("box")).marginTop).replace("px",""));
            marginTopOfCrab=Number((getComputedStyle(document.getElementById("crab")).marginTop).replace("px",""));
            deltaMarginLeft=marginLeftOfCrab-marginLeftOfBox-deltaX;
            deltaMarginTop=marginTopOfCrab-marginTopOfBox-deltaY;
            console.log(deltaMarginLeft==12.5, deltaMarginTop==12.5)
            if((deltaMarginLeft==12.5)&&(deltaMarginTop==12.5)){
                return true;
                }else{
                    return false;
                }
            }



        function right(){
            centersMatch = isCentersMatch(50,0);
        	if ((bl>0)&&(marginLeftOfBox+50<w)&&centersMatch){
        		document.getElementById("box").style.marginLeft=marginLeftOfBox+50+"px";
        	}
        }

        function left(){
            centersMatch = isCentersMatch(-50,0);
        	if((bl>0)&&(marginLeftOfBox>40)&&centersMatch){
        		document.getElementById("box").style.marginLeft=marginLeftOfBox-50+"px";
        	}
        }

        function down(){
            centersMatch = isCentersMatch(0,50);
        	if ((bl>0)&&(marginTopOfBox+50<h)&&centersMatch){
        		document.getElementById("box").style.marginTop=marginTopOfBox+50+"px";
                
        	}
        }

        function up(){
            centersMatch = isCentersMatch(0,-50);
            if((bl>0)&&(marginTopOfBox>40)&&(centersMatch)){
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