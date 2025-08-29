document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("HeadercopyButton");
  const copyCountSpan = document.getElementById("copyCount");

  let copyCount = parseInt(copyCountSpan.textContent);

  copyButton.addEventListener("click", () => {
    // Show an alert
    alert("Content copied!");

    copyCount++;
    copyCountSpan.textContent = copyCount;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Nav bar elements
  const copyCountSpan = document.getElementById("copyCount");
  const heartCountSpan = document.getElementById("heartCount");
  const coinCountSpan = document.getElementById("coinCount");

  // Initialize counts from the DOM
  let copyCount = parseInt(copyCountSpan.textContent);
  let heartCount = parseInt(heartCountSpan.textContent);
  let coinCount = parseInt(coinCountSpan.textContent);

  // Main section elements
  const cards = document.querySelectorAll(".card");
  const historyList = document.querySelector(".call-history-list");
  const clearHistoryButton = document.querySelector(".clear-history-button");

  // Attach event listeners to each card
  cards.forEach((card) => {
    const favoriteIcon = card.querySelector(".card-favorite i");
    const cardCopyButton = card.querySelector(".card-actions .copy-button");
    const callButton = card.querySelector(".card-actions .call-button");

    // Heart icon logic
    favoriteIcon.addEventListener("click", () => {
      if (favoriteIcon.classList.contains("far")) {
        favoriteIcon.classList.remove("far");
        favoriteIcon.classList.add("fas");
        heartCount++;
      } else {
        favoriteIcon.classList.remove("fas");
        favoriteIcon.classList.add("far");
        heartCount--;
      }
      heartCountSpan.textContent = heartCount;
    });

    // Copy button logic
    cardCopyButton.addEventListener("click", () => {
      const hotlineNumber = card.dataset.hotlineNumber;
      navigator.clipboard
        .writeText(hotlineNumber)
        .then(() => {
          alert(
            `The number ${hotlineNumber} has been copied to your clipboard.`
          );
          copyCount++;
          copyCountSpan.textContent = copyCount;
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert("Failed to copy the number.");
        });
    });

    // Call button logic
    callButton.addEventListener("click", () => {
      const serviceName = card.dataset.serviceName;
      const hotlineNumber = card.dataset.hotlineNumber;
      const costPerCall = 20;

      if (coinCount < costPerCall) {
        alert(
          `Cannot make a call to ${serviceName}. You only have ${coinCount} coins, and a call costs 20 coins.`
        );
        return;
      }

      coinCount -= costPerCall;
      coinCountSpan.textContent = coinCount;
      alert(
        `Calling ${serviceName} at ${hotlineNumber}.\nRemaining coins: ${coinCount}`
      );

      // Add service to Call History
      const callTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const historyItem = document.createElement("div");
      historyItem.classList.add("history-item");
      historyItem.innerHTML = `
              <div class="history-item-details">
                  <div class="history-item-name">${serviceName}</div>
                  <div class="history-item-number">${hotlineNumber}</div>
              </div>
              <div class="history-item-time">${callTime}</div>
          `;
      historyList.prepend(historyItem);
    });
  });

  // Clear History button logic
  clearHistoryButton.addEventListener("click", () => {
    while (historyList.firstChild) {
      historyList.removeChild(historyList.firstChild);
    }
  });
});
