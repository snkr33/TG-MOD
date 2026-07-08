let currentCode = "";

function copyCode(code) {
    currentCode = code;
    document.getElementById("popup").style.display = "flex";
}

document.getElementById("continueBtn").onclick = function () {
    navigator.clipboard.writeText(currentCode).then(() => {
        alert("✅ Code Copied!");
        document.getElementById("popup").style.display = "none";
    });
};
