using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using senai.spmedicalgroup.webApi.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultumRepository _Repository { get; set; }

        public ConsultasController()
        {
            _Repository = new ConsultumRepository();
        }

        
        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult LerTudo()
        {
            return Ok(_Repository.ListarTodos());
        }

        [HttpGet ("minhas")]
        public IActionResult ListarMinhas()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);

                

                return Ok(_Repository.ListarMinhas(idUsuario));
            }
            catch (Exception error)
            {
                return BadRequest(new
                {
                    mensagem = "Não foi possível listar suas suas consultas",
                    erro = error

                });
            }
        }



        [Authorize(Roles = "1,2")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            return Ok(_Repository.BuscarPorId(id));
        }

        
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Consultum obj)
        {
            _Repository.Cadastrar(obj);
            return StatusCode(201);
        }

        
        [Authorize(Roles = "2")]
        [HttpPut]
        public IActionResult AtualizarDescricao(Consultum obj)
        {
            _Repository.Atualizar(obj.IdConsulta, obj);
            return StatusCode(204);
        }

        
        [Authorize(Roles = "1")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            _Repository.Deletar(id);
            return StatusCode(204);
        }
    }
}
