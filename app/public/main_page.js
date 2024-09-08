// main_page.js
// karpen works

let block_first = true;
let block_second = false;

let on_clicked = false;
let swaped = false;

function swaping() {

    swaped = true;

    const text_to_transl = document.getElementById('text_to_transl');
    const output_text = document.getElementById('output_text');

    text_to_transl.classList.add('fade');
    output_text.classList.add('fade');

    setTimeout(() => {
        const temp = document.createElement('div');
        text_to_transl.parentNode.insertBefore(temp, text_to_transl);
        output_text.parentNode.insertBefore(text_to_transl, output_text);
        temp.parentNode.insertBefore(output_text, temp);
        temp.parentNode.removeChild(temp);

        block_first = false;
        block_second = true;

        text_to_transl.classList.remove('fade');
        output_text.classList.remove('fade');
    }, 500);
}

function alt_swaping(){
    const text_to_transl = document.getElementById('text_to_transl');
    const output_text = document.getElementById('output_text');
    
    text_to_transl.classList.add('fade');
    output_text.classList.add('fade');

    setTimeout(() => {
        text_to_transl.textContent = output_text.textContent;

        text_to_transl.classList.remove('fade');
        output_text.classList.remove('fade');
    }, 500);
}

function swaping_back() {

    swaped = false;

    const text_to_transl = document.getElementById('text_to_transl');
    const output_text = document.getElementById('output_text');

    text_to_transl.classList.add('fade');
    output_text.classList.add('fade');

    setTimeout(() => {
        const temp = document.createElement('div');
        text_to_transl.parentNode.insertBefore(temp, text_to_transl);
        output_text.parentNode.insertBefore(text_to_transl, output_text);
        temp.parentNode.insertBefore(output_text, temp);
        temp.parentNode.removeChild(temp);

        block_first = true;
        block_second = false;

        text_to_transl.classList.remove('fade');
        output_text.classList.remove('fade');
    }, 500);
}

function swap() {
    if (on_clicked == false){
        swaping();
        on_clicked = true;
    }
    else if(on_clicked == true){
        swaping_back();
        on_clicked = false;
    }
}

document.getElementById('output_text').addEventListener('keydown', e => {
    if (block_first) {
        e.preventDefault();
    }
});

document.getElementById('text_to_transl').addEventListener('keydown', e => {
    if (block_second) {
        e.preventDefault();
    }
});