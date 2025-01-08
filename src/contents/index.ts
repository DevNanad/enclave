import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://mail.google.com/*"]
}

// export const config: PlasmoCSConfig = {
//   matches: ["<all_urls>"],
//   all_frames: true
// }

//get body of an open gmail

let lastLoggedEmailBody = ""

// Function to extract plain text from HTML
function getEmailContent() {
  const emailBodyElement = document.querySelector("div.a3s") // Update selector as needed

  if (emailBodyElement) {
    // Create a temporary element to extract plain text
    const tempElement = document.createElement("div")
    tempElement.innerHTML = emailBodyElement.innerHTML // Set HTML content
    const plainText = tempElement.textContent || tempElement.innerText || "" // Extract text content
    return plainText.trim() // Return trimmed plain text
  }
  return "No email content found"
}

// Debounce function to limit how often the email content is logged
function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// Function to handle email content and prevent redundant logging
async function handleEmailContent() {
  const emailBody = getEmailContent()
  if (
    emailBody !== "No email content found" &&
    emailBody !== lastLoggedEmailBody
  ) {
    lastLoggedEmailBody = emailBody // Update last logged content
    console.log("Extracted Email Body:", emailBody) // Log to console for testing
    chrome.runtime.sendMessage({
      action: "logEmailContent",
      content: emailBody
    })
  }
}

// Create a debounced version of the handleEmailContent function
const debouncedHandleEmailContent = debounce(handleEmailContent, 1000)

// Function to observe changes in Gmail DOM
function observeEmailClick() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        debouncedHandleEmailContent() // Use debounced function
      }
    })
  })

  // Observe the body for changes to detect when an email is opened
  observer.observe(document.body, { childList: true, subtree: true })
}

// Start observing changes
observeEmailClick()
