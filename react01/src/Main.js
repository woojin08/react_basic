const Main = ({ kim, work }) => {

    return (
        <main>
            {/* 중괄호 치고 쳐준다 */}
            {kim}은{work}를 즐겨합니다.
        </main>
    )
}

// 전달받는 값이 없을 때 기본으로 전해주는 값
Main.defaultProps = {
    work: '놀기'
}
export default Main;