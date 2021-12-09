using senai.spmedicalgroup.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Interfaces
{
    interface IClinicaRepository
    {
        
        List<Clinica> ListarTodos();

        
        Clinica BuscarPorId(int id);

        
        void Deletar(int id);

        
        void Atualizar(int id, Clinica objAtualizado);

       
        void Cadastrar(Clinica objAtualizado);
    }
}
