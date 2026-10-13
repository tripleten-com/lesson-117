export default class Card {
	constructor(cardSelector) {
    this._cardSelector = cardSelector;
	}

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

	_setEventListeners() {
		this._element.querySelector(".card__text").addEventListener("click", () => {
			this._handleMessageClick();
		});
	}

  _handleMessageClick() {
    this._element.querySelector(".card__text").classList.toggle("card__text_is-active");
  }
}