export default class Navigator extends React.Component {
    render() {
        return (
            <>
                <div id="nav">
                    <ul>
                        <li>
                            <a title="Список турниров" href="contests">
                                Турниры
                            </a>
                        </li>

                        <li>
                            <a title="Личная информация" href="users?id=11570">
                                Профайл
                            </a>
                        </li>
                        <br />

                        <li>
                            <a title="Памятка" href="documents/instruction.pdf">
                                Памятка
                            </a>
                        </li>
                        <li>
                            <a title="Личные сообщение" href="messages">
                                Вопросы{" "}
                            </a>
                        </li>

                        <li>&nbsp;</li>

                        <li>
                            <a title="Справка по системе" href="help">
                                Помощь
                            </a>
                        </li>

                        <li>
                            <a title="Выйти из системы" href="/">
                                Выйти
                            </a>
                        </li>
                    </ul>

                    <p>
                        &nbsp;&nbsp;<b id="user_nickname">popo</b>
                    </p>

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
