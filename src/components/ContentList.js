import React from 'react';

const ContentList = ({ list, dispatch}) => {
    const onDelete = ()=>dispatch({
        type: 'DELETE_LIST',
        id: list.id
    })
    return (
        <tr>
            <td>{list.writer}</td>
            <td>{list.title}</td>
            <td>{list.year}<button onClick={onDelete}>삭제</button></td>
        </tr>
    );
};

export default ContentList;