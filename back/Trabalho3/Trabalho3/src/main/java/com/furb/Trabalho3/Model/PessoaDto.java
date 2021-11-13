package com.furb.Trabalho3.Model;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

public class PessoaDto {
    private Long id;
    private String nome;
    private String email;
    private String password;
    private LocalDate dataNascimento;
    private String cpf;

    public PessoaDto(Pessoa pessoa) {
        this.id=pessoa.getId();
        this.nome = pessoa.getNome();
        this.email = pessoa.getEmail();
        this.password = pessoa.getPassword();
        this.dataNascimento = pessoa.getDataNascimento();
        this.cpf = pessoa.getCpf();
    }


    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public String getCpf() {
        return cpf;
    }
    public static List<PessoaDto> converter(List<Pessoa> pessoas){
        return pessoas.stream().map(PessoaDto::new).collect(Collectors.toList());
    }
}
