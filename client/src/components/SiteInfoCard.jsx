export default function SiteInfoCard({ site }) {
    return (
        <div className="info-card">
            <h3>{site[0].name}</h3>
            <p>Capacity: {site[0].capacity} MW</p>
            <p>Location: {site[0].location}</p>
            <p>Status: {site[0].status}</p>
            <p>Turbine Count: {site[0].turbineCount}</p>
        </div>
    )
}