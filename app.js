var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("erroe occured", error);
    alert("Something went wrong with server! try again after sometime")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)