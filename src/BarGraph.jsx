import { Bar } from "react-chartjs-2";

export default function BarGraph() {
  const fare = {
    "-0.001, 0.0252": 16,
    "0.0252, 0.0513": 17,
    "0.0513, 0.058": 14,
    "0.058, 0.0693": 16,
    "0.0693, 0.101": 14,
    "0.101, 0.111": 16,
    "0.111, 0.149": 14,
    "0.149, 0.155": 17,
    "0.155, 0.176": 14,
    "0.176, 0.234": 17,
    "0.234, 0.397": 12,
    "0.397, 1.0": 16
  };

  const age = {
    "-0.001, 0.193": 16,
    "0.193, 0.254": 16,
    "0.254, 0.292": 16,
    "0.292, 0.355": 17,
    "0.355, 0.393": 12,
    "0.393, 0.444": 24,
    "0.444, 0.469": 8,
    "0.469, 0.524": 13,
    "0.524, 0.589": 15,
    "0.589, 0.633": 16,
    "0.633, 0.722": 18,
    "0.722, 1.0": 12
  };
  const data = {
    labels: [...new Set([...Object.keys(age)])],

    datasets: [
      {
        yAxisID: "y1",
        label: "Age",
        backgroundColor: "#FFB0C1",
        borderWidth: 1,
        data: [...Object.values(age)]
      },
      {
        yAxisID: "y",
        label: "Fare",
        backgroundColor: "#9AD0F5",
        borderWidth: 1,
        data: [...Object.values(fare)]
      }
    ]
  };

  return (
    <div className="myBar">
      <Bar data={data} height={500} />
    </div>
  );
}
