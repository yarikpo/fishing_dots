export default class ContestInfo extends React.Component {
    render(){
        return (
            <>
                <tr>
                                    <td>&nbsp;</td>
                                    <td class="pt">
                                        <a href="contests?id=1741">
                                            {this.props.name}
                                        </a>
                                        <br />{" "}
                                        <span class="s">
                                            <span class="g">Тип турнира</span>{" "}
                                            <b>{this.props.type}</b>
                                            <br />
                                            <span class="g">Начало: </span>{" "}
                                            {this.props.date_of_start}<br />
                                            <span class="g">
                                                Преподаватель:{" "}
                                            </span>{" "}
                                            <a href="/users?id=1002">
                                                {this.props.teacher_name}
                                            </a>
                                            <br />
                                        </span>
                                    </td>
                                    <td class="pc">{this.props.going}</td>
                                    <td class="pc">{this.props.registered}</td>
                                </tr>
            </>
        )
    }
} 