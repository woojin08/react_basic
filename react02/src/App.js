import Header from "./Header";

function App() {

  // jsx 밖의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'red' }} name="김우진" age={3} />
      {/* component 자체에는 Style을 줄 수가 없다 */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'red', fontSize: '40px' }}>meu01</a></li>
          <li><a href="">meu02</a></li>
          <li><a href="">meu03</a></li>
          <li><a href="">meu04</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default App;
