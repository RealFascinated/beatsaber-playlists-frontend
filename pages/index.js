import { Button, Table, Text } from '@nextui-org/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Text css={{textAlign: 'center', fontWeight: '$bold'}}>There has been a total of 1 playlists uploaded to BeatSaber Playlists.</Text>
      <Text css={{textAlign: 'center'}}>Massive thank you to everyone uploading their playlists :)</Text>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Uploader</Table.Column>
          <Table.Column>Song Count</Table.Column>
          <Table.Column>Total Downloads</Table.Column>
          <Table.Column>Last Updated</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell><a href='/playlist/steamid/playlistname'>Example</a></Table.Cell>
            <Table.Cell><a href='/redirect/?link=steamacclink'>Example</a></Table.Cell>
            <Table.Cell>69</Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>02/05/2022 - 15:48</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
