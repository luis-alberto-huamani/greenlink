<<<<<<< HEAD
# Next.js

In this example we will be deploying a simple "Hello World" example with Next.js.

### Getting started with Next.js

- Create a `pages` folder with an `index.js` file with the following code:

```jsx
import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
);
```

- Now lets create an `about.js` file inside the `pages` folder with the following code:

```jsx
import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is another page of the SSR example, you accessed it{" "}
            <strong>{this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p>
            You can reload to see how the page change.
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;
```

- As you might noticed we have a component that is shared by both `index.js` and `about.js` files, let's create that one now. Create a folder named `components` with a file named `header.js` in it and add the following code:

```jsx
export default () => (
  <header>
    <h1>Next.js Example</h1>
  </header>
);
```

- Finally in order for Next.js to be deployed we could either have a `next.config.js` or a `package.json`, for this example we are just going to create a `next.config.js` with the following code:

```js
module.exports = {
  target: 'serverless'
}
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/next` to build and deploy our Next.js application selecting the `next.config.js` as our entry point. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "nextjs",
    "builds": [
        { "src": "next.config.js", "use": "@now/next" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```
=======
# Express API with a Static Frontend on ZEIT Now

**Live Demo**: https://express.now-examples.now.sh/

This example shows a pre-setup project including:

- An `api` directory, containing a single endpoint that retrieves the current time with Express built with the [@now/node Builder](https://zeit.co/docs/v2/deployments/official-builders/node-js-now-node/).
- A `www` directory, containing static files such as `index.html` and `style.css` that show a frontend with information from the API.

## Get Started with This Project

To get started with this project yourself, you can use [Now CLI](https://zeit.co/download) to initialize it.

From your terminal, use the following command to create a directory called `my-express-project` including the files of this example:

```bash
now init express my-express-project
```

Then, `cd` into your new project's directory (with `cd my-express-project`).

You now have a project, ready to go into development, staging, or production with Now. Your next step is up to you. Try one of the following:

#### Local Development

Using Now CLI, as you did to initialize this project, you can use the following command from your terminal to start a development environment locally which replicates the production environment on Now so you can test your new project:

```bash
now dev
```

#### Automatic Deployments with Git

Using either [Now for GitHub](https://zeit.co/github) or [Now for GitLab](https://zeit.co/gitlab), you can push this project to a Git repository and it will deploy automatically.

If on anything other than the default branch, with each push your project will be deployed, automatically, to a unique staging URL.

If pushing or merging to the default branch, your project will be deployed and aliased in a production environment, automatically.

Read more about the ZEIT Now Git Integrations:

- [Now for GitHub](https://zeit.co/docs/v2/integrations/now-for-github/)
- [Now for GitLab](https://zeit.co/docs/v2/integrations/now-for-gitlab/)

#### Deploying from Your Terminal

Using [Now CLI](https://zeit.co/download), you can also deploy to both [staging](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment#staging) and [production](https://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment#production) environments from your terminal.

For a staging deployment, you can use the following one-word command:

```bash
now
```

Then, for production, including automatic aliasing, you can use the following:

```bash
now --target production
```

For more information on deploying, see the [Deployment Basics documentation](https://zeit.co/docs/v2/deployments/basics#introducing-a-build-step).

## Configuration Breakdown

This example contains a `now.json` file which instructs Now how to treat this project when developing locally and deploying.

```json
{
  "version": 2,
  "name": "my-express-project",
  "builds": [
    { "src": "www/**/*", "use": "@now/static" },
    { "src": "api/**/*.js", "use": "@now/node" }
  ],
  "routes": [{ "src": "/", "dest": "www/index.html" }]
}
```

The above instructs Now with:

- The [`version` property](https://zeit.co/docs/v2/deployments/configuration#version), specifying the latest Now 2.0 Platform version.
- The [`name` property](https://zeit.co/docs/v2/deployments/configuration#name), setting the name for the deployment.
- The [`builds` property](https://zeit.co/docs/v2/deployments/configuration#builds), allowing Now to use [the @now/node Builder](https://zeit.co/docs/v2/deployments/official-builders/node-js-now-node/) with a specific source target.
- The [`routes` property](https://zeit.co/docs/v2/deployments/configuration#routes), instructing Now to route the user to the `www/index.html` file when requesting the root path.

For more information on configuring Now, see the [Configuration documentation](https://zeit.co/docs/v2/deployments/configuration).

## Resources

Learn more about the ZEIT Now platform from [our documentation](https://zeit.co/docs), including:

- [More information on deploying Express projects](https://zeit.co/docs/v2/deployments/official-builders/node-js-now-node/) and some technical details.
- [More information on the platform itself](https://zeit.co/docs), including [domains and aliasing](https://zeit.co/docs/v2/domains-and-aliases/introduction/) and [local development](https://zeit.co/docs/v2/development/basics/).
>>>>>>> 5e571f9d2a01b5e6d45235b43305c45442798aaa
