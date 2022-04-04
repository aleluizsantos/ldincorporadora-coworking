const schemaforms = {
  name: {
    presence: {
      allowEmpty: false,
      message: "^Ops!! Você não informou seu nome",
    },
    length: {
      minimum: 2,
      tooShort: "^Seu nome deve ter conter '%{count}' palavras",
      tokenizer: function (value) {
        return value.split(/\s+/g);
      },
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: "^Ops!! telefone não informado",
    },
    length: {
      minimum: 15,
      tooShort: "^Ops!! número de telefone incompleto",
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "^Ops!! Você não informou seu email",
    },
    email: {
      message: "^e-mail inválido",
    },
  },
  amountperson: {
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      lessThanOrEqualTo: 50,
      message: "^Capacidade máxima do espaço 50 pessoas",
    },
  },
  description: {
    presence: {
      allowEmpty: false,
      message: "^Conte um pouco o que você precisa.",
    },
  },
};

export default schemaforms;
