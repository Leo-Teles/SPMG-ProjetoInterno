using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using senai.spmedicalgroup.webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "1")]
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository _Repository { get; set; }

        public MedicosController()
        {
            _Repository = new MedicoRepository();
        }

       
        [HttpGet]
        public IActionResult LerTudo()
        {
            return Ok(_Repository.ListarTodos());
        }

        
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            return Ok(_Repository.BuscarPorId(id));
        }

        
        [HttpPost]
        public IActionResult Cadastrar(Medico obj)
        {
            _Repository.Cadastrar(obj);
            return StatusCode(201);
        }

        
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Medico obj)
        {
            _Repository.Atualizar(id, obj);
            return StatusCode(204);
        }

        
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            _Repository.Deletar(id);
            return StatusCode(204);
        }
    }
}
