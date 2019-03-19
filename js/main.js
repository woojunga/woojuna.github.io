$(function(){
	//hamburger menu
	$(".line").on("click",function(){
		var clickBtn = $(this);
		if(clickBtn.hasClass("is-open")){//is-open이 있는지 찾아본다. 
		 clickBtn.removeClass("is-open").addClass("is-closed").addClass("bgColor");//is-open을 삭제하고 is-close를 더한다.
		 $("#gnb").hide();
		  $(".line div").css({"background-color":"#000"});
		
		}else
		{clickBtn.removeClass("is-closed").addClass("is-open");
		
		$("#gnb").css({'display':'table'});
		 $(".line div").css({"background-color":"#000"});
		}
	});


});	