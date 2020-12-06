const userModel = require('../models/userModel');
const {
  confirmPhoneNumber,
  whatIsYourName,
  whatIsYourCep,
  whatIsYourComplement,
} = require('../utils/chatResponses');

const botMessage = (title, text, next, time) => ({ title, text, next, time });

const registerPhone = async (phone) => {
  await userModel.registerPhone(phone);
  // registerPhone devolve um { insertedId, ok }

  console.log(`Telefone ${phone} registrado`);
  return botMessage(
    confirmPhoneNumber.title,
    confirmPhoneNumber.text,
    confirmPhoneNumber.next,
    new Date(),
  );
};

const registerName = async (phone, name) => {
  await userModel.registerName(phone, name);
  console.log(`Nome ${name} registrado`);
  return botMessage(
    whatIsYourName.title,
    whatIsYourName.text,
    whatIsYourName.next,
    new Date(),
  );
};

const registerCep = async (phone, cep) => {
  await userModel.registerCep(phone, cep);
  console.log(`cep ${cep} registrado`);
  return botMessage(
    whatIsYourCep.title,
    whatIsYourCep.text,
    whatIsYourCep.next,
    new Date(),
  );
};

const registerComplement = async (phone, complement) => {
  await userModel.registerComplement(phone, complement);
  console.log(`complemento ${complement} registrado`);
  return botMessage(
    whatIsYourComplement.title,
    whatIsYourComplement.text,
    whatIsYourComplement.next,
    new Date(),
  );
};

module.exports = {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
};
