
class antiProcrastination {
    constructor() {
        this.url = window.location.href;
        this.bloqueados = ["https://classroom.google.com","youtube.com"];
    console.log(this.url);
} 

    validaUrl() {
        const urlBloqueada = this.bloqueados.some(url => this.url.startsWith(url));
    
        if (urlBloqueada) {
            console.log("funcionou, o link da pagina que vc está atualmente está nos bloqueados")
        } else {
            console.log("não funcionou");
        }
    }
}

const antiProcrastinationApp = new antiProcrastination();

antiProcrastinationApp.validaUrl();