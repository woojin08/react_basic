import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";


const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main kim="김우진" work="노래하기" />
            <Main kim="이우진" work="책보기" />
            <Main kim="오우진" work="요리하기" />
            <Main kim="박우진" />
            <Footer />
        </Wrapper>
    )
}

// 하나를 내보낼 때
export default App;