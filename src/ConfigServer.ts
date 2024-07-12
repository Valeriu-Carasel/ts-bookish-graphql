import { Connection } from 'tedious';

export const serverAttempt = (): Connection => {
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
    connection.connect(async (err) => {
        if (err) {
            console.log('Error: ', err);
        }
    });

    return connection;
};
