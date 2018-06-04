import ContestInfo from "../components/contest_info.js"
import Header from "../components/header.js"
import Navigator from "../components/nav_loginned.js"

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
                    <div id="content">
                        <h1>ТУРНИРЫ</h1>
                        <div class="search">
                            <table width="100%">
                                <tr>
                                    <td width="30%" />
                                    <td
                                        width="70%"
                                        align="right"
                                        text-align="right"
                                    >
                                        <form
                                            id="searchform"
                                            class="i"
                                            action="contests"
                                            method="get"
                                        >
                                            Поиск по названию:{" "}
                                            <input
                                                type="text"
                                                class="e"
                                                name="search"
                                                value=""
                                                size="20"
                                                maxlength="60"
                                            />
                                            <input
                                                type="submit"
                                                class="b"
                                                value="Искать"
                                            />
                                        </form>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <table
                            id="conteststable"
                            class="t"
                            cellSpacing="0"
                            width="100%"
                        >
                            <tbody>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th width="60%" nowrap="yes" class="l">
                                        <a href="contests?sort=1">Название</a>
                                    </th>
                                    <th width="20%" nowrap="yes">
                                        Состояние
                                    </th>
                                    <th width="20%" nowrap="yes">
                                        <a href="contests?sort=3">Ваш статус</a>
                                    </th>
                                </tr>
                                <ContestInfo name="Первый урок!" type="Практика" date_of_start="01.01.1970 12.00.00" teacher_name = "Никола Алексеевич" going = "Ожидание" registered = "Зарегистрирован" /> 
                            </tbody>
                        </table>
                        <br />
                        Страницы: <a class="nc">1</a>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </>
        )
    }
}
