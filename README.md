# IP Address Finder Chrome Extension

A simple, modern Chrome extension that extracts all IPv4 and IPv6 addresses (with optional ports) from any webpage’s visible text and displays them in a popup. Ideal for developers, security researchers, and network administrators who need to quickly identify IPs on a page.

## 🔍 Features

- **IPv4 \& IPv6 Detection**
    - Supports full-range IPv4 addresses (0.0.0.0–255.255.255.255) with optional port numbers
    - Recognizes compressed, mixed, and scoped IPv6 formats
- **Real-time Extraction**
    - Scans page content on demand when opening the extension popup
- **Clean UI**
    - Modern popup listing unique addresses
    - Copy-to-clipboard functionality
- **Lightweight \& Fast**
    - Minimal permissions (`activeTab`, `scripting`)
    - No external dependencies


## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/xerocorps/ip-finder-extension.git
cd ip-finder-extension
```

2. **Load into Chrome**
    - Open `chrome://extensions/`
    - Enable **Developer mode** (top right)
    - Click **Load unpacked** and select this project’s root directory

## 📂 Project Structure

```
ip-finder-extension/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── content.js         # Scans page text and extracts IP addresses
├── popup.html         # Popup UI markup
├── popup.js           # Popup logic and message handling
└── manifest.json      # Extension configuration (Manifest V3)
```


## ⚙️ Usage

1. Navigate to any webpage.
2. Click the extension icon in the toolbar.
3. View the list of detected IP addresses in the popup.
4. Click **Copy** to copy all addresses to your clipboard.

## 💡 Customization

- Adjust regex patterns in `content.js` for custom IP formats or port restrictions.
- Modify popup styling via `popup.html` and CSS to match your branding.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

*Happy IP hunting!*

<div style="text-align: center">⁂</div>
