import {
  Card,
  Title,
  Tracking,
  TrackingBlock,
  Flex,
  Text,
} from "@tremor/react";

type St = {
  [Operational: string]: any;
  Downtime: String;
  Maintenance: String;
  Degraded: String;
}

const statusStyles: St = {
  Operational: "emerald",
  Downtime: "rose",
  Maintenance: "gray",
  Degraded: "amber",
};


const data = [
  { id: 1, status: "blue" },
  { id: 2, status: "blue" },
  { id: 3, status: "blue" },
  { id: 4, status: "blue" },
  { id: 5, status: "blue" },
  { id: 6, status: "blue" },
  { id: 7, status: "blue" },
  { id: 8, status: "blue" },
  { id: 9, status: "blue" },
  { id: 10, status: "blue" },
  { id: 11, status: "blue" },
  { id: 12, status: "blue" },
  { id: 13, status: "blue" },
  { id: 14, status: "blue" },
  { id: 15, status: "Downtime" },
  { id: 16, status: "blue" },
  { id: 17, status: "blue" },
  { id: 18, status: "blue" },
  { id: 19, status: "blue" },
  { id: 20, status: "Maintenance" },
  { id: 21, status: "blue" },
  { id: 22, status: "blue" },
  { id: 23, status: "blue" },
  { id: 24, status: "Degraded" },
  { id: 25, status: "blue" },
];

export default function ChartTracker() {
  return (
    <div className="grid grid-cols-1 gap-12 mx-auto">
      <div className="space-y-3">
        <Card maxWidth="max-w-sm">
            <Title>Status monitoring</Title>
            <Text>Lena&apos;s Webshop &bull; May 2022</Text>
            <Flex justifyContent="justify-end" marginTop="mt-4">
                <Text>Uptime 99.4%</Text>
            </Flex>
            <Tracking marginTop="mt-2">
                { data.map((item) => (
                    <TrackingBlock
                        color={ statusStyles[item.status] }
                        tooltip={ item.status }
                        key={ item.id }
                    />
                )) }
            </Tracking>
        </Card>
      </div>
    </div>
  )
}