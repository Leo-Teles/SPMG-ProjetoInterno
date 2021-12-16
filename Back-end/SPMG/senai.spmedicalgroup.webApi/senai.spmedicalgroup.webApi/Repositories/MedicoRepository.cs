using senai.spmedicalgroup.webApi.Context;
using senai.spmedicalgroup.webApi.Domains;
using senai.spmedicalgroup.webApi.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace senai.spmedicalgroup.webApi.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        SPMGContext ctx = new SPMGContext();

        public void Atualizar(int id, Medico objAtualizado)
        {
            Medico objBuscado = ctx.Medicos.FirstOrDefault(u => u.IdMedico == id);

            if (objBuscado.IdMedico > 0)
            {
                objBuscado.IdClinica = objAtualizado.IdClinica;
                objBuscado.IdEspecialidade = objAtualizado.IdEspecialidade;
                objBuscado.IdUsuario = objAtualizado.IdUsuario;
                objBuscado.IdMedico = objAtualizado.IdMedico;
                objBuscado.Crm = objAtualizado.Crm;
            }

            ctx.Medicos.Update(objBuscado);
            ctx.SaveChanges();
        }

        public Medico BuscarPorId(int id)
        {
            return ctx.Medicos.FirstOrDefault(u => u.IdMedico == id);
        }

        public void Cadastrar(Medico objAtualizado)
        {
            ctx.Medicos.Add(objAtualizado);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Medicos.Remove(ctx.Medicos.FirstOrDefault(u => u.IdMedico == id));
            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medicos.ToList();
        }
    }
}
