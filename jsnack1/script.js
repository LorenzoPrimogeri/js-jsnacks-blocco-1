const nomInvitati = ["lorenzo", "paolo", "lucio ", "tulbu", "menchi", "danchi", "banchi"];
const btn = document.getElementById("Verifica");
const esito = document.getElementById("Esito");
btn.addEventListener('click',
    function () {
        let controllo = false;
        const nomeUtente = document.getElementById("NomeUtente").value;
        for (let i = 0; i < nomInvitati.length && controllo == false; i++) {
            if (nomeUtente === nomInvitati[i]) {
                esito.innerText = `Verificato`;
                controllo = true;
                document.getElementById("nomeUtente").value = " ";
            }
        }
        if (controllo == false) {
            esito.innerText = `Non Verificato`;
            document.getElementById("nomeUtente").value = " ";
        }
    })