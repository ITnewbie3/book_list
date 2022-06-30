import React,{createContext, useContext, useReducer} from 'react';

// 객체배열로 원본배열보존을 위해 따로 필터리스트를 만들어줌.
// 만들지 않을시 한번 검색 후 나머지 배열이 다 사라져있음.
const initialLists = {
    total: [
        {id:1, writer:"공유",title:"나는 나로 살기로 했다.",year:"2022"},
        {id:2, writer:"전지현",title:"경이로운 소문",year:"2022"},
        {id:3, writer:"손예진",title:"UI/UX 디자인 이론과 실습",year:"2022"},
        {id:4, writer:"현빈",title:"만들면서 배우는 제이쿼리",year:"2022"},
        {id:5, writer:"공유",title:"이상한 나라의 엘리스",year:"2021"},
        {id:6, writer:"신채경",title:"인어공주",year:"2021"},
        {id:7, writer:"유진",title:"일러스트레이터 강의",year:"2021"},
        {id:8, writer:"박소담",title:"인터렉티브 웹디자인",year:"2020"},
        {id:9, writer:"정우성",title:"코어 자바스크립트",year:"2020"},
        {id:10, writer:"이정재",title:"기초부터 배우는 html css",year:"2020"},
        {id:11, writer:"한가인",title:"디자이너의 포토샵 스킬북",year:"2019"},
        {id:12, writer:"이유리",title:"인디자인 프로",year:"2019"},
        {id:13, writer:"김태희",title:"좋은사람에게만 좋은 사람이고 싶다.",year:"2019"},
        {id:14, writer:"케이윌",title:"내일죽고 싶지만 떡볶이는 먹고싶어",year:"2019"}
    ],
    filterList: [
        {id:1, writer:"공유",title:"나는 나로 살기로 했다.",year:"2022"},
        {id:2, writer:"전지현",title:"경이로운 소문",year:"2022"},
        {id:3, writer:"손예진",title:"UI/UX 디자인 이론과 실습",year:"2022"},
        {id:4, writer:"현빈",title:"만들면서 배우는 제이쿼리",year:"2022"},
        {id:5, writer:"공유",title:"이상한 나라의 엘리스",year:"2021"},
        {id:6, writer:"신채경",title:"인어공주",year:"2021"},
        {id:7, writer:"유진",title:"일러스트레이터 강의",year:"2021"},
        {id:8, writer:"박소담",title:"인터렉티브 웹디자인",year:"2020"},
        {id:9, writer:"정우성",title:"코어 자바스크립트",year:"2020"},
        {id:10, writer:"이정재",title:"기초부터 배우는 html css",year:"2020"},
        {id:11, writer:"한가인",title:"디자이너의 포토샵 스킬북",year:"2019"},
        {id:12, writer:"이유리",title:"인디자인 프로",year:"2019"},
        {id:13, writer:"김태희",title:"좋은사람에게만 좋은 사람이고 싶다.",year:"2019"},
        {id:14, writer:"케이윌",title:"내일죽고 싶지만 떡볶이는 먹고싶어",year:"2019"}
    ] 
}


function bookReducer(state, action){
    switch(action.type){
        case "YEAR_LISTS":
        return {   // 연도별 검색기능
            ...state, // 객체배열을 모두 펼쳐준다.
            filterList: state.total.filter(list=>list.year === action.year)
        }        // 펼친후 filter를 이용해 클릭된 연도와 total에 있는 연도를 비교해 해당 연도만 가져오도록 한다.
        case "TOTAL_LISTS":
        return state; 
        case "DELETE_LIST": // 삭제 기능
        return { // total과 filterList 모두 삭제하기위해 두가지를 모두 id를 기준으로 잡아 필터로 해당 id와 다른것만 출력하도록 한다.
            total:state.total.filter(list=>list.id !== action.id),
            filterList:state.filterList.filter(list=>list.id !== action.id)
        }
        default:
        return state;
    }
}
const BookListContext = createContext(); // 어디서든 불러올 수 있도록 Context 생성
const BookDispatchContext = createContext();
export function BookProvider({children}){
    const [state, dispatch] = useReducer(bookReducer, initialLists); // useReducer를 선언해 변수에 넣어준다.
    return (
        <BookListContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>    
                {children}
            </BookDispatchContext.Provider>
        </BookListContext.Provider>
    )// BookListContext, BookDispatchContext에 값을 넣어서 어디서든 사용가능하도록 만듬.
}
// 사용을 쉽게 하기 위해 함수에 넣어 함수만사용하도록 미리 함수선언
export function useBookList(){
    return useContext(BookListContext);
}
export function useBookDispatch(){
    return useContext(BookDispatchContext);
}

