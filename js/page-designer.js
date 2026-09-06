document.addEventListener("DOMContentLoaded", () => {

    const bgColor = document.getElementById("bgColor");
    const textColor = document.getElementById("textColor");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");

    const btnColor = document.getElementById("btnColor");
    const btnTextColor = document.getElementById("btnTextColor");
    const btnRadius = document.getElementById("btnRadius");

    const bgImage = document.getElementById("bgImage");
    const btnBgImage = document.getElementById("btnBgImage");

    const previewPhone = document.getElementById("previewPhone");
    const previewButtons = document.querySelectorAll(".preview-btn");

    // خلفية الصفحة
    bgColor.addEventListener("input", () => {
        previewPhone.style.backgroundColor = bgColor.value;
    });

    // لون النص
    textColor.addEventListener("input", () => {
        previewPhone.style.color = textColor.value;
    });

    // نوع الخط
    fontFamily.addEventListener("change", () => {
        previewPhone.style.fontFamily = fontFamily.value;
    });

    // حجم الخط
    fontSize.addEventListener("input", () => {

        document.documentElement.style.setProperty(
            "--preview-font-size",
            fontSize.value + "px"
        );

    });

    // لون الأزرار
    btnColor.addEventListener("input", () => {

        previewButtons.forEach(btn => {
            btn.style.backgroundColor = btnColor.value;
        });

    });

    // لون نص الأزرار
    btnTextColor.addEventListener("input", () => {

        previewButtons.forEach(btn => {
            btn.style.color = btnTextColor.value;
        });

    });

    // استدارة الأزرار
    btnRadius.addEventListener("input", () => {

        previewButtons.forEach(btn => {
            btn.style.borderRadius = btnRadius.value + "px";
        });

    });

    // صورة خلفية الصفحة
    bgImage.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            previewPhone.style.backgroundImage =
                `url(${e.target.result})`;

            previewPhone.style.backgroundSize = "cover";
            previewPhone.style.backgroundPosition = "center";

        };

        reader.readAsDataURL(file);

    });

    // صورة خلفية الأزرار
    btnBgImage.addEventListener("change", function () {

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

});
