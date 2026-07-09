let currentDownloadLink = "";

function openDownloadPopup1() {
    currentDownloadLink = "https://wgo360.com/b/d7958e";
    document.getElementById("downloadPopup").classList.add("show");
}

function openDownloadPopup2() {
    currentDownloadLink = "https://t.me/tgmodxyz";
    document.getElementById("downloadPopup").classList.add("show");
}

function closeDownloadPopup() {
    document.getElementById("downloadPopup").classList.remove("show");
}

document.getElementById("continueBtn").addEventListener("click", function() {
    if (currentDownloadLink) {
        window.location.href = currentDownloadLink;
    }
});
