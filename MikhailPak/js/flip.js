// var card = document.querySelector('.team__member');


// // card.addEventListener('click', function () {
// //   card.classList.toggle('is-flipped');
// // });

function flipCard() {
  $('.team__member.is-flipped').not(this).removeClass('is-flipped');
  $(this).toggleClass('is-flipped');
}

// card.forEach(()=> card.addEventListener('click', flipCard));

const cards = document.getElementById('teamList').querySelectorAll('li');

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});
