const abrirModal = document.getElementById('agendar');
const fecharModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const alternarModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
}

[abrirModal, fecharModal, fade].forEach((elemento) => {
    elemento.addEventListener('click', () => alternarModal())
});

function agendarConsulta(){
    alert('Consulta agendada com sucesso!');
};

function enviarEmail(){
    alert('E-mail enviado com sucesso!');
};