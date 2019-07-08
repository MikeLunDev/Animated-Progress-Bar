


/* HOW TO IMPLEMENT A DINAMIC LOADING BAR WITH BOOT4 PROGRESS BAR */
window.onload = () => {
    const btn = document.querySelector("#start");
    btn.addEventListener("click", loadingBar);
}
loadingBar = () => {
    const progressBar = document.querySelector("div.progress div.progress-bar");
    progressBar.parentElement.classList.toggle("d-none");
    let width = 0;
    let progress = setInterval(loading, 80);
    setTimeout(progress, 5000);
    function loading() {
        if (width <= 100) {
            width++;
            progressBar.style.width = width + "%";
        } else {
            clearInterval(progress);
            progressBar.classList.toggle("progress-bar-animated");
            setTimeout(function(){progressBar.parentElement.classList.toggle("d-none");},1800);
        }
    }
}
 