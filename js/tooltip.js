jQuery(function ($) {
	$("abbr.tooltip").append('<span class="info">?</span>');
	
	  $("abbr.tooltip span").hover(function () {
		$(this).data('title',$(this).parent('abbr').attr('title'));
 	    $(this).append('<span class="tooltiptext">'+$(this).data('title')+'</span>');
		tooltiptext = $(this).children(".tooltiptext");
		tooltiptext.css("left",(0-tooltiptext.width()/2-4)+"px");
 		$(this).parent('abbr').removeAttr('title');
 	  }, function () {
 	    $("span.tooltiptext").remove();
		$(this).parent('abbr').attr('title',$(this).data('title'));
 	  });
});