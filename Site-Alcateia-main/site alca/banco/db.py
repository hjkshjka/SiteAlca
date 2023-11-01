import sqlite3

db_file = "DubConnect.db"

try:
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome TEXT NOT NULL,
            email TEXT NOT NULL, 
            senha TEXT NOT NULL, 
            cpf_cnpj TEXT NOT NULL, 
            foto BLOB NULL,
            conta TEXT NULL,
            agencia TEXT NULL,
            endereco TEXT NULL
        )
    ''')
    
    conn.commit()
    print("Tabela 'usuarios' criada com sucesso no banco de dados.")
except sqlite3.Error as e:
    print(f"Erro ao criar a tabela 'usuarios': {e}")
finally:
    conn.close()

print("Banco de dados criado com sucesso.")