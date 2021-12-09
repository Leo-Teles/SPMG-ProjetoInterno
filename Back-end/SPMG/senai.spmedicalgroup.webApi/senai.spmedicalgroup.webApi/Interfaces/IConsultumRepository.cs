using senai.spmedicalgroup.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Interfaces
{
    interface IConsultumRepository
    {
        
        List<Consultum> ListarTodos();

        
        List<Consultum> ListarPorMed(int id);

     
        List<Consultum> ListarPorPac(int id);

       
        Consultum BuscarPorId(int id);

       
        void Deletar(int id);

       
        void Atualizar(int id, Consultum objAtualizado);

        
        void Cadastrar(Consultum objAtualizado);
    }
}
