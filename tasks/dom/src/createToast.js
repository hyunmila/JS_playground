export function createToast(element) {
    // Your code
    var emptyDiv = document.createElement('div');
    emptyDiv.className = "toast";
    emptyDiv.style.position = "fixed";
    emptyDiv.style.top = "20px";
    emptyDiv.style.right = "20px";
    emptyDiv.appendChild(element);
    return emptyDiv
    }