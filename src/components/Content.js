import React from 'react';
import ContentList from './ContentList';
import { useBookList,useBookDispatch } from '../context/BookContext';
const Content = () => {
    const { filterList } = useBookList();
    const dispatch = useBookDispatch();
    
    return (
        <div className='content'>
            <table>
                <tr>
                    <th>글쓴이</th>
                    <th>제목</th>
                    <th>년도</th>
                </tr>
                {filterList.map(list=><ContentList list={list} key={list.id} dispatch={dispatch}/>)}
                
            </table>
        </div>
    );
};

export default Content;