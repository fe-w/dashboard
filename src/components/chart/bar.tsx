import { Card, Title, Subtitle, AreaChart, BarChart } from "@tremor/react";
import '@tremor/react/dist/esm/tremor.css';

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function chartBar() {
  return (
    <Card>
      <Title>Number of species threatened with extinction (2021)</Title>
      <Subtitle>
        The IUCN Red List has assessed only a small share of the total known
        species in the world.
      </Subtitle>
      <BarChart
        data={chartdata}
        dataKey="name"
        categories={["Number of threatened species"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        marginTop="mt-6"
        yAxisWidth="w-12"
      />
    </Card>
  )
}