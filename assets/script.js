function downloadFile() {
    const fileUrl = "../docs/Rick Mingione Resume 02-13-25.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "richard_mingione_cv.pdf";
    link.click();
}

document.getElementById("download-cv").addEventListener("click", downloadFile);