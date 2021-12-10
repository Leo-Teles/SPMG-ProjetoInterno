using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using senai.spmedicalgroup.webApi.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository _Repository { get; set; }

        public UsuariosController()
        {
            _Repository = new Repositories.UsuarioRepository();
        }

       
        [HttpGet]
        public IActionResult LerTudo()
        {
            return Ok(_Repository.ListarTodos());
        }

       
        [Authorize(Roles = "ADM")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorEmail(string email)
        {
            return Ok(_Repository.BuscarPorEmail(email));
        }

      
        [Authorize(Roles = "ADM")]
        [HttpPost]
        public IActionResult Cadastrar(Domains.Usuario obj)
        {
            _Repository.Cadastrar(obj);
            return StatusCode(201);
        }

        
        [Authorize(Roles = "ADM")]
        [HttpPut]
        public IActionResult Atualizar(Domains.Usuario obj)
        {
            _Repository.Atualizar(obj);
            return StatusCode(204);
        }

       
        [Authorize(Roles = "ADM")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(string email)
        {
            _Repository.Deletar(email);
            return StatusCode(204);
        }
    }
}
