document.addEventListener('DOMContentLoaded', function () {
    const footnoteTextareas = document.querySelectorAll("textarea[data-footnote]");
    const popup = document.getElementById("footnote-popup");
    let count = 1;

    // Style popup
    popup.style.position = "absolute";
    popup.style.display = "none";
    popup.style.background = "#fff";
    popup.style.border = "1px solid black";
    popup.style.padding = "8px";
    popup.style.zIndex = 1000;

    footnoteTextareas.forEach(textarea => {
        const footnoteHTML = textarea.value.trim();

        const span = document.createElement("span");
        span.className = "footnote";
        span.innerHTML = `<sup>[${count}]</sup>`;
        span.style.cursor = "pointer";

        const parent = textarea.parentNode;
        parent.replaceChild(span, textarea);

        span.addEventListener("click", function (event) {
            popup.innerHTML = footnoteHTML;
            popup.style.left = `${event.pageX}px`;
            popup.style.top = `${event.pageY}px`;
            popup.style.display = "block";
        });

        count++;
    });

    // Hide popup when clicking outside
    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && !event.target.classList.contains("footnote")) {
            popup.style.display = "none";
        }
    });
});
