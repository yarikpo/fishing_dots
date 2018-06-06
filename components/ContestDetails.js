export default class ContestDetails extends React.Component {
  render() {
    return (
      <>
        <h1>Турнир</h1>

        <table id="contestinfotable" cellspacing="4" cellpadding="2">
          <tbody>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Название:
              </td>
              <td width="80%">{this.props.title}</td>
            </tr>
            <tr>
              <td class="b" width="20%">
                Тип турнира:
              </td>
              <td width="80%">{this.props.type}</td>
            </tr>

            <tr>
              <td colspan={2}>
                <span class="h2">Условия</span>
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Время начала:
              </td>
              <td class="h" width="80%">
                {this.props.start_time}
              </td>
            </tr>
            <tr>
              <td class="b">Длительность:</td>
              <td class="h">{this.props.duration}</td>
            </tr>
            <tr>
              <td class="b">Время окончания:</td>
              <td class="h">-</td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Статус:
              </td>
              <td class="h" width="80%">
                {this.props.status}
              </td>
            </tr>
            <tr>
              <td class="b">Прошло от начала:</td>
              <td class="h">276 - 10:31:03</td>
            </tr>
            <tr>
              <td class="b">Осталось до конца:</td>
              <td class="h">724 - 06:08:57</td>
            </tr>

            <tr>
              <td colspan={2}>
                <span class="h2">Участие</span>
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true" valign="top">
                Способ регистрации:
              </td>
              <td class="h" width="80%">
                "-"
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Ваше состояние:
              </td>
              <td class="h" width="80%">
                {this.props.registration_status}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>
            <a href={`contests?login=${this.props.id}`} title="Войти">
              Войти
            </a>
          </b>
        </p>
        <p>&nbsp;</p>
      </>
    )
  }
}
