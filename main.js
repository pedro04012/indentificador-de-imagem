function setup() {
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded() {
        console.log('modelo carregado');
}
function draw() {
        image(video, 0, 0, 300, 300);
        classifier.classify(video, gotResult);

}
function gotResult(error, results) {
        if (error) {
                console.error(error);

        }
        else{
             previousResult = result[0].label;
                                var synth = window.speechSynthesis;
                                 speakData = 'O objeto detectado é - ' + results[0].label;
                                var utterThis = new SpeechSynthesisUtterance(speakData);
                      if ((result[0].confidence > 0.5) && (previousResult != Results[0].label)) {
                                console.log(results);
                                              synth.speak(utterThis);
                                  document.getElementById("resultObjectName").innerHTML = results[0].label;
                               document.getElementById("resultObjectPrecision").innerHTML = results[0].confidence.toFixed(3);
                }
        }
}


