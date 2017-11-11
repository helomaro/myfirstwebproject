var playing = false;

//if we click on the start/reset
document.getElementById("startreset").onclick = function () {
	//if we are playing
	if (playing==true)	{
		//reload page
	} else{
	//if we are not playing
        //set score to 0
		var score = 0;
		document.getElementById("scorevalue").innerHTML = score;
        /*show countdown box*/		document.getElementById("timeremaining").style.display='inline';
        	/*reduce time by 1 sec in loops*/			
			var timeRemainingValue = document.getElementById("timeremainingvalue");
			var x = 240;
			
			try{
				
				while (x>0) {
				var liveTimeRemaining = setInterval(function(){x--;timeRemainingValue.innerHTML = x}, 1000);	
			
				if (x==0){
					/*document.getElementById("gameOver").style.display='inline';*/
				}	
		
		
			}
				
				
			} catch(err){
				console.log(err);
			}
		

            
	
					//timeleft?
                    //yes->continue
                    //no->gameover


            //change button to reset
	
			document.getElementById("startreset").innerHTML='Reset Game';
            //generate new Q&A
	
}
    

    


    



//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for one sec
                //generate new Q&A
            //no
            //show try again box for 1sec
}