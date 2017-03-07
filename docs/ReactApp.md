## ReactJS Application

[React.js Fundamentals](https://online.reacttraining.com/courses/enrolled/50507)

### 构建基础空项目

1. install dependencies

    ```bash
    npm init 

    npm install --save react react-dom 

    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader html-webpack-plugin style-loader webpack webpack-dev-server
    ```

2. Create and configure your `.babelrc` file
    ```
    {
        "presets": ["react","es2015"]
    }
    ```

3. Create and configure your `webpack.config.js` file
    ```
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })

    module.exports = {
      entry: [
        './app/index.js'
      ],
      output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
      },
      module: {
        loaders: [
          {test: /\.js$/, exclude:/node_modules/, loader:"babel-loader"},
          {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
      },
      plugins: [
        HtmlWebpackPluginConfig
      ]
    }
    ```

4. index.html & index.js
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React App</title>
    </head>

    <body>
        <div id="root"></div>
    </body>
    </html>
    ```

    ```
    var React = require('react');
    var ReactDOM = require('react-dom');

    var HelloWorld = React.createClass({
      render: function () {
        return (
          <div>Hello</div>
        )
      }
    })

    ReactDOM.render(<HelloWorld />, document.getElementById('app'))
    ```

5. configure `package.json`
    ```
    {...
        "scripts": {
            ...
            "develop": "webpack-dev-server",
            "production": "webpack -p"
          },
    ...}
    ```

6. run app
    ```bash
    npm run develop
    ```