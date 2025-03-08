(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <ul> Список доступных страниц </ul>
    <li><a href="./src/pages/Auth/Authorization/Authorization.html">Авторизация</a></li>
    <li><a href="./src/pages/Chat/Chat.html">Чат</a></li>
    <li><a href="./src/pages/Error/500/500.html">Ошибка 500</a></li>
    <li><a href="./src/pages/Error/400/400.html">Ошибка 400</a></li>
    <li><a href="./src/pages/Auth/Registrations/Registrations.html">Регистрация</a></li>
    <li><a href="./src/pages/UserSettings/UserSettings.html">Настройки пользователя</a></li>
  </div>
`;
