document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const copyCountSpan = document.getElementById("copyCount");

  let copyCount = parseInt(copyCountSpan.textContent);

  copyButton.addEventListener("click", () => {
    // Show an alert
    alert("Content copied!");

    copyCount++;
    copyCountSpan.textContent = copyCount;
  });
});
