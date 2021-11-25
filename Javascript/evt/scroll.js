window.addEventListener("scroll", scroll);

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let result = (scrollTop + clientHeight) / scrollHeight * 100;
    console.log(result);
    document.getElementById("myBar").style.width = result+"%";
}
