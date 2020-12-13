//flip card function
function flipCard() {
  $('.team__member.is-flipped').not(this).removeClass('is-flipped');
  $(this).toggleClass('is-flipped');
}
//select all li tags in list
const cards = document.getElementById('teamList').querySelectorAll('li');

//add function on click for each li
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});
