// OAuth configuration
const oauthConfig = {
    interactive: true,
    scopes: ["https://www.googleapis.com/auth/keep"]
  };
  
  // Initiate OAuth flow
  chrome.identity.getAuthToken(oauthConfig, function (token) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
  
    // Use the obtained token for authenticated API requests
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    // Example API request to create a note
    fetch('https://keep.googleapis.com/v1/notes', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        title: 'Copied Text',
        textContent: 'Your copied text goes here.'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Note created:', data);
    })
    .catch(error => {
      console.error('Error creating note:', error);
    });
  });
  