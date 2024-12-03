let list = document.getElementById('list');
let hide = document.getElementById('hide');
let links = document.getElementById('links');

hide.style.display = 'none';
links.style.display = 'none';

list.onclick = function () {
    links.style.display = 'block';
    list.style.display = 'none';
    hide.style.display = 'block';
};


hide.onclick = function () {
    links.style.display = 'none';
    list.style.display = 'block';
    hide.style.display = 'none'; 
};
