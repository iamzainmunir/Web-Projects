        var start = new Date().getTime();
		
		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
			}
		  return color;
		}
		
		function makeShapes(){
		  var size = (Math.random() * 200) + 50;
		  var top = (Math.random() * 600);
		  var left = (Math.random() * 600);
		  
		  if(Math.random() > 0.5){
			$("#square").css("border-radius" , "50%");
		  }else
		  {
			$("#square").css("border-radius" , "0");
		  }
		  
		  $("#square").css("display","block");
		  $("#square").css("top" , top + "px");
		  $("#square").css("left" , left + "px");
		  $("#square").css("width" , size);
		  $("#square").css("height" , size);
		  $("#square").css("background-color" , getRandomColor());
		  
		  start = new Date().getTime();
		}
		
		setTimeout(makeShapes, 1000);
		
		$("#square").click(function(){
		  var end = new Date().getTime();
		  var timeTaken = (end - start)/1000;
		  
		  $("#timerR").html(timeTaken + "sec");
		  $("#square").css("display","none");
		  
		  delayShapes();
		  
		});
		
		function delayShapes()
		{
		   setTimeout(makeShapes, Math.random() * 2000);
		}