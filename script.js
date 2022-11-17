// This is for practising that is why code is not professional

var bar = document.getElementById('bar');
var sidebar = document.querySelector('div');
var mode = false;
sidebar.style.display = 'none';


bar.addEventListener('click',() => {
    mode=!mode;
    sidebar.style.display = mode ? 'flex' : 'none';
    
});

bar.style.cursor = 'pointer';
bar.style.border = 'none';
bar.style.outline = 'none';
bar.style.border = 'none';
bar.style.color = 'white';
bar.style.background = '#000';
bar.style.padding = '5px 12px'

var btn = document.querySelector('button');
btn.nextElementSibling.style.width = '200px';
btn.nextElementSibling.style.height = '96.2vh';
btn.nextElementSibling.style.background = 'black'
btn.nextElementSibling.style.flexDirection = 'column';
btn.nextElementSibling.style.padding = '10px 0px 0px 10px';
btn.nextElementSibling.style.transition = "all 2s";

for (let i = 0; i < sidebar.childNodes.length; i++) {
    if (sidebar.childNodes[i].nodeType === 1) {
        sidebar.childNodes[i].style.color = 'white';
        sidebar.childNodes[i].style.textDecoration = 'none';
        sidebar.childNodes[i].style.padding = '5px 0px'
    }
}