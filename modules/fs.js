const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }

    return console.log("Arquivo criado com sucesso");
  }
);

// Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.html"),
  "hello world!",
  (error) => {
    if (error) {
      console.log("Erro: ", error);
    }

    return console.log("Alterações salva no arquivo!");
  }
);
