
const sentence = 'hello world, my name is '
function First(props) {
    return (
        <div>
            {sentence} {props.name}
        </div>
    )
}

export default First