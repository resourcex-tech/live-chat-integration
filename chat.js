document.addEventListener("DOMContentLoaded", function(event) {
    let container = document.querySelector("body");
    const iframe = document.createElement("iframe");
    iframe.src = "https://tickets-api.dev.macaan.ai";
    iframe.style = "border: 0; position: absolute; right:50px; bottom:0;";

    // contentHeight sets an arbitrary default
    // then keeps track of the last size update
    // to avoid setting height again if nothing changes
    let contentHeight = 500;
    iframe.height = contentHeight;

    window.addEventListener('load', () => {
        container.appendChild(iframe);
    });

    window.addEventListener('message',
        function (e) {
            // message that was passed from iframe page
            let message = e.data;

            // before I update the height,
            // I check to see if it's defined
            // and if it's changed, and if
            // it's not the iframe default
            // of 150px
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