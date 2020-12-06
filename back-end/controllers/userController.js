const {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
} = require('../services/userService');
const chatResponses = require('../utils/chatResponses');
const {
  confirmPhoneNumber,
  whatIsYourName,
  whatIsYourCep,
  whatIsYourComplement,
} = chatResponses;
const botMessage = (name, message, next, time) => ({ name, message, next, time });

const registerUser = async (io) => {
  io.emit('botMessage', botMessage(
    confirmPhoneNumber.name,
    confirmPhoneNumber.message,
    'confirmPhoneNumber',
    new Date(),
  ));

  io.on('confirmPhoneNumber', async ({ phone }) => {
    registerPhone(phone);
    io.emit('botMessage', botMessage(
      chatResponses[confirmPhoneNumber.next].name,
      chatResponses[confirmPhoneNumber.next].message,
      confirmPhoneNumber.next,
      new Date(),
    ));
  });

  io.on('whatIsYourName', async ({ phone, name }) => {
    registerName(phone, name);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourName.next].name,
      chatResponses[whatIsYourName.next].message,
      whatIsYourName.next,
      new Date(),
    ));
  });

  io.on('whatIsYourCep', async ({ phone, cep }) => {
    registerCep(phone, cep);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourCep.next].name,
      chatResponses[whatIsYourCep.next].message,
      whatIsYourCep.next,
      new Date(),
    ));
  });

  io.on('whatIsYourComplement', async ({ phone, complement }) => {
    registerComplement(phone, complement);
    io.emit('botMessage', botMessage(
      chatResponses[whatIsYourComplement.next].name,
      chatResponses[whatIsYourComplement.next].message,
      whatIsYourComplement.next,
      new Date(),
    ));
  });

};

module.exports = {
  registerUser,
}
