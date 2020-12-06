const registerPhone = (phone) => {
  console.log(`Telefone ${phone} registrado`);
  return phone;
}

const registerName = (name) => {
  console.log(`Nome ${name} registrado`);
  return name;
}

const registerCep = (cep) => {
  console.log(`cep ${cep} registrado`);
  return cep;
}

const registerComplement = (complement) => {
  console.log(`complemento ${complement} registrado`);
  return complement;
}

module.exports = {
  registerPhone,
  registerName,
  registerCep,
  registerComplement,
};