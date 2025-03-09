import './style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <ul> Список доступных страниц </ul>
    <li><a href="./src/pages/Auth/Authorization/Authorization.html">Авторизация</a></li>
    <li><a href="./src/pages/Chat/Chat.html">Чат</a></li>
    <li><a href="./src/pages/Error/500/500.html">Ошибка 500</a></li>
    <li><a href="./src/pages/Error/404/404.html">Ошибка 404</a></li>
    <li><a href="./src/pages/Auth/Registrations/Registrations.html">Регистрация</a></li>
    <li><a href="./src/pages/UserSettings/UserSettings.html">Настройки пользователя</a></li>
  </div>
`
