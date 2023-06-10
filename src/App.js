import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  let headerItems = [{title: 'Homepage', id: 1}, {title: 'Book With Us', id: 2}, {title: 'About Us', id: 3}]
  let socialMedia = [{media: 'Facebook', id: 1}, {media: 'Instagram', id: 2}, {media: 'Tik Tok', id: 3}]
  return (
    <div className="overallStyling">
      <Header title="Opal's Cottage OF DOOM" headerList={headerItems}/>
      <Body />
      <Footer socialMedia={socialMedia}/>
    </div>
  );
}

export default App;
