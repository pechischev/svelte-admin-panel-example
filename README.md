# Admin Panel

Админ панель для магазинов

Создан на основе шаблона [svelte-template](https://github.com/sveltejs/template)

### Зависимости

-   [NPM](https://www.npmjs.com/) - пакетный менеджер
-   [Svelte](https://svelte.dev/) - UI фреймворк
-   [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) - Page Router

### Подготовка окружения

Скачиваем все зависимости

```bash
$ npm i
```

Копируем файл `.env_example` как `.env`

```dotenv
REAL_API=true
API_URL=https://example.com
``` 

-   `REAL_API` - при выставлении `false` все запросы мокаются через *MockRequestManager*
-   `API_URL` - урл для апи

### Инструкция по разворачиванию

Запуск приложения в режиме разработки. Откройте http://localhost:5000 для просмотра в браузере.

```bash
$ npm run dev
```

Сборка продакшн-версии приложения. Файлы кладутся в папку `public`.

```bash
$ npm run build
```

Открывает доступ наружу, позволяя развертывать приложение в любом месте. (по умолчанию смотрит на `public`)

```bash
$ npm run start
```

### Запуск в Docker

Собрать продакшн-версию приложения, затем запустить команду

```bash
$ docker-compose up -d
```
