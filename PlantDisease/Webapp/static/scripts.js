<script>
    document.getElementById('imageUpload').addEventListener('change', handleFileSelect);
    
    function handleFileSelect(event) {
        var file = event.target.files[0];
        if (isImage(file)) {
            displayImagePreview(file);
            enablePredictButton();
        } else {
            alert('Please select a valid image file.');
            resetFileInput();
        }
    }
    
    function enablePredictButton() {
        var predictButton = document.getElementById('predictButton');
        predictButton.disabled = false;
    }
    
    function isImage(file) {
        return file && file.type.startsWith('image/');
    }
    
    function resetFileInput() {
        var fileInput = document.getElementById('imageUpload');
        fileInput.value = ''; // Clear the file input
    }
    
    var dropzone = document.getElementById('dropzone');
    dropzone.addEventListener('click', function() {
        document.getElementById('imageUpload').click();
    });
    
    dropzone.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropzone.classList.add('dragover');
    });
    
    dropzone.addEventListener('dragleave', function() {
        dropzone.classList.remove('dragover');
    });
    
    dropzone.addEventListener('drop', function(event) {
        event.preventDefault();
        dropzone.classList.remove('dragover');
        var file = event.dataTransfer.files[0];
        if (isImage(file)) {
            displayImagePreview(file);
            enablePredictButton();
        } else {
            alert('Please drop a valid image file.');
        }
    });
    
    document.getElementById('predictButton').addEventListener('click', function() {
        var fileInput = document.getElementById('imageUpload');
        var file = fileInput.files[0];
        if (!file) {
            alert('Please select an image file.');
        } else {
            // Make the prediction request or perform other actions here
        }
    });
    
    function displayImagePreview(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = '';
            var img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-image');
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
</script>