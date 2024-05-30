document.addEventListener("DOMContentLoaded", function(event) {
    let container = document.querySelector("body");
    const iframe = document.createElement("iframe");
    iframe.src = "https://chat-frame.dev.macaan.ai";
    iframe.style = "border: 0; position: absolute; right:50px; bottom:0;";

    let contentHeight = 500;
    iframe.height = contentHeight;

    window.addEventListener('load', () => {
        container.appendChild(iframe);
    });

    window.addEventListener('message',
        function (e) {
            
            let message = e.data;
            if (
                message.height &&
                message.height !== contentHeight &&
                message.height !== 150
            ) {
                iframe.height = message.height + 'px';
                contentHeight = message.height;
            }
            if (
                message.width &&
                message.width !== contentHeight &&
                message.width !== 150
            ) {
                iframe.width = message.width + 'px';
                width = message.width;
            }
        },
        false
    );
})