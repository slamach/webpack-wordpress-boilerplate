# Webpack WordPress Theme Boilerplate

## О проекте

Шаблон для разработки тем для WordPress с использованием современных технологий.

Параллельно существует ветка без Docker - [no-docker](https://github.com/slamach/webpack-wordpress-boilerplate/tree/no-docker).

### Особенности проекта
- **Современные технологии:** ES6+ (Babel), Sass
- **Docker:** Все необходимое окружение внутри контейнера
- **Webpack:** Сборка проекта с помощью Webpack
- **Imagemin:** Сжатие изображений с помощью Imagemin
- **Manifest:** Генерация хэшей в имени файлов для предотвращения кэширования старых ресурсов
- **EditorConfig и Prettier:** Автоматическое форматирование исходных файлов при коммите

### Структура проекта
Файлы темы находятся в директории `public`.  
Основная разработка происходит в директории `src`.
- `fonts` -- шрифты
- `img` -- медиафайлы
- `js` -- JS-скрипты
- `scss` -- SCSS-стили

Основные параметры сборки вынесены в объект `config` в файле `webpack.config.js`.

## Сборка и запуск
```
npm install
```

Чтобы заработал pre-commit хук, нужно выполнять `npm install`, когда проект уже инициализирован как Git-репозиторий.

Если проект инициализируется как репозиторий позже, нужно дополнительно выполнить `npm run prepare`.

### Development
```
npm run docker:start
npm start

npm run docker:stop
```

### Production
```
npm build
```

## Контакты
Дмитрий Свиридов  
Telegram: [slamach](https://t.me/slamach)  
Email: sviridov.dvv@gmail.com
