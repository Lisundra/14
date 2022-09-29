let elems = document.getElementsByTagName('img');
for (let i = 0; i < elems.length; i++) {
    elems[i].onclick = func;
};

function func() {
    alert(this.getAttribute('src'));
}