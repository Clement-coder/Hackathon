let list = document.getElementById('list');
let hide = document.getElementById('hide');
let links = document.getElementById('links');
let ownerOne = document.getElementById('owner-one');
let ownerTwo = document.getElementById('owner-two');
let ownerThree = document.getElementById('owner-three');
let ownerFour = document.getElementById('owner-four');
let ownerFive = document.getElementById('owner-five');
let ownerSix = document.getElementById('owner-six');
let ownerSeven = document.getElementById('owner-seven');
let ownerEight = document.getElementById('owner-eight');

hide.style.display = 'none';


const loveIcons = document.querySelectorAll('#love');
loveIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.fill = icon.style.fill === 'red' ? 'rgb(92, 87, 87)' : 'red'; 
  });
});


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

const ownerButtons = [
    { buttonId: 'owner-one', modalId: 'modal-owner-one' },
    { buttonId: 'owner-two', modalId: 'modal-owner-two' },
    { buttonId: 'owner-three', modalId: 'modal-owner-three' },
    { buttonId: 'owner-four', modalId: 'modal-owner-four' },
    { buttonId: 'owner-five', modalId: 'modal-owner-five' },
    { buttonId: 'owner-six', modalId: 'modal-owner-six' },
    { buttonId: 'owner-seven', modalId: 'modal-owner-seven' },
    { buttonId: 'owner-eight', modalId: 'modal-owner-eight' }
];


ownerButtons.forEach(({ buttonId, modalId }) => {
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    const closeButton = modal.querySelector('.close');

    
    button.onclick = function () {
        modal.style.display = 'flex';
    };


    closeButton.onclick = function () {
        modal.style.display = 'none';
    };

    
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});