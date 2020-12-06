const {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
} = require('../services/userService');
const {
  confirmPhoneNumber,
  whatIsYourName,
  whatIsYourCep,
  whatIsYourComplement,
} = require('../utils/chatResponses');

const botMessage = (name, message, next, time) => ({ name, message, next, time });

const registerUser = async (io) => {
  io.emit('botMessage', botMessage(
    confirmPhoneNumber.name,
    confirmPhoneNumber.message,
    confirmPhoneNumber.next,
    new Date(),
  ));

  // io.on('confirmPhoneNumber', async ({ phone }) => {
  //   registerPhone(phone)
  //   io.emit('botMessage', botMessage(
  //     confirmPhoneNumber.title,
  //     confirmPhoneNumber.text,
  //     confirmPhoneNumber.next,
  //     new Date(),
  //   ));
  // });

  // io.on('whatIsYourName', async ({ name }) => {
  //   registerName(name)
  //   io.emit('botMessage', botMessage(
  //     whatIsYourName.title,
  //     whatIsYourName.text,
  //     whatIsYourName.next,
  //     new Date(),
  //   ));
  // });

  // io.on('whatIsYourCep', async ({ cep }) => {
  //   registerCep(cep)
  //   io.emit('botMessage', botMessage(
  //     whatIsYourCep.title,
  //     whatIsYourCep.text,
  //     whatIsYourCep.next,
  //     new Date(),
  //   ));
  // });

  // io.on('whatIsYourComplement', async ({ cep }) => {
  //   registerCep(cep)
  //   io.emit('botMessage', botMessage(
  //     whatIsYourComplement.title,
  //     whatIsYourComplement.text,
  //     whatIsYourComplement.next,
  //     new Date(),
  //   ));
  // });

};

module.exports = {
  registerUser,
}
