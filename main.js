Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(' #camera ');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tapZHyITe/model.json' , modelLoaded);

function modelLoaded(){
    console.log('Model Loaded !');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "This the prediction " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
}