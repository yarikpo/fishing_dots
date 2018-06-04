import ButtonWithCounter from "../components/ButtonWithCounter.js"

export default class extends React.Component {
    state = {
        "commonCounter" : 0
    }

    handlePlusEvent = () => {
        this.setState({ "commonCounter": this.state.commonCounter + 1 })
    }

    
    render() {
        let colvo = 50;
        let number_of_Hellos = this.state.commonCounter
        let sayhello = Array(number_of_Hellos).fill().filter((_, a) => a < colvo).map(() => 
            <li>Hello</li>
        )
        
        if (this.state.commonCounter > colvo){
            this.setState({
                "commonCounter": colvo
            })
        }
            

        return (
            <>
                <ButtonWithCounter title = {"hello!"} onChange={this.handlePlusEvent} counter={this.state.commonCounter} />
                <p />
                <ButtonWithCounter title = {"Title2"} onChange={this.handlePlusEvent} counter={this.state.commonCounter} />
                <ol>
                    {sayhello}
                </ol>
                <i><a href="/contest">Contests</a></i>
                <br />
                <a href="/qbit">QBIT! (FAKE)</a>
            </>
        )
    }
}