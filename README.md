# Chesnokova Sofya Mikhailovna — IDE для веб-разработки

**Live-сайт:** https://chesokova-sofya.github.io/webide-site/

Учебный тематический сайт о средах разработки для веба: **Visual Studio Code**, **PhpStorm** и **WebStorm**. Сверстан на CSS-фреймворке **[Basscss](https://basscss.com/)** с собственными стилями по методологии БЭМ.

## Страницы

| Файл | Содержание |
|------|------------|
| `index.html` | Главная: что такое IDE, карточки редакторов |
| `vscode.html` | Обзор Visual Studio Code |
| `phpstorm.html` | Обзор PhpStorm |
| `webstorm.html` | Обзор WebStorm |
| `compare.html` | Сравнительная таблица IDE |
| `extensions.html` | Плагины и расширения |
| `shortcuts.html` | Таблица горячих клавиш |
| `video.html` | Видеоурок (iframe RUTUBE) |

На каждой странице: `<header>` с логотипом и меню (бургер на мобильных), `<main>`, сайдбар `<aside>` с навигацией и ссылками на официальные сайты, `<footer>`.

## Технологии

- **HTML5**: семантическая разметка, проходит W3C-валидатор без ошибок.
- **CSS3**: Basscss 8.1 и собственные стили (`css/style.css`), Mobile-First, брейкпоинты 768px и 992px.
- **Светлая и тёмная тема**: переключатель в шапке, выбор запоминается (`js/theme.js`).
- **Бургер-меню**: на чистом CSS (скрытый чекбокс + `:checked`).
- **Анимации**: эффекты при наведении, анимированный градиент; отключаются при системной настройке «уменьшить движение».
- **Изображения**: WebP и JPEG в трёх размерах, `srcset`/`sizes`, `loading="lazy"`.

## Структура

```
├── *.html              # 8 страниц
├── css/
│   ├── basscss.min.css # фреймворк
│   ├── style.css       # свои стили (исходник)
│   └── style.min.css   # свои стили (минифицированные, подключены на страницах)
├── js/
│   ├── theme.js        # смена темы (исходник)
│   └── theme.min.js    # минифицированный, подключён на страницах
└── img/                # изображения
```

## Запуск

Откройте `index.html` в браузере. Ничего устанавливать не нужно.

После правки исходников пересоберите минифицированные файлы (нужен Node.js):

```bash
npx clean-css-cli -O1 -o css/style.min.css css/style.css
npx terser js/theme.js -c -m -o js/theme.min.js
```

## Деплой

GitHub → **Settings → Pages → Deploy from a branch** → ветка `main`, папка `/ (root)`.

## Автор

Чеснокова Софья Михайловна (Chesnokova Sofya Mikhailovna), группа _указать_.
