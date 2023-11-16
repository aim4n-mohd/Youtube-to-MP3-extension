// content.js
// This script can be used to manipulate the YouTube page if needed
// For simplicity, this example doesn't include any YouTube page manipulation

// You may use this script to extract YouTube video information if needed
// Example: Extracting video ID
var videoId = window.location.search.split('v=')[1];
var ampersandPosition = videoId.indexOf('&');
if (ampersandPosition !== -1) {
  videoId = videoId.substring(0, ampersandPosition);
}

console.log('YouTube video ID:', videoId);
