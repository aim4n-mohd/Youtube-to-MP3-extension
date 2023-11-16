document.addEventListener('DOMContentLoaded', function() {
	var convertButton = document.getElementById('convertButton');
  
	convertButton.addEventListener('click', function() {
	  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var currentUrl = tabs[0].url;
		// You can now use the currentUrl to extract the YouTube video ID and construct a download link
		// Note: Extracting video ID and constructing download link might require additional logic
		// Use YouTube API for better handling, if necessary.
		
		// Simulate a download link for demonstration purposes (replace with actual logic)
		var videoId = extractVideoId(currentUrl);

		
		// Function to extract YouTube video ID from URL
		function extractVideoId(url) {
			var match = url.match(/[?&]v=([^&]+)/);
			return match && match[1] ? match[1] : null;
		}
				
		console.log('YouTube video ID:', videoId);

		var downloadLink = 'https://v3.mp3youtube.cc/download/' + videoId;
		// Open the download link in a new tab
		chrome.tabs.create({ url: downloadLink });

		
		
	  });
	});
  });
  