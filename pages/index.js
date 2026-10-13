import Section from "../components/Section.js";
import SubmitForm from "../components/SubmitForm.js";
import UserCard from "../components/UserCard.js";
import DefaultCard from "../components/DefaultCard.js";
import {
  messageList,
  cardListSection,
  formSection
} from "../utils/constants.js";

const cardsList = new Section({
  data: messageList,
  renderer: (item) => {
    const card = item.isOwner
      ? new UserCard(item, ".card-template_type_user")
      : new DefaultCard(item, ".card-template_type_default");

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
  },
},
  cardListSection
);

const form = new SubmitForm({
  formSelector: ".form-template",
  handleFormSubmit: (item) => {
    const card = new UserCard(item, ".card-template_type_user");

    const cardElement = card.generateCard();

    cardsList.setItem(cardElement);
  }
});

cardsList.renderItems();

const formRenderer = new Section({
  data: []
}, formSection);

const formElement = form.generateForm();

formRenderer.setItem(formElement);