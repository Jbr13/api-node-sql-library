module.exports = [
  {
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "<YourStrong@Passw0rd>",
    database: "library",
    options: {
      encrypt: false,
    },
    entities: [
      "./src/modules/**/infra/typeorm/entities/**/*.{ts,js}",
      "./src/shared/infra/typeorm/entities/**/*.{ts,js}"
    ],
    migrations: ["./resources/database/migrations/*.{ts,js}"],
    synchronize: false, // Tenta criar a tabela with true
    logging: true
  }
];
