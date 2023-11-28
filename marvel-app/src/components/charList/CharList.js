import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import "./charList.scss";



class CharList extends Component {
  state = {
    list: [],
  };

  marvelService = new MarvelService();

  updateList = () => {
    this.marvelService.getAllCharacters().then(this.onListLoad);
  };

  onListLoad = (arr) => {
    this.setState({ list: arr });
  };

  componentDidMount() {
    this.updateList();
  }

  render() {
    const { list } = this.state;
    return (
      <div className="char__list">
        <ul className="char__grid">
          {list.map((character, index) => (
            <li key={index} className="char__item">
              <img src={character.thumbnail} alt={character.name} />
              <div className="char__name">{character.name}</div>
            </li>
          ))}
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
