$(document).ready(function() {
	$('form').on('submit', function(event) {
		$('#af').text("Afrikaans: ")
		$('#de').text("German: ")
		$('#pt').text("Portuguese: ")
		$('#pl').text("Polish: ")
		$('#zh').text("Chinese: ")
		$('#fr').text("French: ")
		$('#fi').text("Finnish: ")
		$('#it').text("Italian: ")
		$('#tr').text("Turkish: ")
		$('#result').hide();
		$('#errorAlert').hide();
		$('#spinner').show();
		$.ajax({
			data: {
				result: $('#sentence').val()
			},
			type: 'POST',
			url: '/process'
		}).done(function(data) {
			$('#spinner').hide();
			if(data.error) {
				$('#errorAlert').text(data.error).show();
				$('#result').hide();
			} else {
				$('#result').show();
				$('#af').append(data.af)
				$('#de').append(data.de)
				$('#pt').append(data.pt)
				$('#pl').append(data.pl)
				$('#zh').append(data.zh)
				$('#fr').append(data.fr)
				$('#fi').append(data.fi)
				$('#it').append(data.it)
				$('#tr').append(data.tr)
				$('#en').text(data.en)
				$('#errorAlert').hide();
			}
		});
		event.preventDefault();
	});
});