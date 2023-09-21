import Link from "./Link";

function Sidebar() {
    const links = [
        {'label': 'Dropdown', 'path': '/'},
        {'label': 'Button', 'path': '/button'},
        {'label': 'Accordion', 'path': '/accordion'},
    ];

    const renderedLinks = links.map((renderedLink) => {
        return <Link
            key={renderedLink.label}
            to={renderedLink.path}
            mClassNames="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {renderedLink.label}
        </Link>;
    })
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;