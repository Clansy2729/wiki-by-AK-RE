document.addEventListener('DOMContentLoaded', () => {  
 
    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('callback-button');
   
    // Модальное окно, которое необходимо открыть
    let modal1 = document.getElementById('modal-1');
   
    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
   
    // Тег body для запрета прокрутки
    let tagBody = document.getElementsByTagName('body');
   
    callBackButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
   
    closeButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
   
    modal1.onmousedown = function (e) {
      let target = e.target;
      let modalContent = modal1.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
   
  });
  const message = document.querySelector('.back_message');
  const user_name = document.querySelector('.back_name');
 const back_button = document.querySelector('.back_button');
 back_button.addEventListener('click', function() {
var body = "Сообщение:   " + message.value + "";
 var theme = "Сообщение от:   " + user_name.value;
  window.open("mailto:kraken2000abvgd@gmail.com?subject=" +theme+ "&body=" + body)
 })