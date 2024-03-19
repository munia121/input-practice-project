/* eslint-disable react/prop-types */

const Link = ({route}) => {
    return (
        <li className="hover:bg-purple-200 p-2">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;