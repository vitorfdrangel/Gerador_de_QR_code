//  identificadores
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Função
const generateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.textContent = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.textContent = "Código criado!";
    });
}

// Eventos

// Gerar QR Code
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        generateQrCode();
    }
});

// Limpar área QR Code
qrCodeInput.addEventListener("keyup", (e) => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.textContent = "Gerar QR Code"
    }
});
