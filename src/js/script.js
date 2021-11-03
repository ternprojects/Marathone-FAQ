let accordion = document.getElementsByClassName("card");

var i = 1;
Array.prototype.forEach.call(accordion, function (card) {

  function cardCounter() {

    let idHeader = card.getElementsByClassName("card-header");
    let idBody = card.getElementsByClassName("collapse");
    let idButton = card.getElementsByClassName('btn-link');

    idHeader[0].id = "heading-" + i;
    idBody[0].setAttribute("aria-labelledby", "#heading-" + i);

    idButton[0].setAttribute("data-target", "#collapse-" + i);
    idButton[0].setAttribute("aria-controls", "collapse-" + i);

    idBody[0].id = "collapse-" + i;
    i++
  }

  cardCounter();

})

