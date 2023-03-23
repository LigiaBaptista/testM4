package com.rd.pg4project.controller;

import com.rd.pg4project.Dto.LoginDTO;
import com.rd.pg4project.Dto.PerfilDTO;
import com.rd.pg4project.model.Usuario;
import com.rd.pg4project.service.UsuarioService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
public class UsuarioController {

 @NonNull
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listar();
    }

    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario criar(@RequestBody Usuario usuario) {
        return usuarioService.criar(usuario);
    }
    @PutMapping("/{id}")
    public Usuario atualizar(@PathVariable Long id, @RequestBody Usuario usuario) {
        return usuarioService.atualizar(id, usuario);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        usuarioService.excluir(id);
    }

    @PostMapping("/login")
    public ResponseEntity<PerfilDTO> login(@RequestBody LoginDTO loginDTO) {
        var usuarioExistente = usuarioService.login(loginDTO);
        if (usuarioExistente != null) {
            return ResponseEntity.ok(usuarioExistente);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}