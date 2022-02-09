import React from "react";
import './Detail.css'

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push('/'); //Home Redirection
    }  
  }

  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div className="detail">
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className="detail__data">
            <h2 className="detail__title">{location.state.title}</h2>
            <h5 className="detail__year">({location.state.year})</h5>
            <ul className="detail__genres">
            [genre:{location.state.genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>;
            })}]
            </ul>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
        </div>
      )
      // <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;