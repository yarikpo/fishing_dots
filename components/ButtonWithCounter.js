export default class ButtonWithCounter extends React.Component {
    render() {
        return <>
            <button onClick={this.props.onChange}>
                {this.props.title}
            </button>
            <span>{this.props.counter}</span>
        </>
    }
}