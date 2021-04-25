# Portfolio Project

A website created to host and display the projects I've made to date. Made using a [Gatsby starter](https://www.gatsbyjs.com/starters/cobidev/gatsby-simplefolio/) and heavily updated/personalised to fit my needs and help promote me as a developer. Not my first Gatsby project, really enjoy working with Gatsby but it does create quite a bloated list of dependencies. There's a bit of a trade off between package size and performance.

## How To Use

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/rgneville/portfolio

# Go into the repository
$ cd portfolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ gatsby develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:8000/` and you will see the website running on a Development Server.

## License
[MIT](https://choosealicense.com/licenses/mit/)
