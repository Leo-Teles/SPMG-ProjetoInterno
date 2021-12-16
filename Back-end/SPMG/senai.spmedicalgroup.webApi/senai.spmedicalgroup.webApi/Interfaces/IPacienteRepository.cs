using senai.spmedicalgroup.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Interfaces
{
    interface IPacienteRepository
    {
        
        List<Paciente> ListarTodos();
        
        Paciente BuscarPorId(int id);

        
        void Deletar(int id);

      
        void Atualizar(int id, Paciente objAtualizado);

        
        void Cadastrar(Paciente objAtualizado);
    }
}
