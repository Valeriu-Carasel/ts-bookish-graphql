import { Connection } from 'tedious';
import { Request } from 'tedious';

export const serverAttempt = () => {
    const config: any = {
        server: '127.0.0.1',
        authentication: {
            type: 'default',
            options: {
                domain: '',
                userName: 'Borsec',
                password: 'Borsec',
            },
        },
        options: {
            port: 1433,
            database: 'bookish',
            trustServerCertificate: true,
        },
    };

    const connection = new Connection(config);

    // Initialize the connection.
    connection.connect((err) => {
        if (err) {
            console.log('Error: ', err);
        } else {
            // If no error, then good to go...
            requestBooks();
        }
    });

    const requestBooks = () => {
        console.log(connection.state);
        const request = new Request('SELECT * FROM Books', (err, rowCount) => {
            if (err) {
                throw err;
            }
            console.log('DONE!');
            connection.close();
        });

        request.on('row', (columns) => {
            columns.forEach((column) => {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    console.log(column.value);
                }
            });
        });
        // In SQL Server 2000 you may need: connection.execSqlBatch(request);
        connection.execSql(request);
    };
};
