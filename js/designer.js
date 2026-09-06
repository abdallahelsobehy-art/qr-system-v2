document.getElementById("saveBtn").addEventListener("click",()=>{

    const settings = {
        bgColor: document.getElementById("bgColor").value,
        textColor: document.getElementById("textColor").value,
        showLogo: document.getElementById("showLogo").checked,
        showDescription: document.getElementById("showDescription").checked
    };

    console.log(settings);

});
