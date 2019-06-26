import Head from 'next/head';
import Layout from '../components/layout';
import Perfil from '../components/perfil';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const App = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <Perfil usr={props.usr} />
    </Layout>
  </div>
);

App.getInitialProps = async ({ query }) => {
  const id = query.id;
  const res = await fetch(`https://greenlink-project.now.sh/api/perfil?id=${id}`);
  const usr = await res.json();
  return { usr };
};

export default App;
