module.exports = {
  confirmPhoneNumber: {
    title: 'Confirmar número de telefone',
    text: 'Digite seu número de telefone sem dígitos e com ddd, para que eu confirme sua identidade. Ex: 011 9 1111 1111',
    next: 'whatIsYourName',
  },
  whatIsYourName: {
    title: 'Identificação do nome do usuário',
    text: 'Olá, tudo bem? Me diga seu nome para começarmos, por favor?',
    fail: 'Seu número não pode conter números e símbolos especiais :(. Por favor, digite novamente',
    next: 'whatIsYourCep'
  },
  whatIsYourCep: {
    title: 'Identificação da área macro do usuário',
    text: 'Agora vamos precisar do seu CEP, digite somente os números.',
    next: 'whatIsYourComplement',

  },
  whatIsYourComplement: {
    title: 'Identificação da área micro do usuário',
    text: 'Você poderia me informar o complemento? Ex: Casa, Apto, condomínio.',
    next: 'listCategories',
  },
  listCategories: {
    title: 'Listar categorias de produtos',
    text: 'Atualmente temos Bebidas (1) e comidas (2), deseja ver (1) ou (2)?',
    next: 'none'
  },
  // listQuantity: {
  //   title: 'Identificação de quantidade',
  //   text: 'Agora que você já escolheu seus produtos, digite a quantidade para cada um deles',
  //   fail: ''
  // },
};