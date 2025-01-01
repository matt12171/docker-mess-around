export default function SmallinfoCard({ title, value, icon }) {
  return (
    <div className="small-info-card">
      <div className="small-info-card-text-wrapper">
        <p className="small-info-card-text">{title}</p>
        <p className="small-info-card-value">{value}</p>
      </div>
      <div className="small-info-card-icon">{icon}</div>
    </div>
  );
}