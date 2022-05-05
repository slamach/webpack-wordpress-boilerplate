# Webpack WordPress Theme Boilerplate

## About the Project

Boilerplate for building WordPress themes using modern technology.

There is a branch without Docker - [no-docker](https://github.com/slamach/webpack-wordpress-boilerplate/tree/no-docker).

### Features
- **Modern technology:** ES6+ (Babel), Sass
- **Docker:** All you need inside a Docker container
- **Webpack:** Project bundling with Webpack
- **Imagemin:** Image minifying with Imagemin
- **Manifest:** Hashes in file names to prevent caching of old resources
- **EditorConfig и Prettier:** Code formatting on commit

### Project Structure
Theme files are in the `public` directory.  
All development takes place in the `src` directory.
- `fonts`
- `img`
- `js` 
- `scss`

Build configuration is in the `config` object in the file `webpack.config.js`.

## Installation and Usage
```
npm install
```

To make the pre-commit hook work, you need to run `npm install` when the project is already initialized as a Git repository.

If the project is initialized as a repository later, you need to additionally execute `npm run prepare`.

### Development
```
npm run docker:start
npm start

npm run docker:stop
```

### Production
```
npm run build
```

## Contact
Dmitry Sviridov  
Telegram: [slamach](https://t.me/slamach)  
Email: sviridov.dvv@gmail.com
