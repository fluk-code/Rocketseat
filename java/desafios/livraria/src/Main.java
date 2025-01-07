import java.time.LocalDate;
import java.util.Scanner;//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();

        // Adicionando autores
        Autor tolkien = new Autor("J.R.R. Tolkien", LocalDate.of(1892, 1, 3));
        Autor cervantes = new Autor("Miguel de Cervantes", LocalDate.of(1547, 9, 29));
        Autor orwell = new Autor("George Orwell", LocalDate.of(1903, 6, 25));

        // Adicionando livros
        biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", tolkien));
        biblioteca.adicionarLivro(new Livro("Dom Quixote", cervantes));
        biblioteca.adicionarLivro(new Livro("1984", orwell));
        biblioteca.adicionarLivro(new Livro("A Sociedade do Anel", tolkien)); // Outro livro de Tolkien

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("\nGostaria de ver os livros disponíveis? (Sim/Não): ");
            String resposta = scanner.nextLine();

            if (resposta.trim().equalsIgnoreCase("Sim")) {
                biblioteca.listarLivrosDisponiveis();

                System.out.print("Digite o ID do livro que deseja emprestar: ");
                if (scanner.hasNextInt()) {
                    int idLivro = scanner.nextInt();
                    scanner.nextLine(); // Consumir a quebra de linha

                    System.out.print("Digite seu nome: ");
                    String nomeUsuario = scanner.nextLine();

                    biblioteca.emprestarLivro(idLivro, nomeUsuario);
                } else {
                    System.out.println("Entrada inválida para o ID do livro.");
                    scanner.nextLine(); // Limpar o buffer do scanner
                }
            } else if (resposta.trim().equalsIgnoreCase("Não")) {
                System.out.println("Encerrando o sistema. Obrigado!");
                break;
            } else {
                System.out.println("Resposta inválida. Digite Sim ou Não.");
            }
        }

        scanner.close();
    }
}