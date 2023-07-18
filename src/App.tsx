import "./App.css";
import Table from "./components/Table/Table";
import purchases from "./data/purchases.json";

function App() {
  // TODO HTTP requests from localhost have CORS issues from server so we have to hardcode data
  // but in prod we'd want fresh data from an API
  // try {
  //   fetch( "https://idme.s3.amazonaws.com/interview/data.json");
  // } catch (error) {
  //   console.log(error);
  // }
  return (
    <div className='App'>
      <div className='wrapper'>
        <Table data={purchases} />
      </div>
    </div>
  );
}

export default App;
