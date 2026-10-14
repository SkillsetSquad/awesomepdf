// AwsomePDF Chrome Extension - Background Service Worker

const AWSOMEPDF_URL = 'https://awsomepdf.com/en';

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    // Replace this extension's menus so updates do not leave the previous brand visible.
    chrome.contextMenus.removeAll(() => {
        // Create main context menu item
        chrome.contextMenus.create({
            id: 'awsomepdf-open',
            title: 'Open with AwsomePDF',
            contexts: ['link', 'page']
        });

        // Create submenu for specific tools
        chrome.contextMenus.create({
            id: 'awsomepdf-merge',
            parentId: 'awsomepdf-open',
            title: 'Merge PDFs',
            contexts: ['link', 'page']
        });

        chrome.contextMenus.create({
            id: 'awsomepdf-compress',
            parentId: 'awsomepdf-open',
            title: 'Compress PDF',
            contexts: ['link', 'page']
        });

        chrome.contextMenus.create({
            id: 'awsomepdf-convert',
            parentId: 'awsomepdf-open',
            title: 'Convert to PDF',
            contexts: ['link', 'page']
        });

        chrome.contextMenus.create({
            id: 'awsomepdf-all-tools',
            parentId: 'awsomepdf-open',
            title: 'All Tools →',
            contexts: ['link', 'page']
        });

        console.log('AwsomePDF context menus created');
    });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    let url = AWSOMEPDF_URL;

    switch (info.menuItemId) {
        case 'awsomepdf-merge':
            url = `${AWSOMEPDF_URL}/tools/merge-pdf`;
            break;
        case 'awsomepdf-compress':
            url = `${AWSOMEPDF_URL}/tools/compress-pdf`;
            break;
        case 'awsomepdf-convert':
            url = `${AWSOMEPDF_URL}/tools/jpg-to-pdf`;
            break;
        case 'awsomepdf-all-tools':
        case 'awsomepdf-open':
            url = AWSOMEPDF_URL;
            break;
        default:
            url = AWSOMEPDF_URL;
    }

    // Open AwsomePDF in a new tab
    chrome.tabs.create({ url: url });
});

// Log when service worker starts
console.log('AwsomePDF background service worker started');
