const bibliotecaService = require("../services/bibliotecaService")

test("Livro disponível quando quantidade > 0", () => {
  expect(bibliotecaService.verificarDisponibilidade({ quantidade: 3 })).toBe(true)
})

test("Livro indisponível quando quantidade = 0", () => {
  expect(bibliotecaService.verificarDisponibilidade({ quantidade: 0 })).toBe(false)
})

test("Emprestar livro reduz quantidade", () => {
  const livro = { quantidade: 2 }
  bibliotecaService.emprestarLivro(livro)
  expect(livro.quantidade).toBe(1)
})

test("Não emprestar livro sem estoque", () => {
  const livro = { quantidade: 0 }
  expect(bibliotecaService.emprestarLivro(livro)).toBe(false)
})

test("Devolver livro aumenta quantidade", () => {
  const livro = { quantidade: 1 }
  bibliotecaService.devolverLivro(livro)
  expect(livro.quantidade).toBe(2)
})

test("Multa zero para atraso <= 0", () => {
  expect(bibliotecaService.calcularMulta(0)).toBe(0)
})

test("Multa correta para atraso positivo", () => {
  expect(bibliotecaService.calcularMulta(5)).toBe(10)
})

test("Prazo válido entre 1 e 30 dias", () => {
  expect(bibliotecaService.validarPrazo(15)).toBe(true)
})

test("Prazo inválido maior que 30", () => {
  expect(bibliotecaService.validarPrazo(40)).toBe(false)
})

test("Prazo inválido negativo", () => {
  expect(bibliotecaService.validarPrazo(-5)).toBe(false)
})