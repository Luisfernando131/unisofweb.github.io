window.onload = function () {
    const buttons =
        Array.from(document.querySelectorAll("input[type='button']"));
    const form = document.forms['calculator'];
    const clean = document.getElementById("clean");



    buttons.forEach(function (button, i) {
        button.addEventListener("click", function () {
            if (this.value === "=") {
                form.screen.value = eval(form.screen.value);
            } else {
                form.screen.value += this.value;
            }

        });
    });
    clean.addEventListener("click", function () {
        form.screen.value = "";
    });

}