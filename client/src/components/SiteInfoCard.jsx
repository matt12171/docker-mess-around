export default function SiteInfoCard({ site }) {
    return (
        <div id="site-info-card">
            <h2>{site.name}</h2>
            <p>Capacity: {site[0].capacity} MW</p>
            <p>Location: {site[0].location}</p>
            <p>Status: {site[0].status}</p>
            <p>Turbine Count: {site[0].turbineCount}</p>
        </div>
    )
}