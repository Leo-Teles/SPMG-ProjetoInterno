
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace senai.spmedicalgroup.webApi.Domains
{
    public partial class Clinica
    {
        public Clinica()
        {
            Consulta = new HashSet<Consultum>();
            Medicos = new HashSet<Medico>();
        }

        public byte IdClinica { get; set; }

        [Required(ErrorMessage = "O nome da clínica é obrigatório.")]
        public string EnderecoClinica { get; set; }

        [Required(ErrorMessage = "O nome da clínica é obrigatório.")]
        public string TelefoneClinica { get; set; }
        [Required(ErrorMessage = "O nome da clínica é obrigatório.")]

        public string HorarioFuncionamento { get; set; }
        [Required(ErrorMessage = "O nome da clínica é obrigatório.")]

        public string NomeClinica { get; set; }
        [Required(ErrorMessage = "O nome da clínica é obrigatório.")]

        public string Cnpj { get; set; }
        [Required(ErrorMessage = "O endereço é obrigatório.")]
        public virtual ICollection<Consultum> Consulta { get; set; }
        public virtual ICollection<Medico> Medicos { get; set; }
    }
}




#nullable disable

