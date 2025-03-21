
    document.addEventListener("DOMContentLoaded", function () {
        let checkbox = document.getElementById("checkbox");
        let downloadBtn = document.getElementById("download");
        let downIcon = document.getElementById("DownICON");
        let qrContainer = document.getElementById("qrcode");

        function generateWhatsAppQRCode(phoneNumber, message) {
            const formattedNumber = phoneNumber.replace(/\D/g, '');
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

            // Clear any existing QR code
            qrContainer.innerHTML = "";

            // Generate the QR code
            new QRCode(qrContainer, {
                text: whatsappURL,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
            });
        }

        // Apply hover effect when clicking either #download or #DownICON
        function applyHoverEffect() {
            downloadBtn.classList.add("hover-effect");
            downIcon.classList.add("hover-effect");
        }

        downloadBtn.addEventListener("click", applyHoverEffect);
        downIcon.addEventListener("click", applyHoverEffect);

        // Delay QR Code Regeneration by 3 seconds & Show Empty Space
        function delayedQRCodeGeneration() {
            qrContainer.innerHTML = ""; // Remove QR code immediately
            qrContainer.style.border = "2px dashed #ccc"; // Show empty placeholder
            qrContainer.style.width = "256px"; 
            qrContainer.style.height = "256px";

            setTimeout(() => {
                qrContainer.style.border = "none"; // Remove placeholder border
                generateWhatsAppQRCode("7022057536", "Hello! I'm interested in your services.");
            }, 200); // 3 seconds delay
        }

        // Attach event listener to checkbox to regenerate QR code on click
        checkbox.addEventListener("change", delayedQRCodeGeneration);

        // Generate Initial QR Code on Page Load
        generateWhatsAppQRCode("7022057536", "Hello! I'm interested in your services.");
    });