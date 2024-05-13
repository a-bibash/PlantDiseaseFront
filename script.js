// Add an event listener to the file input element
document.getElementById('imageUpload').addEventListener('change', function (event) {
    var file = event.target.files[0];

    if (!file) {
        return;
    }

    // Display the image preview
    displayImagePreview(file);
});

document.getElementById('predictButton').addEventListener('click', function () {
    var fileInput = document.getElementById('imageUpload');
    var file = fileInput.files[0];

    if (!file) {
        alert('Please select an image file.');
        return;
    }

    var formData = new FormData();
    formData.append('image', file);

    // Make a request to the Django API endpoint
    fetch('/predict_disease', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with the prediction result
            document.getElementById('result').innerText = 'Predicted Disease: ' + data.prediction;
            // Display suggestions for cure
            displaySuggestions(data.prediction);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayImagePreview(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = '';
        var img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('preview-image');
        imagePreview.appendChild(img);
    };
    reader.readAsDataURL(file);
}
