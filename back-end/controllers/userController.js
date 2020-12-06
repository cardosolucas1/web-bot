const {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
} = require('../services/userService');

const registerUser = async (io) => {
  io.on('confirmPhoneNumber', async ({ phone }) => {
    const createdPhone = await registerPhone(phone)
    io.emit('botMessage', createdPhone.response);
  });

  io.on('whatIsYourName', async ({ phone, name }) => {
    const createdName = await registerName(phone, name)
    io.emit('botMessage', createdName.response);
  });

  io.on('whatIsYourCep', async ({ phone, cep }) => {
    const createdCep = registerCep(phone, cep)
    io.emit('botMessage', createdCep.response);
  });

  io.on('whatIsYourComplement', async ({ phone, complement }) => {
    const createdComplement = await registerComplement(phone, complement)
    io.emit('botMessage', createdComplement.response);
  });

};

module.exports = {
  registerUser,
}
