package com.furb.Trabalho3.Repository;


import com.furb.Trabalho3.Model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa,Long> {
}
