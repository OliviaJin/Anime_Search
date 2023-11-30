document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const animeName = document.getElementById('animeName').value;

    fetch('/search?name=' + encodeURIComponent(animeName))
        .then(response => response.json())
        .then(data => {
            if (data && data.picture) {
                document.getElementById('animeImage').src = data.picture;
            } else {
                alert('Anime not found!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred!');
        });
});
