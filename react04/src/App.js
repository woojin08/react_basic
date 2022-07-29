import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {

  const monga = '먼가';
  const DATA = [
    { id: 1, name: '김우진' },
    { id: 2, name: '전우진' },
    { id: 3, name: '홍우진' },
    { id: 4, name: '황우진' },
    { id: 5, name: '황우진' },
    { id: 6, name: '황우진' },
    { id: 7, name: '황우진' },
  ]
  return (
    <>

      <Header monga={monga} member={DATA} />
      <Main />
      <Footer />

    </>
  );
}

export default App;
