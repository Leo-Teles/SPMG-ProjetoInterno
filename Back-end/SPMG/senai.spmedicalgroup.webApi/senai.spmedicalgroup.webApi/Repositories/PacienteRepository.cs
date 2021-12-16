using senai.spmedicalgroup.webApi.Context;
using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Repositories
{
    public class PacienteRepository : IPacienteRepository
    {
        SPMGContext ctx = new SPMGContext();

        public void Atualizar(int id, Paciente objAtualizado)
        {
            Paciente objBuscado = ctx.Pacientes.FirstOrDefault(u => u.IdPaciente == id);

            if (objBuscado.IdPaciente > 0)
            {
                objBuscado.IdUsuario = objAtualizado.IdUsuario;
                objBuscado.IdPaciente = objAtualizado.IdPaciente;
                objBuscado.DataNascimento = objAtualizado.DataNascimento;
                objBuscado.Telefone = objAtualizado.Telefone;

                objBuscado.Cpf = objAtualizado.Cpf;
                objBuscado.Endereco = objAtualizado.Endereco;
            }

            ctx.Pacientes.Update(objBuscado);
            ctx.SaveChanges();
        }

        public Paciente BuscarPorId(int id)
        {
            return ctx.Pacientes.FirstOrDefault(u => u.IdPaciente == id);
        }

        public void Cadastrar(Paciente objAtualizado)
        {
            ctx.Pacientes.Add(objAtualizado);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Pacientes.Remove(ctx.Pacientes.FirstOrDefault(u => u.IdPaciente == id));
            ctx.SaveChanges();
        }

        public List<Paciente> ListarTodos()
        {
            return ctx.Pacientes.ToList();
        }
    }
}
