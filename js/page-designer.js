document.addEventListener("DOMContentLoaded", () => {

    const bgColor = document.getElementById("bgColor");
    const textColor = document.getElementById("textColor");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");
    const radius = document.getElementById("radius");

    const pageBgUpload = document.getElementById("pageBgUpload");
    const buttonBgUpload = document.getElementById("buttonBgUpload");

    const previewScreen = document.getElementById("previewScreen");
    const previewButtons = document.querySelectorAll(".preview-btn");

    const logoToggle = document.getElementById("showLogo");
    const descToggle = document.getElementById("showDescription");

    const previewLogo = document.getElementById("previewLogo");
    const previewDesc = document.getElementById("previewDesc");

    // لون الخلفية
    bgColor.addEventListener("input", () => {
        previewScreen.style.backgroundColor = bgColor.value;
    });

    // لون النص
    textColor.addEventListener("input", () => {
        previewScreen.style.color = textColor.value;
    });

    // الخط
    fontFamily.addEventListener("change", () => {
        previewScreen.style.fontFamily = fontFamily.value;
    });

    // حجم الخط
    fontSize.addEventListener("input", () => {
        previewScreen.style.fontSize = fontSize.value + "px";
    });

    // استدارة الأزرار
    radius.addEventListener("input", () => {

        previewButtons.forEach(btn => {
            btn.style.borderRadius = radius.value + "px";
        });

    });

    // صورة الخلفية
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

    // خلفية الأزرار
    buttonBgUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            previewButtons.forEach(btn => {

                btn.style.backgroundImage =
                    `url(${e.target.result})`;

                btn.style.backgroundSize = "cover";
                btn.style.backgroundPosition = "center";

            });

        };

        reader.readAsDataURL(file);

    });

    // اظهار اللوجو
    logoToggle.addEventListener("change", () => {

        previewLogo.style.display =
            logoToggle.checked ? "block" : "none";

    });

    // اظهار الوصف
    descToggle.addEventListener("change", () => {

        previewDesc.style.display =
            descToggle.checked ? "block" : "none";

    });

});document.addEventListener("DOMContentLoaded", () => {

    const bgColor = document.getElementById("bgColor");
    const textColor = document.getElementById("textColor");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");
    const radius = document.getElementById("radius");

    const pageBgUpload = document.getElementById("pageBgUpload");
    const buttonBgUpload = document.getElementById("buttonBgUpload");

    const previewScreen = document.getElementById("previewScreen");
    const previewButtons = document.querySelectorAll(".preview-btn");

    const logoToggle = document.getElementById("showLogo");
    const descToggle = document.getElementById("showDescription");

    const previewLogo = document.getElementById("previewLogo");
    const previewDesc = document.getElementById("previewDesc");

    // لون الخلفية
    bgColor.addEventListener("input", () => {
        previewScreen.style.backgroundColor = bgColor.value;
    });

    // لون النص
    textColor.addEventListener("input", () => {
        previewScreen.style.color = textColor.value;
    });

    // الخط
    fontFamily.addEventListener("change", () => {
        previewScreen.style.fontFamily = fontFamily.value;
    });

    // حجم الخط
    fontSize.addEventListener("input", () => {
        previewScreen.style.fontSize = fontSize.value + "px";
    });

    // استدارة الأزرار
    radius.addEventListener("input", () => {

        previewButtons.forEach(btn => {
            btn.style.borderRadius = radius.value + "px";
        });

    });

    // صورة الخلفية
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

    // خلفية الأزرار
    buttonBgUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            previewButtons.forEach(btn => {

                btn.style.backgroundImage =
                    `url(${e.target.result})`;

                btn.style.backgroundSize = "cover";
                btn.style.backgroundPosition = "center";

            });

        };

        reader.readAsDataURL(file);

    });

    // اظهار اللوجو
    logoToggle.addEventListener("change", () => {

        previewLogo.style.display =
            logoToggle.checked ? "block" : "none";

    });

    // اظهار الوصف
    descToggle.addEventListener("change", () => {

        previewDesc.style.display =
            descToggle.checked ? "block" : "none";

    });

});
