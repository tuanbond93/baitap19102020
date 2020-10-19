function sangphai() {
    let vitricu = document.getElementById('tank').style.left;
    document.getElementById('tank').style.left = parseInt(vitricu) + 19 + "px";
}
function dixuong() {
    let vitricu = document.getElementById('tank').style.top;
    document.getElementById('tank').style.top = parseInt(vitricu) + 19 + "px";
    if (document.getElementById('tank').style.top == document.getElementById('vatcan').style.top) {
        alert('Đã va chạm');
        
    }
}
