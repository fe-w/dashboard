import { BarList, Card, Title, Bold, Flex, Text } from '@tremor/react';

const data = [
    { name: 'Twitter', value: 456, href: '/'},
    { name: 'Google', value: 351, href: '/'},
    { name: 'GitHub', value: 271, href: '/'},
    { name: 'Reddit', value: 191, href: '/' },
    { name: 'Youtube', value: 91, href: '/' },
];

export default function chartBarList() {
  return (
    <Card maxWidth="max-w-lg">
      <Title>Website Analytics</Title>
      <Flex marginTop="mt-4">
        <Text><Bold>Source</Bold></Text>
        <Text><Bold>Visits</Bold></Text>
      </Flex>
      <BarList data={ data } marginTop="mt-2" />
    </Card>
  )
}