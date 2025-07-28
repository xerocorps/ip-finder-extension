document.addEventListener('DOMContentLoaded', () => {
  const ipList = document.getElementById('ipList');
  const status = document.getElementById('status');
  const copyButton = document.getElementById('copyButton');

  // Get active tab and execute content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ['content.js']
    }, () => {
      if (chrome.runtime.lastError) {
        status.textContent = 'Error: ' + chrome.runtime.lastError.message;
      }
    });
  });

  // Listen for results from content script
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'ipList') {
      status.remove();
      
      if (message.data.length === 0) {
        ipList.innerHTML = '<div>No IP addresses found</div>';
        return;
      }
      
      ipList.innerHTML = '';
      message.data.forEach(ip => {
        const ipElement = document.createElement('div');
        ipElement.className = 'ip-item';
        ipElement.textContent = ip;
        ipList.appendChild(ipElement);
      });
    }
  });

  // Copy functionality
  copyButton.addEventListener('click', () => {
    const ips = Array.from(document.querySelectorAll('.ip-item'))
      .map(el => el.textContent)
      .join('\n');
    
    navigator.clipboard.writeText(ips).then(() => {
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy to Clipboard';
      }, 2000);
    });
  });
});
