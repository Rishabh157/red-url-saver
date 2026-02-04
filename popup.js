document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('current-url');
    const remarkInput = document.getElementById('remark');
    const saveBtn = document.getElementById('save-btn');
    const savedList = document.getElementById('saved-list');

    // 1. Get the current Active Tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0) {
            urlInput.value = tabs[0].url;
        }
    });

    // 2. Load saved items on startup
    loadSavedItems();

    // 3. Save Button Logic
    saveBtn.addEventListener('click', () => {
        const url = urlInput.value;
        const remark = remarkInput.value;

        if (!url) return;

        const newItem = {
            id: Date.now(), // Unique ID based on timestamp
            url: url,
            remark: remark || "No remark",
            date: new Date().toLocaleDateString()
        };

        // Get existing items, add new one, and save back
        chrome.storage.sync.get(['savedUrls'], (result) => {
            const items = result.savedUrls || [];
            items.unshift(newItem); // Add to the top of the list

            chrome.storage.sync.set({ savedUrls: items }, () => {
                remarkInput.value = ''; // Clear input
                loadSavedItems(); // Refresh UI
            });
        });
    });

    // 4. Function to Render List
    function loadSavedItems() {
        chrome.storage.sync.get(['savedUrls'], (result) => {
            const items = result.savedUrls || [];
            savedList.innerHTML = '';

            if (items.length === 0) {
                savedList.innerHTML = '<li class="empty-state">No saved links yet.</li>';
                return;
            }

            items.forEach((item) => {
                const li = document.createElement('li');
                li.className = 'saved-item';

                li.innerHTML = `
                    <a href="${item.url}" target="_blank" title="${item.url}">${item.url}</a>
                    <p><strong>Note:</strong> ${item.remark}</p>
                    <button class="delete-btn" data-id="${item.id}">Remove</button>
                `;

                savedList.appendChild(li);
            });

            // Add delete listeners
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idToDelete = Number(e.target.getAttribute('data-id'));
                    deleteItem(idToDelete);
                });
            });
        });
    }

    // 5. Delete Logic
    function deleteItem(id) {
        chrome.storage.sync.get(['savedUrls'], (result) => {
            const items = result.savedUrls || [];
            const filteredItems = items.filter(item => item.id !== id);

            chrome.storage.sync.set({ savedUrls: filteredItems }, () => {
                loadSavedItems();
            });
        });
    }
});
