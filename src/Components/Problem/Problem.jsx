import React from 'react';

const Problem = ({ problem }) => {
    const { id, title, difficulty, status, url } = problem;
    return (
        <tr>
            <th>
                <label>
                    <input id={id} type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                {title}
            </td>
            <td>{difficulty}</td>
            <th>
                <button className="btn btn-ghost btn-xs">
                    <a href={url} target='_blank'>Practice</a>
                </button>
            </th>
        </tr>
    );
};

export default Problem;


