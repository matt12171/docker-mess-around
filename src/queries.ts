const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

const getTurbines = (request:any, response:any) => {
  pool.query("SELECT * FROM turbine ORDER BY id ASC", (error:any, results:any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getTurbines,
};
