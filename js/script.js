$(document).ready(function() {
    var shareData = {
        title: 'MDN',
        text: 'This is Custom MSG',
        url: 'http://vodafone.in/',
    }
    $('.shareBtn').on('click', function() {
        navigator.share(shareData);
    });
});