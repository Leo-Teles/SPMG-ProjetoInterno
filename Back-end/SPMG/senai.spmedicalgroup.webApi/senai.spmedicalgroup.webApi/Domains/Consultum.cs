using System;
using System.Collections.Generic;

#nullable disable

namespace senai.spmedicalgroup.webApi.Domains
{
    public partial class Consultum
    {
        public short IdConsulta { get; set; }
        public byte? IdClinica { get; set; }
        public byte IdMedido { get; set; }
        public int IdSituacao { get; set; }
        public byte IdPaciente { get; set; }
        public string DataConsulta { get; set; }
        public string Descrição { get; set; }

        public virtual Clinica IdClinicaNavigation { get; set; }
        public virtual Medico IdMedidoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
