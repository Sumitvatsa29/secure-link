// copy from chat gpt i have to re write this code in my own way

// Function to get features for the machine learning model
function getLinkFeatures(link) {
    // Placeholder for actual feature extraction logic
    return [/* features based on the link */];
  }
  
  // Function to highlight a link (understand this one)
  function highlightLink(link, isMalicious) {
    if (isMalicious) {
      link.style.backgroundColor = "red";
      link.title = "This link is potentially malicious!";
    }
  }
  
  // Function to classify and highlight links 
  function classifyAndHighlightLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const features = getLinkFeatures(link.href);
      chrome.runtime.sendMessage({ action: "classifyLink", features }, (response) => {
        if (response && response.isMalicious) {
          highlightLink(link, true);
        }
      });
    });
  }
  
  // Run the function on page load
  classifyAndHighlightLinks();
  