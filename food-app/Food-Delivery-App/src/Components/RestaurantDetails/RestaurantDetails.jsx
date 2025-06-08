import { useParams } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();

  // Optional: Fetch item from API using id
  // or find from static data

  return (
    <div className="container mt-5">
      <h2>Details for Restaurant ID: {id}</h2>
      {/* Show more details here */}
    </div>
  );
}

export default RestaurantDetails;
