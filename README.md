---

# Text Copy Extension to Google Keep
## Overview
The Text Copy Extension to Google Keep is a Chrome extension that allows you to easily copy text and create notes in Google Keep. It simplifies the process of copying text from a webpage and saving it as a note.

## Features
- Copy text from a webpage.
- Create a note in Google Keep with the copied text.
- Quick and convenient way to save important information.

## Installation
1. Download the extension from the Chrome Web Store (link to be provided).
2. Click on the extension icon in the Chrome toolbar to activate it.

## How it Works

### background.js
The `background.js` file handles the OAuth configuration and initiates the OAuth flow for authentication with Google Keep.

```javascript

// OAuth configuration

const oauthConfig = {

  interactive: true,

  scopes: ["https://www.googleapis.com/auth/keep"]

};

// Initiate OAuth flow

chrome.identity.getAuthToken(oauthConfig, function (token) {

  // ... (authentication process)

});

```

### manifest.json

The `manifest.json` file defines the extension's properties, including its name, version, permissions, and background script.

```json
{

  "manifest_version": 3,

  "name": "Text Copy Extension",

  "version": "1.0",

  "permissions": [

    "activeTab",

    "contextMenus",

    "clipboardWrite",

    "identity"

  ],

  // ... (other properties)

}

```

## Usage
1. Click on the extension icon in the Chrome toolbar.
2. A popup window will appear with the copied text (if available).
3. Click the "Create Note" button to save the text as a note in Google Keep.

## Tools and Videos that helped
https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/
https://www.freecodecamp.org/news/building-chrome-extension/
https://www.youtube.com/watch?v=0n809nd4Zu4&t=1008s
https://www.youtube.com/watch?v=B8Ihv3xsWYs
https://www.youtube.com/watch?v=uV4L-wcnK3Y&t=352s
https://www.youtube.com/watch?v=UWSxfcWHejY&t=109s
https://www.youtube.com/watch?v=I5ili_1G0Vk&t=444s
https://www.youtube.com/watch?v=bhZMYaKmxGo&t=191s
https://www.youtube.com/watch?v=brCkpzAD0gc
https://chat.openai.com/ (For help with understanding code and answers to difficult points that I needed to understand in order to continue)
https://www.deepl.com/translator (For translations of concepts I didn't understand)

## Problems I'm facing...
From what I read the google keep API can work when the extention is normally uploaded to the web store, but because it takes 5€ to upload it I didn't go ahead but I thought it was a good idea and I wanted to share it with you


## Contributors
- [Christos Anastasiou]


---

# Extention αντιγραφής κειμένου στο Google Keep
## Επισκόπηση
Η επέκταση Text Copy Extension to Google Keep είναι μια επέκταση του Chrome που σας επιτρέπει να αντιγράφετε εύκολα κείμενο και να δημιουργείτε σημειώσεις στο Google Keep. Απλοποιεί τη διαδικασία αντιγραφής κειμένου από μια ιστοσελίδα και την αποθήκευσή του ως σημείωση.

## Χαρακτηριστικά
- Αντιγραφή κειμένου από μια ιστοσελίδα.
- Δημιουργήστε μια σημείωση στο Google Keep με το κείμενο που αντιγράψατε.
- Γρήγορος και βολικός τρόπος αποθήκευσης σημαντικών πληροφοριών.

## Εγκατάσταση
1. Πραγματοποιήστε λήψη της επέκτασης από το Chrome Web Store (θα σας δοθεί σύνδεσμος).
2. Κάντε κλικ στο εικονίδιο της επέκτασης στη γραμμή εργαλείων του Chrome για να την ενεργοποιήσετε.

## Πώς λειτουργεί

### background.js
Το αρχείο `background.js` διαχειρίζεται τη διαμόρφωση του OAuth και ξεκινά τη ροή OAuth για τον έλεγχο ταυτότητας με το Google Keep.

```javascript

// Ρύθμιση παραμέτρων OAuth

const oauthConfig = {

  interactive: true,

  scopes: ["https://www.googleapis.com/auth/keep"]

};

// Έναρξη ροής OAuth

chrome.identity.getAuthToken(oauthConfig, function (token) {

  // ... (διαδικασία ελέγχου ταυτότητας)

});

```
### manifest.json

Το αρχείο `manifest.json` ορίζει τις ιδιότητες της επέκτασης, συμπεριλαμβανομένου του ονόματος, της έκδοσης, των δικαιωμάτων και του σεναρίου υποβάθρου.

```json

{

  "manifest_version": 3,

  "name": "Text Copy Extension": "Επέκταση αντιγραφής κειμένου",

  "version": "1.0",

  "permissions": [

    "activeTab",

    "contextMenus",

    "clipboardWrite",

    "identity"

  ],

  // ... (άλλες ιδιότητες)

}

```

## Χρήση
1. Κάντε κλικ στο εικονίδιο της επέκτασης στη γραμμή εργαλείων του Chrome.
2. Θα εμφανιστεί ένα αναδυόμενο παράθυρο με το αντιγραμμένο κείμενο (εάν είναι διαθέσιμο).
3. Κάντε κλικ στο κουμπί "Δημιουργία σημείωσης" για να αποθηκεύσετε το κείμενο ως σημείωση στο Google Keep.

## Εργαλεία και βίντεο που βοήθησαν
https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/
https://www.freecodecamp.org/news/building-chrome-extension/
https://www.youtube.com/watch?v=0n809nd4Zu4&t=1008s
https://www.youtube.com/watch?v=B8Ihv3xsWYs
https://www.youtube.com/watch?v=uV4L-wcnK3Y&t=352s
https://www.youtube.com/watch?v=UWSxfcWHejY&t=109s
https://www.youtube.com/watch?v=I5ili_1G0Vk&t=444s
https://www.youtube.com/watch?v=bhZMYaKmxGo&t=191s
https://www.youtube.com/watch?v=brCkpzAD0gc
https://chat.openai.com/ (Για βοήθεια στην κατανόηση του κώδικα και απαντήσεις σε δύσκολα σημεία που έπρεπε να καταλάβω για να συνεχίσω)
https://www.deepl.com/translator (Για μεταφράσεις εννοιών που δεν κατάλαβα)

## Προβλήματα που αντιμετωπίζω...
Από ό, τι διάβασα το google keep API μπορεί να λειτουργήσει όταν η επέκταση ανεβαίνει κανονικά στο web store, αλλά επειδή χρειάζεται 5€ για να το ανεβάσω δεν προχώρησα, αλλά σκέφτηκα ότι ήταν μια καλή ιδέα και ήθελα να τη μοιραστώ μαζί σας


## Συντελεστές
- [Christos Anastasiou]




   
