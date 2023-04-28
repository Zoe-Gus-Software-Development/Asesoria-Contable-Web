﻿//Sección MySQL del código
var mysql = require("mysql2/promise");

var SQL_Config_Data =
{
	host: "",
	user: "",
	password: "",
	database: "",
	port: ,
	charset: 'UTF8_GENERAL_CI'
}

async function Realizar_Query(query)
{
	var String_A_Devolver;
	var connection;
	try
	{
		connection = await mysql.createConnection(SQL_Config_Data);
		String_A_Devolver = await connection.execute(query);
	}
	catch(err)
	{
		console.log(err);
	}
	finally
	{
		if(connection && connection.end) connection.end();
	}
	return String_A_Devolver[0];
}

exports.Realizar_Query = Realizar_Query;
