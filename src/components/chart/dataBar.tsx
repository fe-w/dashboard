import { Card, Flex, Text, ProgressBar, CategoryBar } from "@tremor/react";

export default function ChartDataBar() {
  return (
    <>
      {/* <Card maxWidth="max-w-sm">
        <Flex>
          <Text>$ 9,012 &bull; 45%</Text>
          <Text>$ 20,000</Text>
        </Flex>
        <ProgressBar percentageValue={45} color="blue" marginTop="mt-2" />
      </Card> */}
      <Card maxWidth="max-w-sm">
        <Flex>
          <Text>Rating Product A</Text>
          <Text>62%</Text>
        </Flex>
        <CategoryBar
          categoryPercentageValues={[40, 30, 20, 10]}
          colors={["blue", "gray", "orange", "red"]}
          percentageValue={62}
          marginTop="mt-3"
          />
      </Card>
    </>
  )
}