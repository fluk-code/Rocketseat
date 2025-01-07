import java.util.ArrayList;
import java.util.List;

class Biblioteca {
    private List<Livro> livros;

    public Biblioteca() {
        this.livros = new ArrayList<>();
    }

    public void adicionarLivro(Livro livro) {
        this.livros.add(livro);
    }

    public void listarLivrosDisponiveis() {
        System.out.println("\nLivros Disponíveis:");
        boolean encontrouLivros = false;
        for (Livro livro : livros) {
            if (livro.isDisponivel()) {
                System.out.println("- " + livro.getTitulo() + " (por " + livro.getAutor() + ")");
                encontrouLivros = true;
            }
        }
        if (!encontrouLivros) {
            System.out.println("Nenhum livro disponível no momento.");
        }
    }

    public void emprestarLivro(String titulo) {
        for (Livro livro : livros) {
            if (livro.getTitulo().equalsIgnoreCase(titulo)) {
                if (livro.isDisponivel()) {
                    livro.setDisponivel(false);
                    System.out.println("Livro '" + titulo + "' emprestado com sucesso!");
                    return;
                } else {
                    System.out.println("O livro '" + titulo + "' não está disponível para empréstimo.");
                    return;
                }
            }
        }
        System.out.println("Livro '" + titulo + "' não encontrado na biblioteca.");
    }
}