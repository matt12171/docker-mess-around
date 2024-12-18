import { turbineIcon } from "./Icon";

export const MOCK_TURBINE = [
  {
    id: 1,
    name: "Mock Turbine 1",
    site: "A serious wind site",
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
    site: "A serious wind site",
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
    site: "A serious wind site",
    capacity: 9, // in MW
    location: "Location 3",
    coords: [51.407841, 1.881034],
    status: "Inactive",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 4,
    name: "Mock Turbine 4",
    site: "A serious wind site",
    capacity: 7, // in MW
    location: "Location 4",
    coords: [51.381386, 1.9],
    status: "Active",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 5,
    name: "Mock Turbine 5",
    site: "A serious wind site",
    capacity: 5, // in MW
    location: "Location 5",
    coords: [51.381386, 2],
    status: "Inactive",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 6,
    name: "Mock Turbine 6",
    site: "A serious wind site",
    capacity: 4, // in MW
    location: "Location 6",
    coords: [51.381386, 2.1],
    status: "Active",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 7,
    name: "Mock Turbine 7",
    site: "A serious wind site",
    capacity: 3, // in MW
    location: "Location 7",
    coords: [51.381386, 2.2],
    status: "Inactive",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 8,
    name: "Mock Turbine 8",
    site: "A serious wind site",
    capacity: 2, // in MW
    location: "Location 8",
    coords: [51.381386, 2.3],
    status: "Active",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
  {
    id: 9,
    name: "Mock Turbine 9",
    site: "A serious wind site",
    capacity: 1, // in MW
    location: "Location 9",
    coords: [51.381386, 2.4],
    status: "Inactive",
    lastInspection: "2021-01-01",
    icon: turbineIcon,
  },
];

export const MOCK_SITE = [
  {
    id: 1,
    name: "A serious wind site",
    capacity: 45, // in MW
    turbineCount: 9,
    location: "UK",
    status: "Active",
  },
];
