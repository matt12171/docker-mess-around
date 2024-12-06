import { turbineIcon } from "./Icon";

export const MOCK_TURBINE = [
  {
    id: 1,
    name: "Mock Turbine 1",
    capacity: 8, // in MW
    location: "Location 1",
    coords: [51.598221, 1.79009],
    status: "Active",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 2,
    name: "Mock Turbine 2",
    capacity: 6, // in MW
    location: "Location 2",
    coords: [51.481402, 1.600944],
    status: "Active",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 3,
    name: "Mock Turbine 3",
    capacity: 9, // in MW
    location: "Location 3",
    coords: [51.407841, 1.881034],
    status: "Inactive",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
];
