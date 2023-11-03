console.log("Loading js ");

//for a tags show and hide
const btn = document.getElementById('back-button');
const BtnAlbum = document.getElementById('btnAlbum');
const BtnStories = document.getElementById('btnStories');
const BtnPictures = document.getElementById('btnPictures');


const Album = document.getElementById('album');
const Stories = document.getElementById('stories');
const Pictures = document.getElementById('pictures');
const Pictures1 = document.getElementById('PICTURE');

BtnAlbum.addEventListener('click', function () {
    console.log("Album");
    Album.style.display = 'block';
    Stories.style.display = 'none';
    Pictures.style.display = 'none';
    btn.style.display = 'block';
    Pictures1.style.display = 'none';
});

BtnStories.addEventListener('click', function () {
    console.log("Stories");
    Album.style.display = 'none';
    Stories.style.display = 'block';
    Pictures.style.display = 'none';
    btn.style.display = 'block';
    Pictures1.style.display = 'none';
});

BtnPictures.addEventListener('click', function () {
    console.log("pictures");
    Album.style.display = 'none';
    Stories.style.display = 'none';
    Pictures.style.display = 'block';
    btn.style.display = 'block';
    Pictures1.style.display = 'none';
});

function goBack() {
    window.history.back(); // This function takes you back to the previous page in the browser's history.
    Album.style.display = 'none';
    Stories.style.display = 'none';
    Pictures.style.display = 'none';
    Pictures1.style.display = 'block';
    btn.style.display = 'none';
    btn.classList.add('PICTURE');
}

function showImages() {
    var viewImages = document.getElementById("view-images1");
    viewImages.style.display = "block";
}