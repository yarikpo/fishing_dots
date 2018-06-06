import ContestDetails from "../../components/ContestDetails"

export default class extends React.Component {
  state = {
    contest_details: null
  }
  static async getInitialProps({ query }) {
    return {
      user: { username: "root" },
      id: query.id
    }
  }

  componentDidMount() {
    fetch(
      `http://dots-practice-2018.xeon.prostoksi.com/contests-json?id=${this.props.id}`,
      {
        credentials: "include"
        //headers: { 'Cookie': "DSID=WzETbgEkzCkXOX1H" }
      }
    )
      .then(data => data.json())
      .then(contest_details =>
        this.setState({ contest_details: contest_details })
      )
  }

  render() {
    if (this.state.contest_details === null) {
      return <div>Идет загрузка информации...</div>
    }
    return (
      <>
        <ContestDetails
          title={this.state.contest_details.title}
          type={this.state.contest_details.type}
          start_time={this.state.contest_details.start_time}
          status={this.state.contest_details.status}
          registration_status={this.state.contest_details.registration_status}
        />
      </>
    )
  }
}
