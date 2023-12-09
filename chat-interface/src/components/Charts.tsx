import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./../App.css";

// Convert Unix timestamp to local date
const convertTimestampToLocalDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString(); // Adjust the format as needed
};

const LineChartComponent = ({
  data,
}: {
  data: { timestamp: string; value_usd: string }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          type="category"
          scale="time"
          tickFormatter={convertTimestampToLocalDate}
          angle={-30}
          textAnchor="end"
        />
        <YAxis dataKey="value_usd" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value_usd"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
