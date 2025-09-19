
class antiProcrastination {
    constructor() {
        this.url = window.location.href;
        this.bloqueados = ["https://classroom.google.com","https://www.youtube.com"];
}

    validaUrl() {
        const urlBloqueada = this.bloqueados.some(url => this.url.startsWith(url));

        if (urlBloqueada) {
            this.mostraPopup();
        }
    }

    mostraPopup() {
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            ">
                <h2>🚫 Este domínio está na lista de bloqueados!</h2>
            </div>
        `;
        
        document.body.appendChild(newDiv);
    }
}

const antiProcrastinationApp = new antiProcrastination();
antiProcrastinationApp.validaUrl();