document.addEventListener("DOMContentLoaded", () => {

    const bgColor = document.getElementById("bgColor");
    const textColor = document.getElementById("textColor");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");
    const radius = document.getElementById("radius");

    const pageBgUpload = document.getElementById("pageBgUpload");
    const buttonBgUpload = document.getElementById("buttonBgUpload");

    const previewScreen = document.getElementById("previewScreen");
    const previewLogo = document.getElementById("previewLogo");
    const previewDesc = document.getElementById("previewDesc");

    const logoToggle = document.getElementById("showLogo");
    const descToggle = document.getElementById("showDescription");

    function getButtons() {
        return document.querySelectorAll(".preview-btn");
    }

    // لون الخلفية
    if (bgColor) {
        bgColor.addEventListener("input", () => {
            previewScreen.style.backgroundColor = bgColor.value;
        });
    }

    // لون النص
    if (textColor) {
        textColor.addEventListener("input", () => {
            previewScreen.style.color = textColor.value;
        });
    }

    // نوع الخط
    if (fontFamily) {
        fontFamily.addEventListener("change", () => {
            previewScreen.style.fontFamily = fontFamily.value;
        });
    }

    // حجم الخط
    if (fontSize) {
        fontSize.addEventListener("input", () => {
            previewScreen.style.fontSize = fontSize.value + "px";
        });
    }

    // استدارة الأزرار
    if (radius) {
        radius.addEventListener("input", () => {
            getButtons().forEach(btn => {
                btn.style.borderRadius = radius.value + "px";
            });
        });
    }

    // رفع خلفية الصفحة
    if (pageBgUpload) {
        pageBgUpload.addEventListener("change", function () {

            const file = this.files[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {
                previewScreen.style.backgroundImage =
                    `url(${e.target.result})`;

                previewScreen.style.backgroundSize = "cover";
                previewScreen.style.backgroundPosition = "center";
            };

            reader.readAsDataURL(file);
        });
    }

    // رفع خلفية الأزرار
    if (buttonBgUpload) {
        buttonBgUpload.addEventListener("change", function () {

            const file = this.files[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                getButtons().forEach(btn => {
                    btn.style.backgroundImage =
                        `url(${e.target.result})`;

                    btn.style.backgroundSize = "cover";
                    btn.style.backgroundPosition = "center";
                });

            };

            reader.readAsDataURL(file);
        });
    }

    // إظهار وإخفاء اللوجو
    if (logoToggle) {
        logoToggle.addEventListener("change", () => {
            previewLogo.style.display =
                logoToggle.checked ? "block" : "none";
        });
    }

    // إظهار وإخفاء الوصف
    if (descToggle) {
        descToggle.addEventListener("change", () => {
            previewDesc.style.display =
                descToggle.checked ? "block" : "none";
        });
    }

});
