document.addEventListener("DOMContentLoaded", function () {
    let Items = document.querySelectorAll("#Links li");
    
    Items.forEach(item =>{
        let url = item.textContent.trim();

        let urlRegex = /^(https?:\/\/[^\s]+)$/;
        
        if (urlRegex.test(url)) {
            item.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
        }
    });
});