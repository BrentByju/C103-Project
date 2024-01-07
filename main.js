var va = "e";

Webcam.set({
    width: 200,
    height:200,
    image_format: 'png',
    png_quality: 100

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_photo(){
    Webcam.snap(function(data_url){
        va = '<img id="captured_image" src"'+data_url+'"/>';
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
        console.log(va);
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x2P1NJgtm/model.json', modelLoaded);

