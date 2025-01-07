import java.util.ArrayList;
import java.util.List;

class Biblioteca {
    private List<Livro> livros = new ArrayList<>();
    private List<Autor> autores = new ArrayList<>();

    public void adicionarLivro(Livro livro) {
        this.livros.add(livro);
    }

    public void listarLivrosDisponiveis() {
        System.out.println("\n--- Livros Disponíveis ---");
        if (livros.stream().noneMatch(Livro::isDisponivel)) {
            System.out.println("Nenhum livro disponível no momento.");
            return;
        }
        livros.stream()
                .filter(Livro::isDisponivel)
                .forEach(livro -> System.out.println("ID: " + livro.getId() + ", Título: " + livro.getTitulo() + ", Autor: " + livro.getAutor().getNome()));
    }

    public void emprestarLivro(int idLivro, String nomeUsuario) {
        for (Livro livro : livros) {
            if (livro.getId() == idLivro) {
                if (livro.isDisponivel()) {
                    livro.setDisponivel(false);
                    System.out.println("Livro '" + livro.getTitulo() + "' emprestado com sucesso para " + nomeUsuario + "!");
                } else {
                    System.out.println("O livro '" + livro.getTitulo() + "' não está disponível para empréstimo.");
                }
                return;
            }
        }
        System.out.println("Livro com ID " + idLivro + " não encontrado.");
    }
}
