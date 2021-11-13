package com.furb.Trabalho3.Controller;

import com.furb.Trabalho3.Model.Pessoa;
import com.furb.Trabalho3.Model.PessoaDto;
import com.furb.Trabalho3.Model.PessoaForm;
import com.furb.Trabalho3.Repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.UriComponentsBuilderMethodArgumentResolver;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/cadastro-cliente")

public class ClienteController {
    @Autowired
    PessoaRepository pessoaRepository;
    @GetMapping
    public List<PessoaDto> listaPessoas(){

       List<Pessoa>pessoas=pessoaRepository.findAll();
       return PessoaDto.converter(pessoas);

    }

    @PostMapping
    public ResponseEntity<PessoaDto> cadastroCliente(@RequestBody PessoaForm form, UriComponentsBuilder uriBuilder){
        Pessoa pessoa=form.converter();
        pessoaRepository.save(pessoa);
        URI uri=uriBuilder.path("/cadastro-cliente/{id}").buildAndExpand(pessoa.getId()).toUri();
        return ResponseEntity.created(uri).body(new PessoaDto(pessoa));
    }

}
