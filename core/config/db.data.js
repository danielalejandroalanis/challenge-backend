module.exports = {
    HOST: "host.docker.internal",
    USER: "root",
    PASSWORD: "WwFFTRDJ7s2RgPWx",
    DB: "currencies_rates",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };