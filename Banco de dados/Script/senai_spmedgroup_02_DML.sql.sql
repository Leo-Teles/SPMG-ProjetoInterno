USE SPMG;
GO

INSERT INTO TIPOUSUARIO(qualUsuario)
VALUES ('Administrador'), ('Médico'), ('Paciente')

INSERT INTO ESPECIALIDADE(especiaMedica)
VALUES ('Acupuntura'),('Anestesiologia'),('Angiologia'),('Cardiologia'),('Cirurgia Cardiovascular'),('Cirurgia da Mão'),
('Cirurgia do Aparelho Digestivo'),('Cirurgia Geral'),('Cirurgia Pediátrica'),('Cirurgia Plástica'),('Cirurgia Torácica'),
('Cirurgia Vascular'),('Dermatologia'),('Radioterapia'),('Urologia'),('Pediatria'),('Psiquiatria')

INSERT INTO CLINICA(enderecoClinica,telefoneClinica,horarioFuncionamento,nomeClinica,cnpj)
VALUES ('Av.Paulista,3745','3892012','Seg á Sab/7:00 as 19:00','SP Medecal Group','235655')

INSERT INTO SITUACAO(descricaoSituacao)
VALUES ('O paciente está com dificuldades para dormir e está buscando a acuputura para ver se ajuda'),('O paciente está com problemas urinários'),('O paciente está com um caso avançado de depressão e está precisando de medicação')					

INSERT INTO USUARIO(idTipoUsuario,email,nome,senha)
VALUES ('1','administrador@email.com','Leonardo','L12345'), ('2','medico@email.com','Carlos','C54321'), ('3','paciente@email.com','Alexandre','A13524')

INSERT INTO MEDICO(idEspecialidade,idClinica,idUsuario,crm)
VALUES ('1','1','2','111111111'),('2','1','2','222222222'),('3','1','2','333333333'),('4','1','2','444444444'),
('5','1','2','555555555'),('6','1','2','666666666'),('7','1','2','777777777'),('8','1','2','888888888'),
('9','1','2','999999999'),('10','1','2','101010101'),('11','1','2','174839272'),('12','1','2','221212122'),
('13','1','2','131313133'),('14','1','2','141414144'),('15','1','2','151515155'),('16','1','2','161616166'),
('17','1','2','171717171')

INSERT INTO PACIENTE(idUsuario,telefone,dataNascimento,cpf,endereco)
VALUES ('3','1111111','11/06/2000','23478568933','Rua.Perdidones,134'),
('3','2222222','17/01/1990','95673862388','Rua.Arabia,83'),
('3','3333333','29/12/1985','63774776863','Rua.CostacomasCosta,384')

INSERT INTO CONSULTA(idClinica,idMedido,idSituacao,idPaciente,dataConsulta)
VALUES ('1','5','1','1','28/08/2021'),
('1','10','2','2','12/11/2021'),
('1','15','3','3','05/09/2021')
























