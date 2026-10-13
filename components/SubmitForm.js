export default class SubmitForm {
  constructor({ formSelector, handleFormSubmit }) {
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getTemplate() {
  	const formElement = document
      .querySelector(this._formSelector)
      .content
      .querySelector(".form")
      .cloneNode(true);

    return formElement;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this._element.reset();
    })
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".form__input");
    
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

  generateForm() {
    this._element = this._getTemplate();
    this._setEventListeners();

  	return this._element;
  }
}