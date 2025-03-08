import './style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <ul> Список доступных страниц </ul>
    <li><a href="./src/pages/Auth/Authorization/Authorization.html">Авторизация</a></li>
    <li><a href="./src/pages/Chat/Chat.html">Чат</a></li>
    <li><a href="./src/pages/Error/500/500.html">Ошибка 500</a></li>
    <li><a href="./src/pages/Error/400/400.html">Ошибка 400</a></li>
    <li><a href="./src/pages/Auth/Registrations/Registrations.html">Регистрация</a></li>
    <li><a href="./src/pages/UserSettings/UserSettings.html">Настройки пользователя</a></li>
  </div>
`
