using senai.spmedicalgroup.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.spmedicalgroup.webApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Retorna todos os objetos cadastrados
        /// </summary>
        /// <returns>Uma lista de objetos</returns>
        List<Usuario> ListarTodos();

       
        Usuario BuscarPorEmail(string email);

       
        Usuario Logar(string email, string senha);

        
        void Deletar(string email);

        
        void Atualizar(Usuario objAtualizado);

        
        void Cadastrar(Usuario objAtualizado);
    }
}
