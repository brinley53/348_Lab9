function alert_paragraph_color() {
    document.getElementById("paragraph").style.borderWidth = document.getElementById("border_width").value;
    document.getElementById("paragraph").style.borderColor = `rgb(${document.getElementById("border_R").value}, ${document.getElementById("border_G").value}, ${document.getElementById("border_B").value})`;
    document.getElementById("paragraph").style.backgroundColor = `rgb(${document.getElementById("bg_R").value}, ${document.getElementById("bg_G").value}, ${document.getElementById("bg_B").value})`;
}
