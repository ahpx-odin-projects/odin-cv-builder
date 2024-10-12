import Card from "../../Universal/Card";
import TextBox from "../../Universal/TextBox";

export default function EducationInfo() {
  return (
    <Card>
      <h2>Education</h2>
      <p>Schools and any specialized training.</p>
      <TextBox title="Institution" />
      <TextBox title="Title" />
      <TextBox title="Start" type="date" />
      <TextBox title="End" type="date" />
      <button>Update</button>
    </Card>
  );
}
