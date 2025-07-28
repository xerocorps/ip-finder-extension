// IPv4 regex: matches 0.0.0.0 to 255.255.255.255 with optional port
const IPV4_REGEX = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::(\d{1,5}))?\b/g;

// IPv6 regex: matches various formats including compressed and mixed
const IPV6_REGEX = /(?:^|[\s>])((?:[\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}|::(?:[\da-fA-F]{1,4}:){0,5}[\da-fA-F]{1,4}|[\da-fA-F]{1,4}::(?:[\da-fA-F]{1,4}:){0,5}[\da-fA-F]{1,4}|(?:[\da-fA-F]{1,4}:){1,6}:[\da-fA-F]{1,4}|(?:[\da-fA-F]{1,4}:){1}:[\da-fA-F]{1,4}|(?:[\da-fA-F]{1,4}:){1,2}:[\da-fA-F]{1,4}|(?:[\da-fA-F]{1,4}:){1,3}:[\da-fA-F]{1,4}|(?:[\da-fA-F]{1,4}:){1,4}:[\da-fA-F]{1,4}|:(?::[\da-fA-F]{1,4}){1,7}|[\da-fA-F]{1,4}:(?::[\da-fA-F]{1,4}){1,7}|fe80:(?::[\da-fA-F]{0,4}){0,4}%[\da-zA-Z]+|::(?:ffff(?::0{1,4})?:)?((?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|\[?[\da-fA-F:]+:[\da-fA-F]+\]?)(?:[^\w:]|$)/g;

// Find all IP addresses in text content
const textContent = document.body.innerText;
const ipAddresses = new Set();

// Find IPv4 matches
let match;
while ((match = IPV4_REGEX.exec(textContent)) !== null) {
  ipAddresses.add(match[0]);
}

// Find IPv6 matches
while ((match = IPV6_REGEX.exec(textContent)) !== null) {
  let ip = match[1].trim();
  // Remove trailing invalid characters
  if (ip.endsWith(':') || ip.endsWith('-') || ip.endsWith(']')) {
    ip = ip.slice(0, -1);
  }
  ipAddresses.add(ip);
}

// Send results to popup
chrome.runtime.sendMessage({
  type: 'ipList',
  data: Array.from(ipAddresses)
});
