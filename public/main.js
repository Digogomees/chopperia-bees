
const modalShow = document.getElementById('modal-bg')

modalShow.innerHTML = `
<div class="box-alert">
<div class="modal-logo">
  <img src="./assets/pt_br_logo.svg" alt="logo">
</div>
<div class="title-modal">
  <h3>Você tem mais de 18 Anos ?</h3>
</div>
<div class="box-buttons">
  <button id="b-agree">Sim</button>
  <button id="b-decline">Não</button>
</div>
<div class="modal-information">
  <p>
    Ao confirmar que é maior de idade, você concorda com os termos de confidencialidade e uso de cookies neste site. 
    Para obter mais informações, leia nossa política de privacidade. Beba com moderação. 
    Proibido compartilhamento deste conteúdo e venda à menores de 18 anos. *
  </p>
</div>
</div>
`

const buttonAgree = document.getElementById('b-agree')
const buttonDecline = document.getElementById('b-decline')

if(localStorage.persitCloseModal === 'modal-bg'){
    console.log('caiu aqui')
    modalShow.classList.add('close-modal');
}

buttonAgree?.addEventListener('click', () => {
    modalShow.classList.add('close-modal');
    localStorage.persitCloseModal = 'modal-bg'
})

buttonDecline?.addEventListener('click', () => {
    window.location.href = 'https://www.ambev.com.br/consumo-responsavel-aviso/'
})
