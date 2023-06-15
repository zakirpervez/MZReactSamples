
//Note : This is the third style from getting data from props.
function PDACard({title, handle, image, description}) {
    // Note : This is the first style of getting data from props.
    // const title = props.title;
    // const handle = props.handle;

    //Note : This is the second style from getting data from props.
    //const {title, handle} = props

    return (<div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo is missing"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <div>
                    <p className="title is-4">
                        <h3>{title}</h3>
                    </p>
                </div>
                <div>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    </div>);
}

export default PDACard;