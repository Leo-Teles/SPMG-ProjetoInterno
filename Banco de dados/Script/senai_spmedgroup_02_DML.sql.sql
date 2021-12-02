USE SPMG;
GO

INSERT INTO TIPOUSUARIO(idTipoUsuario,qualUsuario)
VALUES ('1','Administrador'), ('2','Médico'), ('3','Paciente')

INSERT INTO ESPECIALIDADE(idEspecialidade,especiaMedica)
VALUES ('1','Acupuntura'),('2','Anestesiologia'),('3','Angiologia'),('4','Cardiologia'),('5','Cirurgia Cardiovascular'),('6','Cirurgia da Mão'),
('7','Cirurgia do Aparelho Digestivo'),('8','Cirurgia Geral'),('9','Cirurgia Pediátrica'),('10','Cirurgia Plástica'),('11','Cirurgia Torácica'),
('12','Cirurgia Vascular'),('13','Dermatologia'),('14','Radioterapia'),('15','Urologia'),('16','Pediatria'),('17','Psiquiatria')

INSERT INTO CLINICA(idClinica,enderecoClinica,telefoneClinica,horarioFuncionamento,nomeClinica,cnpj)
VALUES ('1','Av.Paulista,3745','38920124','Seg á Sab/7:00 as 19:00','SP Medecal Group','235655')

INSERT INTO SITUACAO(idSituacao,descricaoSituacao)
VALUES ('1','O paciente está com dificuldades para dormir e está buscando a acuputura para ver se ajuda'),('2','O paciente está com problemas urinários'),('3','O paciente está com um caso avançado de depressão e está precisando de medicação')					

INSERT INTO USUARIO(idUsuario,idTipoUsuario,email,nome,senha)
VALUES ('1','1','administrador@email.com','Leonardo','L12345'), ('2','2','medico@email.com','Carlos','C54321'), ('3','3','paciente@email.com','Alexandre','A13524')

INSERT INTO MEDICO(idMedico,idEspecialidade,idClinica,idUsuario,crm)
VALUES ('123','1','1','2','11111111-1'),('456','2','1','2','22222222-2'),('789','3','1','2','33333333-3'),('987','4','1','2','44444444-4'),
('654','5','1','2','55555555-5'),('321','6','1','2','66666666-6'),('135','7','1','2','77777777-7'),('791','8','1','2','88888888-8'),
('246','9','1','2','99999999-9'),('680','10','1','2','10101010-1'),('234','11','1','2','17483927-2'),('654','12','1','2','22121212-2'),
('586','13','1','2','13131313-3'),('896','14','1','2','14141414-4'),('115','15','1','2','15151515-5'),('548','16','1','2','16161616-6'),
('452','17','1','2','17171717-1')

INSERT INTO PACIENTE(idPaciente,idUsuario,telefone,dataNascimento,cpf,endereco)
VALUES ('1','3','1111-1111','11/06/2000','234.785.689-33','Rua.Perdidones,134'),
('2','3','2222-2222','17/01/1990','956.738.623-88','Rua.Arabia,83'),
('3','3','3333-3333','29/12/1985','637.747.768-63','Rua.CostacomasCosta,384')

INSERT INTO CONSULTA(idConsulta,idClinica,idMedido,idSituacao,idPaciente,dataConsulta)
VALUES ('151','1','123','1','3','28/08/2021'),
('171','1','452','3','1','12/11/2021'),
('157','1','115','2','2','05/09/2021')
























