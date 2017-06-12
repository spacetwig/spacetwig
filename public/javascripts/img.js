//Function to show image before upload

$(document).ready(function() {

  // Prepare the preview for profile picture
    $("#wizard-picture").change(function(){
        readURL(this);
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}


/* (function () {
  var uploader = document.createElement('input'),
    image = document.getElementById('img-result');

  uploader.type = 'file';
  uploader.accept = 'image/*';

  image.onclick = function() {
    uploader.click();
  }

  uploader.onchange = function() {
    var reader = new FileReader();
    reader.onload = function(evt) {
      image.classList.remove('no-image');
      image.style.backgroundImage = 'url(' + evt.target.result + ')';
      var request = {
        itemtype: 'test 1',
        brand: 'test 2',
        images: [{
          data: evt.target.result
        }]
      };

      document.querySelector('.show-button').style.display = 'block';
      document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
    }
    reader.readAsDataURL(uploader.files[0]);
  }

  document.querySelector('.hide-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'none';
  };

  document.querySelector('.show-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'block';
  };
})(); */
