export default function GamesPage(props) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}
