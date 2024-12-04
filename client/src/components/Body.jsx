import Charts from "./Charts";
import Filters from "./Filters";
import Map from "./Map";

export default function Body() {
  return (
    <div id="body-main">
      <section id="body-left">
        <Filters />
      </section>
      <section id="body-right">
        <Map />
        <Charts />
      </section>
    </div>
  );
}
