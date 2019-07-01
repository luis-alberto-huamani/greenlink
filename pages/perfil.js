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
      <Perfil user={props.user} id={props.id} />
    </Layout>
  </div>
);

App.getInitialProps = async ({ query }) => {
  const id = query.id;
  const data = {
    reqid: id,
  }
  const res = await fetch("http://localhost:3000/api/perfil",{
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });
  const user = await res.json();
  return { user, id };
};

export default App;
