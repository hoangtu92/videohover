var video_lists = [1,2,3,4,5,6,7,8,9];
xhr = {url: []};

function get_videos(filename){
	if(!filename) filename = 1;
	$.ajax({
        url: 'video/' + filename + '.mp4',
		xhrFields: {
            responseType: 'blob'
        },
        success:function(data){
			
		
			var reader = new FileReader();
  
			reader.onloadend = function() {
  
				var byteCharacters = atob(reader.result.slice(reader.result.indexOf(',') + 1));
    
				var byteNumbers = new Array(byteCharacters.length);

				for (var i = 0; i < byteCharacters.length; i++) {
		  
					byteNumbers[i] = byteCharacters.charCodeAt(i);
		  
				}

				var byteArray = new Uint8Array(byteNumbers);
				var blob = new Blob([byteArray], {type: 'video/mp4'});
				var url = URL.createObjectURL(blob);
				
			
				xhr.url[filename] = url;
				
				
			}
  
			reader.readAsDataURL(data);
		   
        },
		complete: function(){
			if(filename < 9 ) get_videos(filename+1);
		}
    });
	
}

for(var i=1; i<= video_lists.length; i++){
	get_videos(i);
}



$(document).ready(function(){
	
	
	
	
	
	
    var myVid = document.getElementById("video_play");
   $(".q-1").mouseover(function(){
         
       
           myVid.src= xhr.url[1];
           myVid.play();
           myVid.removeAttribute(muted);
       
  });
    
    $(".q-2").mouseover(function(){
         
       
           myVid.src= xhr.url[2];
           myVid.play();
       
  });
    $(".q-3").mouseover(function(){
         
      
           myVid.src= xhr.url[3];
           myVid.play();
       
  });
    $(".q-4").mouseover(function(){
         
      
           myVid.src= xhr.url[4];
           myVid.play();
       
  });
    $(".q-5").mouseover(function(){
         
       
           myVid.src= xhr.url[5];
           myVid.play();
       
  });
    $(".q-6").mouseover(function(){
         
       
           myVid.src= xhr.url[6];
           myVid.play();
       
  });
    $(".q-7").mouseover(function(){
         
       
           myVid.src= xhr.url[7];
           myVid.play();
       
  });
    $(".q-8").mouseover(function(){
         
       
           myVid.src= xhr.url[8];
           myVid.play();
       
  });
    $(".q-9").mouseover(function(){
         
       
           myVid.src= xhr.url[9];
           myVid.play();
       
  });
    
//    $(".q-1").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-2").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-3").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-4").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-5").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-6").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-7").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-8").mouseout(function(){
//       myVid.pause();
//    });
//    $(".q-9").mouseout(function(){
//       myVid.pause();
//    });
    
});

