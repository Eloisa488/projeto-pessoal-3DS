class BibliotecaService {

  verificarDisponibilidade(livro) {
    return livro.quantidade > 0;
  }

  emprestarLivro(livro) {
    if (this.verificarDisponibilidade(livro)) {
      livro.quantidade -= 1
      return true
    }
    return false
  }

  devolverLivro(livro) {
    livro.quantidade += 1
    return true
  }

  calcularMulta(diasAtraso) {
    if (diasAtraso <= 0) return 0
    return diasAtraso * 2
  }

  validarPrazo(dias) {
    return dias > 0 && dias <= 30
  }
}

module.exports = new BibliotecaService()