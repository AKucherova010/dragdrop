const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide');
}

const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragDrop);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}