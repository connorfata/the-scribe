document.getElementById('transcription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    fetch('/transcribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'url': url
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('transcription-result').innerText = 'Error: ' + data.error;
        } else {
            document.getElementById('transcription-result').innerText = data.transcript;
        }
    })
    .catch(error => console.error('Error:', error));
});
