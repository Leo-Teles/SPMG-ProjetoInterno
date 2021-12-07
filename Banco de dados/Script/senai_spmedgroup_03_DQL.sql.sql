USE SPMG;
GO

USE SPMG;
GO

SELECT * FROM CLINICA;
SELECT * FROM TIPOUSUARIO;
SELECT * FROM ESPECIALIDADE ORDER BY idEspecialidade asc;
SELECT * FROM USUARIO ORDER BY idUsuario asc;
SELECT * FROM PACIENTE;
SELECT * FROM MEDICO;
SELECT * FROM SITUACAO;
SELECT * FROM CONSULTA;


--Mostrar a quantidade de usuários:
SELECT COUNT(IdUsuario) 'Quantidade de usuários' FROM USUARIO ;
GO



--Convertendo data de nascimento para o formato brasileiro
SELECT FORMAT(dataNascimento, 'dd/MM/yyyy')  FROM PACIENTE;
GO



-