import { get } from "http";
import pool from "./db/connection";

// TODO: Refactor to use async/await and add proper types

// Turbines queries
const getTurbines = (request: any, response: any) => {
  pool.query(
    "SELECT * FROM turbines ORDER BY id ASC",
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getTurbineById = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM turbines WHERE id = $1",
    [id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

export const postTurbine = async (req: any, res: any): Promise<any> => {
  console.log('req:', req.body);
  try {
    const {
      name,
      capacity,
      coords_lat,
      coords_long,
      status,
      lastInspection,
    } = req.body;



    // TODO: Add siteId properly - just hardcoding for now
    // TODO: Also might just delete location - not sure if it's needed
    const siteId = 1;
    const location = 'UK';

    if (!name || !siteId || !capacity || !location || !coords_lat || !coords_long || !status || !lastInspection) {
      return res.status(400).json({
        error: 'Missing required fields: name, siteId, capacity, location, coords_lat, coords_long, status, lastInspection',
      });
    }

    const insertQuery = `
      INSERT INTO turbines (
        name,
        siteId,
        capacity,
        location,
        coords_lat,
        coords_long,
        status,
        lastInspection
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;  
    `;

    const insertValues = [
      name,
      siteId,
      capacity,
      location,
      coords_lat,
      coords_long,
      status,
      lastInspection,
    ];

    const { rows } = await pool.query(insertQuery, insertValues);

    return res.status(201).json({
      message: 'Turbine added successfully',
      turbineId: rows[0].id,
    });
  } catch (error) {
    console.error('Error inserting turbine:', error);
    return res.status(500).json({
      error: 'An error occurred while adding the turbine',
    });
  }
};
// Site queries

const getSites = (request: any, response: any) => {
  pool.query(
    "SELECT * FROM sites ORDER BY id ASC",
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getSiteById = (request: any, response: any) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM sites WHERE id = $1",
    [id],
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getTurbines,
  getTurbineById,
  getSites,
  getSiteById,
  postTurbine,
};


