import format from 'pg-format';
import db from '../connection';
const { MOCK_SITE, MOCK_TURBINE } = require('../data/data');

const seed = () => {
  return db
    .query(`DROP TABLE IF EXISTS turbines;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS sites;`);
    })
    .then(() => {
      return db.query(`
        CREATE TABLE sites (
          id INT PRIMARY KEY,
          name VARCHAR NOT NULL,
          capacity INT,
          turbineCount INT,
          location VARCHAR NOT NULL,
          status VARCHAR NOT NULL,
          coords_lat FLOAT,
          coords_long FLOAT
        );
      `);
    })
    .then(() => {
      return db.query(`
        CREATE TABLE turbines (
          id SERIAL PRIMARY KEY,
          name VARCHAR NOT NULL,
          siteId INT REFERENCES sites(id),
          capacity INT,
          location VARCHAR NOT NULL,
          coords_lat FLOAT,
          coords_long FLOAT,
          status VARCHAR NOT NULL,
          lastInspection TIMESTAMP
        );
      `);
    })
    .then(() => {
      const insertSitesQueryStr = format(
        `
        INSERT INTO sites
          (id, name, capacity, turbineCount, location, status, coords_lat, coords_long)
        VALUES %L;
      `,
        MOCK_SITE.map((site:any) => [
          site.id,
          site.name,
          site.capacity,
          site.turbineCount,
          site.location,
          site.status,
          site.coords_lat,
          site.coords_long,
        ])
      );
      return db.query(insertSitesQueryStr);
    })
    .then(() => {
      const insertTurbinesQueryStr = format(
        `
        INSERT INTO turbines
          (name, siteId, capacity, location, coords_lat, coords_long, status, lastInspection)
        VALUES %L;
      `,
        MOCK_TURBINE.map((turbine:any) => [
          turbine.name,
          turbine.siteId,
          turbine.capacity,
          turbine.location,
          turbine.coords_lat,
          turbine.coords_long,
          turbine.status,
          turbine.lastInspection,
        ])
      );
      return db.query(insertTurbinesQueryStr);
    });
};

export default seed;


