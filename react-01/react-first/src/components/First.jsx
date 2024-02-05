
const sentence = 'hello world, my name is '

const cssClass = 'bg-red'
function First({name = 'default'}) {
    return (
        <div className={cssClass}>
            {sentence} {name}
        </div>
    )
}

export default First