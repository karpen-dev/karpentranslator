// script.js
// karpen works

let debug = false;

async function transl() {
    var output_language  = document.getElementById('output_lang').value;
    const output_text = document.getElementById('output_text');
    var text_to_transl = document.getElementById('text_to_transl').value;

    if(debug){
        console.log(`Vars:`);
        console.log(`output_lang: ${output_language}`);
        console.log(`output_text: ${output_text}`);
        console.log(`output_text_swaped: ${output_text_swaped}`);
        console.log(`text_to_transl: ${text_to_transl}`);
    }

    const url = `http://127.0.0.1:8000/?q=${text_to_transl}&ol=${output_language}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const res = data["target"];

        output_text.textContent = `${res}`;
        output_text.style.color = "rgb(218, 218, 218)";
    }

    catch (error) {
        console.error('Parsing data error: ', error);
    }
}