import PerfilNav from '../components/perfil-nav';
import CardPost from '../components/card-post/card-post';

const post = {
  author: {
    name: 'felix tineo',
    img: '/static/felix.jpg'
  },
  date: '01/07/2019 11:00 am',
  imgUrl: '/static/pico.jpg',
  history: 'Pico hola mundo'
}

const Foo = () => <CardPost post={post}/>

export default Foo;