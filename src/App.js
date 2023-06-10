import Header from "./components/Header";

function App() {
  let headerItems = [{title: 'Homepage', id: 1}, {title: 'Book With Us', id: 2}, {title: 'About Us', id: 3}]
  return (
    <div>
      <Header title="Opal's Cottage OF DOOM" headerList={headerItems}/>
    </div>
  );
}

export default App;
