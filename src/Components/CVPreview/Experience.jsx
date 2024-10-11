export default function Experience({startTime, endTime, title, subtitle, description=null}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        gap: "16px",
        width: '100%'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
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
