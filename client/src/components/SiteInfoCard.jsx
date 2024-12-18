export default function SiteInfoCard({ name, capacity, location, status, turbineCount }) {
    return (
        <div id="site-info-card">
            <h2>{name}</h2>
            <p>Capacity: {capacity} MW</p>
            <p>Location: {location}</p>
            <p>Status: {status}</p>
            <p>Turbine Count: {turbineCount}</p>
        </div>
    )
}