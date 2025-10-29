export default function SectionHeader({ heading, handleCollapse, refrence }) {
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h5>{heading}</h5>
    <p
      style={{ color: "#34C94B", cursor: "pointer" }}
      onClick={() => handleCollapse(refrence)}
    >
      Collapse
    </p>
  </div>;
}
