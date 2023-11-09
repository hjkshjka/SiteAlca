document.addEventListener("DOMContentLoaded", function () {
    let availableKeywords = [
        'Espanhol',
        'Inglês',
        'Português Brasileiro',
        'Português Portugal',
    ];

    const resultBox = document.querySelector(".result-box");
    const inputBox = document.querySelector(".input-box");

    if (inputBox && resultBox) {
        inputBox.addEventListener("input", function () {
            let result = [];
            let input = inputBox.value;

            if (input !== undefined && input.trim) { // Verifica se input não é undefined e tem o método trim
                input = input.trim(); // Use trim() para remover espaços em branco

                if (input.length) {
                    result = availableKeywords.filter((keyword) => {
                        return keyword.toLowerCase().includes(input.toLowerCase());
                    });
                    console.log(result);
                }
            }
            display(result);
        });
    }

    function display(result) {
        const content = result.map((list) => {
            return "<li>" + list + "</li>";
        }).join(""); // Use join para transformar o array em uma string
        resultBox.innerHTML = "<ul>" + content + "</ul>";
    }
});