// Some general UI pack related JS
// Extend JS String with repeat method
String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
};
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var addLog = function(time, tag, content) {
	var searchTerm = $("#logcat-search-input").val();
	var shouldDisplay = tag.contains(searchTerm) || content.contains(searchTerm);
	var li = shouldDisplay ? '<li>' : '<li style="display: none;">';
	$(".logcat ul").prepend(li +
	  '<div class="logcat-time">' + time + '</div>' +
      '<div class="logcat-tag">' + tag + '</div>' +
      '<div class="logcat-content">' + content + '</div>' +
    '</li>');
};

(function($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function (amount) {
    return this.each(function () {
      var segmentGap = 100 / (amount - 1) + "%"
        , segment = "<div class='ui-slider-segment' style='margin-left: " + segmentGap + ";'></div>";
      $(this).prepend(segment.repeat(amount - 2));
    });
  };

  $(function() {
  
    // Todo list
    $(".logcat li").click(function() {
        $(this).toggleClass("logcat-done");
    });

    $("#logcat-search-input").keyup(function() {
	    var searchTerm = $("#logcat-search-input").val();
		var upperCaseSearchTerm = searchTerm.toUpperCase();
		console.log(searchTerm);
		 $("#logcat_list li").each(function() {
			
			var item = $(this);
			if(item.text().toUpperCase().indexOf(upperCaseSearchTerm) != -1) {
				item.addClass("logcat-done");
				item.show();
			 } else {
				item.removeClass("logcat-done");
				item.hide();
			}
		});
	});

    /*
    setTimeout("addLog('01-05 13:04:12.803', D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 1000);
    setTimeout("addLog('01-05 13:04:13.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 2000);
    setTimeout("addLog('01-05 13:04:14.805','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 3000);
    setTimeout("addLog('01-05 13:04:15.806','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 4000);
    setTimeout("addLog('01-05 13:04:16.807','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 5000);
    setTimeout("addLog('01-05 13:04:20.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 7000);
    setTimeout("addLog('01-05 13:04:21.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 8000);
    setTimeout("addLog('01-05 13:04:32.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT wee !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 12000);
    setTimeout("addLog('01-05 13:04:41.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 200K, 6% free 10224K/10823K, paused 1ms+6ms');", 13000);
    setTimeout("addLog('01-05 13:04:51.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 15000);
    setTimeout("addLog('01-05 13:04:65.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 19000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:12.803', D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 1000);
    setTimeout("addLog('01-05 13:04:13.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 2000);
    setTimeout("addLog('01-05 13:04:14.805','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 3000);
    setTimeout("addLog('01-05 13:04:15.806','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 4000);
    setTimeout("addLog('01-05 13:04:16.807','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 5000);
    setTimeout("addLog('01-05 13:04:20.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 7000);
    setTimeout("addLog('01-05 13:04:21.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 8000);
    setTimeout("addLog('01-05 13:04:32.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT wee !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 12000);
    setTimeout("addLog('01-05 13:04:41.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 200K, 6% free 10224K/10823K, paused 1ms+6ms');", 13000);
    setTimeout("addLog('01-05 13:04:51.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 15000);
    setTimeout("addLog('01-05 13:04:65.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 19000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:12.803', D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 1000);
    setTimeout("addLog('01-05 13:04:13.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 2000);
    setTimeout("addLog('01-05 13:04:14.805','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 3000);
    setTimeout("addLog('01-05 13:04:15.806','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 4000);
    setTimeout("addLog('01-05 13:04:16.807','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 5000);
    setTimeout("addLog('01-05 13:04:20.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 7000);
    setTimeout("addLog('01-05 13:04:21.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 8000);
    setTimeout("addLog('01-05 13:04:32.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT wee !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 12000);
    setTimeout("addLog('01-05 13:04:41.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 200K, 6% free 10224K/10823K, paused 1ms+6ms');", 13000);
    setTimeout("addLog('01-05 13:04:51.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 15000);
    setTimeout("addLog('01-05 13:04:65.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 19000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:12.803', D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 1000);
    setTimeout("addLog('01-05 13:04:13.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 2000);
    setTimeout("addLog('01-05 13:04:14.805','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 3000);
    setTimeout("addLog('01-05 13:04:15.806','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 4000);
    setTimeout("addLog('01-05 13:04:16.807','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 5000);
    setTimeout("addLog('01-05 13:04:20.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 7000);
    setTimeout("addLog('01-05 13:04:21.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 8000);
    setTimeout("addLog('01-05 13:04:32.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT wee !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 12000);
    setTimeout("addLog('01-05 13:04:41.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 200K, 6% free 10224K/10823K, paused 1ms+6ms');", 13000);
    setTimeout("addLog('01-05 13:04:51.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 15000);
    setTimeout("addLog('01-05 13:04:65.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 19000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    setTimeout("addLog('01-05 13:04:12.803', D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 1000);
    setTimeout("addLog('01-05 13:04:13.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 2000);
    setTimeout("addLog('01-05 13:04:14.805','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 3000);
    setTimeout("addLog('01-05 13:04:15.806','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 4000);
    setTimeout("addLog('01-05 13:04:16.807','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 5000);
    setTimeout("addLog('01-05 13:04:20.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 7000);
    setTimeout("addLog('01-05 13:04:21.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 100K, 6% free 10224K/10823K, paused 1ms+6ms');", 8000);
    setTimeout("addLog('01-05 13:04:32.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT wee !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 12000);
    setTimeout("addLog('01-05 13:04:41.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 200K, 6% free 10224K/10823K, paused 1ms+6ms');", 13000);
    setTimeout("addLog('01-05 13:04:51.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 15000);
    setTimeout("addLog('01-05 13:04:65.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed !00K, 6% free 10224K/10823K, paused 1ms+6ms');", 19000);
    setTimeout("addLog('01-05 13:04:67.804','D/dalvikvm', 'D/dalvikvm( 871): GC_CONCURRENT freed 500K, 6% free 10224K/10823K, paused 1ms+6ms');", 20000);
    */

    // Custom Selects
    $("select[name='huge']").selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown-inverse'});
    $("select[name='herolist']").selectpicker({style: 'btn-primary', menuStyle: 'dropdown-inverse'});
    $("select[name='info']").selectpicker({style: 'btn-info'});

    // Tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Tags Input
    $(".tagsinput").tagsInput();

    // jQuery UI Sliders
    var $slider = $("#slider");
    if ($slider.length) {
      $slider.slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min"
      }).addSliderSegments($slider.slider("option").max);
    }

    // Placeholders for input/textarea
    $("input, textarea").placeholder();

    // Make pagination demo work
    $(".pagination a").on('click', function() {
      $(this).parent().siblings("li").removeClass("active").end().addClass("active");
    });

    $(".btn-group a").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $('a[href="#fakelink"]').on('click', function (e) {
      e.preventDefault();
    });

    // Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    
  });
  
})(jQuery);
