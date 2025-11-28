// bookmarklet.js - Drag to bookmarks bar
(function() {
    // Auto-fill logic for any job site
    const fields = document.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
        // Intelligent field mapping based on common job site patterns
        if (field.name.includes('name') || field.placeholder.includes('Name')) {
            field.value = 'Your Name';
        }
        if (field.name.includes('email') || field.type === 'email') {
            field.value = 'your.email@example.com';
        }
        // Add more field mappings as needed
    });
    alert('Auto-filled job application!');
})();
