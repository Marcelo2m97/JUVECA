const xhr = new XMLHttpRequest();
const content = document.getElementById("content");
window.onload = firstLoad;

function loadOnXHR(){
    xhr.onload = function(){
        if(this.status === 200){
            content.innerHTML = xhr.responseText
        }else{
            console.warn("It wasn't recieve 200 OK from response.")
        }
    };
}

function firstLoad(){
    loadOnXHR();

    xhr.open('GET', 'home.html');
    xhr.send();
}

function loadNewContent(clicker){
    loadOnXHR();

    switch(clicker){
        case 1:
            xhr.open('GET', 'dist/home.html');
            break;
        case 2:
            xhr.open('GET', 'dist/aboutUs.html');
            break;
        case 3:
            xhr.open('GET', 'dist/prayers.html');
            break;
        case 4:
            xhr.open('GET', 'dist/juvecaContent.html');
            break;
        case 5:
            xhr.open('GET', 'dist/contactUs.html');
            break;
    }

    xhr.send();
}
