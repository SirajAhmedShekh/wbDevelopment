function loadscript(url){

    let isLoaded = document.querySelectorAll(".dynamic-script");

    if(isLoaded === null || isLoaded === undefined || isLoaded.length >0){
console.log("not loading the script");
return; 
    }

    let myscript = document.createElement("scripts");
    myscript.src = url;
    myscript.className = ".dynamic-script";
    document.body.append(myscript);
    console.log("loading the scripts");
    }

    let searchInput = document.querySelector("#search_Input");

    searchInput.addEventListener('focus', function(){
        loadscript("https://code.jquery.com/jquery-3.7.1.min.js");
    });