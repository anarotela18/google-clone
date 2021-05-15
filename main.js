$(document).ready(function() {
    const input = document.getElementById('search');
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');

    input.addEventListener('change', (event) => {
        event.preventDefault();
        const submit = event.target.value;
        const query = `http://www.google.com/search?hl=es&q=${submit}`;

        button.onclick = function() {
            window.open(query);
        };

        button2.onclick = function() {
            window.open(query);
        };
    });
});