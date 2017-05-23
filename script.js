$(document).ready(function() {
	$(".searchButton").click(function() {
		var words = $('input[type=text][name=search_text]').val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + words + "&format=json&callback=?";
		$.ajax({
     		type: "POST",
			url: url,
            dataType: 'json',
			async: false,
			success: function(data) {
				$(".results").empty();
				$('input').blur();
				for (var i=0; i < data[1].length; i++) {
					var title = data[1][i];
					var description = data[2][i];
					var link = data[3][i];
					$('.results').append('<div class="card"><a href="' + link + '" target="_blank"><h2>' + title + '</h2></a><p>' + description + '</p></div>');
					
				}
       		},
		});
	});
	$('input[type=text][name=search_text]').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('.searchButton').click();//Trigger search button click event
        }
    });
	$('input').focus(function () {
		$(this).select();
	})
});