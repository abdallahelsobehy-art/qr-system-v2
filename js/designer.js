const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");
const showLogo = document.getElementById("showLogo");
const showDescription = document.getElementById("showDescription");

const preview = document.getElementById("preview");
const previewLogo = document.getElementById("previewLogo");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");

bgColor.addEventListener("input", () => {
    preview.style.backgroundColor = bgColor.value;
});

textColor.addEventListener("input", () => {
    preview.style.color = textColor.value;
});

showLogo.addEventListener("change", () => {
    previewLogo.style.display =
        showLogo.checked ? "block" : "none";
});

showDescription.addEventListener("change", () => {
    previewDescription.style.display =
        showDescription.checked ? "block" : "none";
});
