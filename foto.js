let fotos = document.getElementsByTagName('img');
for (let i = 0; i < fotos.length; i++) {
    fotos[i].onclick = func;
};

function func() {
    alert(this.getAttribute('src'));
}