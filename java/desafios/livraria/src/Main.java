import java.util.Scanner;//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();

        // Adicionando livros de exemplo
        biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien"));
        biblioteca.adicionarLivro(new Livro("Dom Quixote", "Miguel de Cervantes"));
        biblioteca.adicionarLivro(new Livro("1984", "George Orwell"));
        biblioteca.adicionarLivro(new Livro("Orgulho e Preconceito", "Jane Austen"));
        biblioteca.adicionarLivro(new Livro("A Metamorfose", "Franz Kafka"));

        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\n--- Menu da Biblioteca ---");
            System.out.println("1. Listar livros disponíveis");
            System.out.println("2. Emprestar livro");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a quebra de linha

            switch (opcao) {
                case 1:
                    biblioteca.listarLivrosDisponiveis();
                    break;
                case 2:
                    System.out.print("Digite o título do livro que deseja emprestar: ");
                    String tituloEmprestimo = scanner.nextLine();
                    biblioteca.emprestarLivro(tituloEmprestimo);
                    break;
                case 0:
                    System.out.println("Saindo do programa. Obrigado!");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 0);

        scanner.close();
    }
}