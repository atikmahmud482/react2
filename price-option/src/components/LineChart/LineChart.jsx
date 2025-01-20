import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const LineMarksData = [
    { id: 1, name: "Alice", mathMarks: 85 },
    { id: 2, name: "Bob", mathMarks: 78 },
    { id: 3, name: "Charlie", mathMarks: 92 },
    { id: 4, name: "David", mathMarks: 88 },
    { id: 5, name: "Eva", mathMarks: 74 },
    { id: 6, name: "Frank", mathMarks: 95 },
    { id: 7, name: "Grace", mathMarks: 81 },
    { id: 8, name: "Hannah", mathMarks: 89 },
    { id: 9, name: "Ivan", mathMarks: 76 },
    { id: 10, name: "Jack", mathMarks: 90 },
  ];
  const studentsData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 82,
    },
    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 74, chemistryMarks: 80 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 91,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 88,
      physicsMarks: 84,
      chemistryMarks: 86,
    },
    { id: 5, name: "Eva", mathMarks: 74, physicsMarks: 72, chemistryMarks: 76 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 95,
      physicsMarks: 89,
      chemistryMarks: 93,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 81,
      physicsMarks: 77,
      chemistryMarks: 79,
    },
    {
      id: 8,
      name: "Hannah",
      mathMarks: 89,
      physicsMarks: 85,
      chemistryMarks: 87,
    },
    {
      id: 9,
      name: "Ivan",
      mathMarks: 76,
      physicsMarks: 70,
      chemistryMarks: 74,
    },
    {
      id: 10,
      name: "Jack",
      mathMarks: 90,
      physicsMarks: 86,
      chemistryMarks: 88,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={(LineMarksData, studentsData)}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="mathMarks"></YAxis>
        <Line dataKey="mathMarks" stroke="yellow"></Line>
        <Line dataKey="physicsMarks" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
