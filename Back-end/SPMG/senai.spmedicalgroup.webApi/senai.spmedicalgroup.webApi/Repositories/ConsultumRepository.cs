using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using senai.spmedicalgroup.webApi.Context;

namespace senai.spmedicalgroup.webApi.Repositories
{
    public class ConsultumRepository : IConsultumRepository
    {
        SPMGContext ctx = new SPMGContext();

        public void Atualizar(int id, Consultum objAtualizado)
        {
            Consultum objBuscado = ctx.Consulta.FirstOrDefault(u => u.IdConsulta == id);

            if (objBuscado.IdSituacao != null)
            {
                objBuscado.IdMedido    = objAtualizado.IdMedido;
                objBuscado.IdPaciente   = objAtualizado.IdPaciente;
                objBuscado.IdSituacao     = objAtualizado.IdSituacao;
                
                objBuscado.DataConsulta = objAtualizado.DataConsulta;
                objBuscado.Descrição   = objAtualizado.Descrição;
            }

            ctx.Consulta.Update(objBuscado);
            ctx.SaveChanges();
        }

        public Consultum BuscarPorId(int id)
        {
            return ctx.Consulta.Include(c => c.IdMedidoNavigation).Include(c => c.IdPacienteNavigation).FirstOrDefault(u => u.IdConsulta == id);
        }

        public void Cadastrar(Consultum objAtualizado)
        {
            ctx.Consulta.Add(objAtualizado);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Consulta.Remove(ctx.Consulta.FirstOrDefault(u => u.IdConsulta == id));
            ctx.SaveChanges();
        }

        public List<Consultum> ListarTodos()
        {
            return ctx.Consulta.Include(c => c.IdMedidoNavigation).Include(c => c.IdPacienteNavigation).ToList();
        }

        public List<Consultum> ListarMinhas(int id)
        {
            return ctx.Consulta
                .Include(c => c.IdMedidoNavigation.IdEspecialidadeNavigation)
                .Include(c => c.IdPacienteNavigation)
                .Include(c => c.IdSituacaoNavigation)
                .Where(c => c.IdMedidoNavigation.IdUsuario == id || c.IdPacienteNavigation.IdUsuario == id)
                .ToList();
        }
    }
}
