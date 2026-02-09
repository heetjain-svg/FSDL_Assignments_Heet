const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            expression = "";
            result.value = "";
        } 
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                result.value = expression;
            } catch {
                result.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            result.value = expression;
        }
    });
});
