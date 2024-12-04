import Charts from "./Charts";
import Filters from "./Filters";
import Map from "./Map";

export default function Body() {
  return (
    <div>
      <Filters />
      <Map />
      <Charts />
    </div>
  );
}
