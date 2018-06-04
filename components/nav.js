export default class Navigator extends React.Component {
    render() {
        return (
            <>
                <div id="nav">
                    <ul>
                        <br />
                        <li>
                            <a title="Памятка" href="documents/instruction.pdf">
                                Памятка
                            </a>
                        </li>
                        <li>&nbsp;</li>

                        <li>
                            <a title="Справка по системе" href="help">
                                Помощь
                            </a>
                        </li>

                        <li>
                            <a title="Войти в систему" href="login">
                                Войти
                            </a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a title="DOTS" href="http://dots.org.ua/">
                                DOTS
                            </a>
                        </li>
                        <li>
                            <a title="QBIT" href="http://qbit.org.ua/">
                                QBIT
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
