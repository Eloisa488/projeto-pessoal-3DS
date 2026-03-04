const bibliotecaService = require("../services/bibliotecaService")

class BibliotecaController {

  processarEmprestimo(livro) {
    const sucesso = bibliotecaService.emprestarLivro(livro)

    return {
      sucesso,
      quantidadeRestante: livro.quantidade
    }
  }

  processarDevolucao(livro, diasAtraso) {
    bibliotecaService.devolverLivro(livro)
    const multa = bibliotecaService.calcularMulta(diasAtraso)

    return {
      multa,
      quantidadeAtual: livro.quantidade
    }
  }
}

module.exports = new BibliotecaController()