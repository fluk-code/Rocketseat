import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

class Autor {
    private static final AtomicInteger count = new AtomicInteger(0);
    private int id;
    private String nome;
    private LocalDate dataNascimento;

    public Autor(String nome, LocalDate dataNascimento) {
        this.id = count.incrementAndGet();
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Nome: " + nome;
    }
}
