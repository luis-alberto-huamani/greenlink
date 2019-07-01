import './body-post-register.scss';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BodyPostRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgSrc: null,
      preview: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.id);
  }

  onChange(e) {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend= () => {
      this.setState({ imgSrc: reader.result });
    }
    if (img) {
      this.setState({ imgSrc: reader.readAsDataURL(img) })
    } else {
      this.setState({ imgSrc: null });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { imgSrc } = this.state;
    const reqId = this.props.id;
    const data = {
      img: imgSrc,
      id: reqId,
    }
    const options = {
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(data),
      method: "POST"
    }
    fetch('/api/postregister', options)
      .then((res) => {
        if (res.ok) {
          res.text()
            .then((res) => {
              window.location=`/perfil?id=${res}`;
            })
        } else {
          res.text()
            .then(res => console.log(res));
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <section className="post_register_main_cont shadow">
        <div className="header_postr">
          <div className="steps_cont">
            <p className="step_active">1</p>
            <svg height="5" widths="100%"><line x1="0" y1="0" x2="100%" y2="0"/></svg>
            <p className="step_inactive">2</p>
            <svg height="5" widths="100%"><line x1="0" y1="0" x2="100%" y2="0"/></svg>
            <p className="step_inactive">3</p>
          </div>
        </div>
        <div className="body_postr">
          <form onSubmit={this.onSubmit} method="POST">
            <label htmlFor="perfilImg">
            {
              this.state.imgSrc && <img src={this.state.imgSrc} alt= "preview" />
            }
            <div className="image_box">
              <p>Elige una imagen de perfil</p>
            </div>
                <input onChange={this.onChange} id="perfilImg" name="perfilImg" type="file"/>
            </label>
              <Button type="submit" outline>Siguiente</Button>
          </form>
        </div>
        <div className="footer_postr">
          
        </div>
      </section>
    )
  }
};

export default BodyPostRegister;
