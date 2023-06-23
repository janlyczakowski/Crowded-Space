import { twoline2satrec, propagate, gstime, eciToGeodetic } from 'satellite.js';
import { radToDeg } from 'three/src/math/MathUtils';

// Function that gets data in TLE format of a single satellite and returns position in XYZ

export function getSatellitePosition(tleLine1, tleLine2) {
  // Initialize a satellite record
  const satrec = twoline2satrec(tleLine1, tleLine2);

  //  Propagate time using JavaScript Date
  const positionAndVelocity = propagate(satrec, new Date());
  const gmst = gstime(new Date());

  // The position_velocity result is a key-value pair of ECI coordinates.
  // These are the base results from which all other coordinates are derived.
  const positionEci = positionAndVelocity.position;
  // const velocityEci = positionAndVelocity.velocity;

  // Get geodetic position
  const positionGd = eciToGeodetic(positionEci, gmst);

  const latitude = positionGd.longitude;
  const longitude = positionGd.latitude;
  const altitude = positionGd.height;

  // lat and lon should in degrees
  function calcPosFromLatLonRad(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z];
  }

  // Assuming that altitude 0 is equal to radius 1 approximate scalar altitude/8000 was used for visualization of altitude of satellite
  const [x, y, z] = calcPosFromLatLonRad(
    radToDeg(longitude),
    radToDeg(latitude),
    1 + altitude / 8000
  );

  return [x, y, z];
}
