function delayRedirect(event, url) {
    event.preventDefault(); 
    setTimeout(function() {
        window.location.href = url; 
    }, 1000); 
}

