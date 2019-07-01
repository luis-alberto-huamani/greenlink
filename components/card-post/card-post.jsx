import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import './card-post.scss';

const heart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
const comment = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" /></svg>
const share = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" /></svg>
const angle = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" /></svg>

class CardPost extends Component {
  constructor(props) {
    super(props);
    this.state= {
      likes: 0,
      myLike: false,
      popConfig: false,
    }
    this.handleLike = this.handleLike.bind(this);
    this.onPopConfig = this.onPopConfig.bind(this);
  }

  componentDidMount() {
    this.setState({ likes: this.props.post.likes })
  }

  handleLike() {
    const { myLike, likes } = this.state;
    if (myLike) {
      this.setState({ myLike: false, likes: likes - 1 })
    } else {
      this.setState({ myLike: true, likes: likes + 1 })
    }
  }

  onPopConfig() {
    const { popConfig } = this.state;
    this.setState({ popConfig: !popConfig });
  }

  render() {
    const {
      likes,
      myLike,
      popConfig,
    } = this.state;
    const {
      author,
      date,
      imgUrl,
      history,
    } = this.props.post;
    return(
      <div className="card_post shadow">
        <div className="header">
          <div className="post_info">
            <img src={author.img} />
            <div className="post_data">
              <p>{author.name}</p>
              <p>{date}</p>
            </div>
          </div>
          <div className="btnConfug">
          <button id="btnConfug" onClick={this.onPopConfig}>...</button>
            <Popover placement="bottom" target="btnConfug" isOpen={popConfig}>
              <PopoverBody>
                <ul>
                  <li>
                    <button>Editar</button>
                  </li>
                  <li>
                    <button>Eliminar</button>
                  </li>
                </ul>
              </PopoverBody>
            </Popover>          
          </div>
        </div>
        <div
          className="img"
          style={
            imgUrl 
              ? { background: `url("${imgUrl}") top center no-repeat`, backgroundSize: "cover" }
              : { display: 'none' }
          }>
        </div>
        <div className="history">
          <p>{history}</p>
        </div>
        <div className="footer">
          <div className="social_buttons">
            <button onClick={this.handleLike}>{heart}{" +"}{likes}</button>
            <button>{comment}</button>
            <button>{share}</button>
          </div>
          <div className="comments">
            <button>{angle}</button>
          </div>
        </div>
      </div>
    );
  }
};

export default CardPost;
