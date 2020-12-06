module.exports = {
  confirmPhoneNumber: {
    name: 'Chama no zap',
    title: 'Confirmar número de telefone',
    message: 'Digite seu número de telefone sem dígitos e com ddd, para que eu confirme sua identidade. Ex: 011 9 1111 1111',
    next: 'whatIsYourName',
  },
  whatIsYourName: {
    name: 'Chama no zap',
    title: 'Identificação do nome do usuário',
    message: 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?',
    fail: 'Seu número não pode conter números e símbolos especiais :(. Por favor, digite novamente',
    next: 'whatIsYourCep'
  },
  whatIsYourCep: {
    name: 'Chama no zap',
    title: 'Identificação da área macro do usuário',
    message: 'Agora vamos precisar do seu CEP, digite somente os números.',
    next: 'whatIsYourComplement',

  },
  whatIsYourComplement: {
    name: 'Chama no zap',
    title: 'Identificação da área micro do usuário',
    message: 'Você poderia me informar o complemento? Ex: Casa, Apto, condomínio.',
    next: 'listCategories',
  },
  listCategories: {
    name: 'Chama no zap',
    title: 'Listar categorias de produtos',
    message: 'Atualmente temos Bebidas (1) e comidas (2), deseja ver (1) ou (2)?',
    next: 'none'
  },
  // listQuantity: {
  //   title: 'Identificação de quantidade',
  //   message: 'Agora que você já escolheu seus produtos, digite a quantidade para cada um deles',
  //   fail: ''
  // },
};