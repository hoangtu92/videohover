var video_lists = [1,2,3,4,5,6,7,8,9];
var quality = {
	high: '',
	low: '_0',
	medium: '_1'
};
var myVid = document.getElementById("video_play");
xhr = {url: []};


function setVideoPosition(){
	var docWidth = window.innerWidth,
		containerWidth = $('.gs-container').width(),
		contentWidth = $('.content__article-body').width();
		
	var sidebarWidth = (docWidth - containerWidth)/2 + ((containerWidth-contentWidth)/2 - 300)/2;
	
	if(sidebarWidth > 0) myVid.style.right = sidebarWidth + 'px';
}

function get_videos(filename){
	if(!filename) filename = 1;
	$.ajax({
        url: 'video/' + filename + quality.medium + '.mp4',
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
		   
        }
    });
	
}

for(var i=0; i< video_lists.length; i++){
	xhr.url[video_lists[i]] = 'video/' + video_lists[i] + quality.low + '.mp4'
	get_videos(video_lists[i]);
}



$(window).resize(function(e){
	setVideoPosition();
});

$(document).ready(function(){
	
	setVideoPosition();
	
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

