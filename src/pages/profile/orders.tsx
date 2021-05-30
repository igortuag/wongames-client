import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

export default function Cards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {}
  }
}
