import Header from "../components/header.js"
import Navigator from "../components/nav.js"

export default class extends React.Component {
    render() {
        return (
            <>
                <head>
                    <title>Система проверки задач - Q-Bit</title>
                    <link
                        rel="stylesheet"
                        href="http://qbit.dots.org.ua/screen.css"
                        type="text/css"
                        media="all"
                    />
                </head>

                <Header />

                <div id="wrapper">
                    <Navigator />
                </div>
                <div id="content">
                    <h1>ПРЕДСТАВЬТЕСЬ</h1>

                    <p>&nbsp;</p>
                    <form
                        id="loginform"
                        action="/contests"
                        method=""
                        style={{ width: "400px", float: "left" }}
                    >
                        <input type="hidden" value="" />
                        <table id="loginformtable">
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="ft">Логин:</span>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            tabIndex="1"
                                            value="popo"
                                            size="20"
                                            maxlength="60"
                                            class="e"
                                            style={{ width: "150px" }}
                                        />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="ft">Пароль:</span>
                                    </td>
                                    <td>
                                        <input
                                            type="password"
                                            tabindex="2"
                                            value="popo"
                                            size="20"
                                            maxlength="60"
                                            class="e"
                                            style={{ width: "150px" }}
                                        />
                                    </td>
                                    <td>
                                        &nbsp;<a href="restore" class="fh">
                                            Забыли пароль?
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="ft">&nbsp;</span>
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            id="remember_me"
                                            tabindex="3"
                                            value="1209600"
                                            class="e cb"
                                        />
                                        <label htmlFor="remember_me">
                                            {" "}
                                            Запомнить вход
                                        </label>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        &nbsp;<input
                                            type="hidden"
                                            value="WzETbgEkzCkXOX1H"
                                        />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr> 
                                    <td>&nbsp;</td>
                                    <td>
                                        <input
                                            type="submit"
                                            onClick="return"
                                            class="b"
                                            tabIndex="4"
                                            value="Войти"
                                        />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <div id="footer">
                    <p>
                        <br />
                        <br />
                        <br />
                        проект поддерживает компания<br />
                        <a href="http://insart.com" target="blank">
                            <img
                                src="http://qbit.dots.org.ua/images/INSART-Logo-145-50.png"
                                width="145"
                            />
                        </a>{" "}
                        <br /> <br />
                        тестирующий сервер DOTS обслуживается компанией<br />{" "}
                        <br />
                        <a href="http://weare.net.ua" target="blank">
                            <img
                                src="http://qbit.dots.org.ua/images/wearenet.png"
                                width="100"
                            />
                        </a>{" "}
                        <br />
                    </p>
                    <p>&nbsp;</p>

                    <p>
                        Страница создана за 0.047 с. Время на сервере: Fri, 01
                        Jun 2018 14:48:55 +0300 GZip включён.
                    </p>
                    <p>
                        <b>
                            Copyright &copy; 2005-2017, Молодёжное научное
                            общество "Q-BIT";
                        </b>{" "}
                        <br />
                        тех. поддержка: Н.А. Арзубов <br />
                        При использовании материалов сайта ссылка на{" "}
                        <a href="http://www.qbit.org.ua/">QBit.org.ua</a>{" "}
                        обязательна.
                    </p>
                    <p>&nbsp;</p>
                </div>
            </>
        )
    }
}
