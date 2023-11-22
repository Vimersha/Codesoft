let operation = '';
        let operand1 = 0;
        let operand2 = null;

        function appendNumber(number) {
            let display = document.getElementById('display');
            if (display.innerHTML === '0') {
                display.innerHTML = number;
            } else {
                display.innerHTML += number;
            }
        }

        function appendOperator(operator) {
            let display = document.getElementById('display');
            operand1 = parseFloat(display.innerHTML);
            operation = operator;
            display.innerHTML = '';
        }

        function calculateResult() {
            let display = document.getElementById('display');
            operand2 = parseFloat(display.innerHTML);
            switch (operation) {
                case '+':
                    display.innerHTML = operand1 + operand2;
                    break;
                case '-':
                    display.innerHTML = operand1 - operand2;
                    break;
                case '*':
                    display.innerHTML = operand1 * operand2;
                    break;
                case '/':
                    display.innerHTML = operand1 / operand2;
                    break;
            }
        }

        function clearDisplay() {
            let display = document.getElementById('display');
            display.innerHTML = '0';
        }