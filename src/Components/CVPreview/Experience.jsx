export default function Experience({startTime, endTime, title, subtitle, description=null}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 6fr",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap:'10px',
        }}
      >
        <span>{startTime}</span>
        <span>~</span>
        <span>{endTime}</span>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
