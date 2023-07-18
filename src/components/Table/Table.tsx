import { Purchase } from "../../models/Purchase";
import "./Table.css";

// TODO this table is tightly coupled with the Purchase data type; if we were to expand this in the future we'd want to
// maintain a generic table component and then make specific tables to extend the generic for a specific data type
function Table({ data }: { data: Purchase[] }) {
  if (!data.length) return <div>No purchases to display</div>;
  return (
    <div className='table-wrapper'>
      <table>
        <caption>Purchases</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Purchase Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            {/* TODO the design indicate a headless column with kebab menu icons but it wasn't mentioned in the stories; confirm requirements */}
          </tr>
        </thead>
        <tbody>
          {data.map((purchase) => (
            <tr key={purchase.id}>
              <th scope='row' className='name-cell'>
                {purchase.name}
              </th>
              {/* TODO empty alt here is intentional to hide these presentation-only images from screen readers
            but if we had location name metadata we could supply that to the alt attribute */}
              <td className='icon-cell'>
                <img className='icon' src={purchase.location} alt='' />
              </td>
              <td className='date-cell'>
                {/* screen readers will already announce the header for this cell so we don't want to repeat that for screen reader users */}
                <div aria-hidden='true' className='purchase-date-label'>
                  Purchase Date:
                </div>
                <div className='medium-date'>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                  }).format(new Date(purchase.purchaseDate))}
                </div>
                <div className='long-date'>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(new Date(purchase.purchaseDate))}
                </div>
              </td>
              {/* TODO convert into badge style */}
              <td className='category-cell'>{purchase.category}</td>
              {/* TODO ideally we'd get presentation-ready text from the response. Barring that we'd want to write a more 
            robust string sanitizer */}
              <td>{purchase.description.replaceAll("&#x27;", "'")}</td>
              <td className='price-cell'>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(purchase.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
