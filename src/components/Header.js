import React from 'react';
import { useBookDispatch, useBookList } from '../context/BookContext';

// 
const List = ({year}) => {
    const dispatch = useBookDispatch();
    const onYearChange=()=>dispatch({
        type:'YEAR_LISTS',
        year: year
    })
    
    return (
        <li onClick={onYearChange}>{year}년도</li>
        // 선언부에서 받은 year연도값과 함께 li로 버튼이 생성됨 ( 보유하고 있는 연도만... 지워지면 중복제거로 사라짐)
    )
}
const Header = () => {
    const { total } = useBookList();
    //1)map메서드를 활용 ["2022","2022","2021","2021"...]
    //2)new Set set을 생성(같은 값을 허용하지않음) { "2022","2021","2020","2019"} 
    //3)스프레드 구문으로 배열로 변경 [...Set] [ "2022","2021","2020","2019"]
    const yearArr = [...new Set(total.map(book => book.year))];
    return (
        <div className='header'>
            <h2>booklist</h2>
            <ul>
                {/* total의 year로만 중복값을 제거한 연도를 표출해주고 💥year값을💥 넘겨준다. */}
                {yearArr.map((year,index)=><List year={year} key={index}/>)}
            </ul>
        </div>
    );
};

export default Header;