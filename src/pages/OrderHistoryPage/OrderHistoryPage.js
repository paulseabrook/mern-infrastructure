import { checkToken } from '../../utilities/users-service';

export default function OrderHistoryPage() {
  return (
    <>
      <h2>Order History Page</h2>
      <button onClick={checkToken}> Check when my Login Expires</button>
    </>
  );
}
