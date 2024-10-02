#!/bin/bash

# Esperar a que el servidor SQL esté listo
sleep 30

# Ejecutar el script SQL
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "C0mpl3x!Password#2024" -i /init.sql
