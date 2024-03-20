if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
    .then(function(registration) {
        console.log('Service Worker Registered');
    }).catch(function(error) {
        console.log('Service Worker Registration Failed:', error);
    }
    );
}