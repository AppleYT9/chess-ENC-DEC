document.addEventListener("DOMContentLoaded", function () {
    let movePattern = [];
    let decryptedMessage = "";
    let currentStep = 0;
    let typeSound = new Audio("/static/type.wav"); // Typing sound effect

    async function encryptMessage() {
        const message = document.getElementById("message").value;
        if (!message) {
            alert("Enter a message to encrypt!");
            return;
        }

        const response = await fetch("/encrypt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        movePattern = data.encrypted.split("-");
        decryptedMessage = message;
        currentStep = 0;

        animateText("encryptedOutput", movePattern.join("-"));
        document.getElementById("copyButton").style.display = "block";

        setTimeout(() => location.reload(), 30000);
    }

    async function decryptMessage() {
        const encryptedText = document.getElementById("encrypted").value;
        if (!encryptedText) {
            alert("Enter an encrypted message!");
            return;
        }

        const response = await fetch("/decrypt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ encrypted: encryptedText })
        });

        const data = await response.json();
        decryptedMessage = data.decrypted;
        movePattern = encryptedText.split("-");
        currentStep = 0;

        // console.log("✅ Received Decrypted Message:", decryptedMessage);
        // console.log("✅ Length:", decryptedMessage.length);


        movePattern.forEach((square, index) => {
            let squareElement = document.getElementById(`msg-${square}`);
            if (squareElement) {
                setTimeout(() => {
                    squareElement.innerText = decryptedMessage[index] || "?";
                    squareElement.style.display = "block";
                    squareElement.classList.add("glitch"); // Glitch effect
                }, index * 200);
            }
        });
        

        animateText("decryptedOutput", decryptedMessage);
        setTimeout(() => location.reload(), 60000);
    }

    function copyToClipboard() {
        const encryptedText = document.getElementById("encryptedOutput").innerText;
        navigator.clipboard.writeText(encryptedText).then(() => {
            let copyButton = document.getElementById("copyButton");
            copyButton.innerText = "Copied!";
            setTimeout(() => copyButton.innerText = "Copy", 2000);
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    }

    function pasteFromClipboard() {
        navigator.clipboard.readText().then(text => {
            document.getElementById("encrypted").value = text; // Preserve exact spacing
        }).catch(err => {
            console.error("Failed to read clipboard:", err);
        });
    }

    function handleSquareClick(squareId) {
        if (movePattern.length === 0) {
            alert("Encrypt a message first!");
            return;
        }

        if (squareId === movePattern[currentStep]) {
            document.getElementById(`msg-${squareId}`).innerText = decryptedMessage[currentStep];
            document.getElementById(`msg-${squareId}`).style.display = "block";
            document.getElementById(`msg-${squareId}`).classList.add("glitch"); // Add glitch effect
            currentStep++;

            if (currentStep === movePattern.length) {
                alert("Message fully revealed!");
            }
        } else {
            alert("Wrong square! Start again.");
            currentStep = 0;
        }
    }

    function animateText(elementId, text) {
        let element = document.getElementById(elementId);
        element.innerText = "";
        let i = 0;
        let interval = setInterval(() => {
            if (i < text.length) {
                element.innerText += text[i];
                typeSound.play();
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    window.encryptMessage = encryptMessage;
    window.decryptMessage = decryptMessage;
    window.handleSquareClick = handleSquareClick;
    window.copyToClipboard = copyToClipboard;
    window.pasteFromClipboard = pasteFromClipboard;
});