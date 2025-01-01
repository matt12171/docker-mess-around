function calculateCurrentSitePowerCapacity(turbineData) {
  return turbineData
    .filter((turbine) => turbine.status === "Active")
    .reduce((acc, turbine) => acc + turbine.capacity, 0);
}

function calculateMaxSitePowerCapacity(turbineData) {
  return turbineData.reduce((acc, turbine) => acc + turbine.capacity, 0);
}

function calculatePercentageOfActiveTurbines(turbineData) {
  const activeTurbines = turbineData.filter((turbine) => turbine.status === "Active");
  return Math.floor((activeTurbines.length / turbineData.length) * 100);
}

export { calculateCurrentSitePowerCapacity, calculateMaxSitePowerCapacity, calculatePercentageOfActiveTurbines };