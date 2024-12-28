import pool from './db/connection';

// Turbines queries
const getTurbines = (request:any, response:any) => {
  pool.query("SELECT * FROM turbines ORDER BY id ASC", (error:any, results:any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTurbineById = (request:any, response:any) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM turbines WHERE id = $1", [id], (error:any, results:any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// Site queries

const getSites = (request:any, response:any) => {
  pool.query("SELECT * FROM sites ORDER BY id ASC", (error:any, results:any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getSiteById = (request:any, response:any) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM sites WHERE id = $1", [id], (error:any, results:any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

module.exports = {
  getTurbines,
  getTurbineById,
  getSites,
  getSiteById
};
