document.addEventListener("DOMContentLoaded", () => {

    const phonePreview = document.getElementById("phonePreview");

    const bgInput = document.getElementById("bgUpload");
    const btnBgInput = document.getElementById("btnBgUpload");

    const titleColor = document.getElementById("titleColor");
    const descColor = document.getElementById("descColor");

    const fontFamily = document.getElementById("fontFamily");

    const buttonRadius = document.getElementById("buttonRadius");
    const buttonTextColor = document.getElementById("buttonTextColor");

    const pageTitle = document.getElementById("pageTitle");
    const pageDesc = document.getElementById("pageDesc");

    const previewTitle = document.getElementById("previewTitle");
    const previewDesc = document.getElementById("previewDesc");

    // تغيير العنوان
    pageTitle.addEventListener("input", () => {
        previewTitle.innerText = pageTitle.value;
    });

    // تغيير الوصف
    pageDesc.addEventListener("input", () => {
        previewDesc.innerText = pageDesc.value;
    });

    // لون العنوان
    titleColor.addEventListener("input", () => {
        previewTitle.style.color = titleColor.value;
    });

    // لون الوصف
    descColor.addEventListener("input", () => {
        previewDesc.style.color = descColor.value;
    });

    // نوع الخط
    fontFamily.addEventListener("change", () => {
        phonePreview.style.fontFamily = fontFamily.value;
    });

    // تدوير الأزرار
    buttonRadius.addEventListener("input", () => {
        document.querySelectorAll(".preview-btn").forEach(btn => {
            btn.style.borderRadius = buttonRadius.value + "px";
        });
    });

    // لون نص الأزرار
    buttonTextColor.addEventListener("input", () => {
        document.querySelectorAll(".preview-btn").forEach(btn => {
            btn.style.color = buttonTextColor.value;
        });
    });

    // خلفية الصفحة
    bgInput.addEventListener("change", function () {

        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e){
            phonePreview.style.backgroundImage =
                `url('${e.target.result}')`;

            phonePreview.style.backgroundSize = "cover";
            phonePreview.style.backgroundPosition = "center";
        };

        reader.readAsDataURL(file);

    });

    // خلفية الأزرار
    btnBgInput.addEventListener("change", function () {

        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            document.querySelectorAll(".preview-btn").forEach(btn => {

                btn.style.backgroundImage =
                    `url('${e.target.result}')`;

                btn.style.backgroundSize = "cover";
                btn.style.backgroundPosition = "center";

            });

        };

        reader.readAsDataURL(file);

    });

});
