function take_snapshot() {
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "Ninja1") {
            document.getElementById("result1").innerHTML = '<img id="Ninja1" src="' + data_uri + '"/>';
        }

        if (img_id == "Ninja2") {
            document.getElementById("result2").innerHTML = '<img id="Ninja2" src="' + data_uri + '"/>';
        }

        if (img_id == "Ninja3") {
            document.getElementById("result3").innerHTML = '<img id="Ninja3" src="' + data_uri + '"/>';
        }
    });
}

function speak() {
    var synth = window.speechSynthesis; Webcam.attach(camera); speak_data = "Taking your next Selfie in 5 seconds"; var utterThis = new SpeechSynthesisUtterance(speak_data); synth.speak(utterThis);
    setTimeout(function () {
        img_id = "Ninja1";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)


    setTimeout(function () {
        img_id = "Ninja2";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)



    setTimeout(function () {
        img_id = "Ninja2";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
}