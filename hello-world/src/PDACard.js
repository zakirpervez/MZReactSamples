
//Note : This is the third style from getting data from props.
function PDACard({title, handle}) {
    // Note : This is the first style of getting data from props.
    // const title = props.title;
    // const handle = props.handle;

    //Note : This is the second style from getting data from props.
    //const {title, handle} = props

    return (<div>
        <h3>{title}</h3>
        <p>{handle}</p>
    </div>);
}

export default PDACard;