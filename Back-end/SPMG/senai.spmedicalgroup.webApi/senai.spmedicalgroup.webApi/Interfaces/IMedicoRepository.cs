using senai.spmedicalgroup.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Interfaces
{
    interface IMedicoRepository
    {
       
        List<Medico> ListarTodos();

        
        Medico BuscarPorId(int id);

        
        void Deletar(int id);

        
        void Atualizar(int id, Medico objAtualizado);

       
        void Cadastrar(Medico objAtualizado);
    }
}
