document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('adBlockerRules', (data) => {
      document.getElementById('blocklist').value = data.adBlockerRules || '';
    });
  
    document.getElementById('save').addEventListener('click', () => {
      const blocklist = document.getElementById('blocklist').value.split('\n').filter(line => line.trim() !== '');
      chrome.storage.sync.set({ adBlockerRules: blocklist }, () => {
        alert('Blocklist updated!');
      });
    });
  });
  