import "./UserSettings.scss";

document.querySelector('#UserSettings').innerHTML = `
  <div class="UserSettings_container">
      <button type="button" class="back-button">
        <span  class="btn-back">←</span>
      </button>
      
      <div class="UserSettings_content">
        <div class="UserSettings_header">
          <div class="UserSettings_avatar">
            <img src="https://placehold.co/200x200" alt="Profile avatar" />
          </div>
          <h1 class="UserSettings_name">Иван</h1>
        </div>

        <div class="UserSettings_details">
          <div class="detail_row">
            <span class="detail_label">Почта</span>
            <span class="detail_value">pochta@yandex.ru</span>
          </div>
          <div class="detail_row">
            <span class="detail_label">Логин</span>
            <span class="detail_value">ivanivanov</span>
          </div>
          <div class="detail_row">
            <span class="detail_label">Имя</span>
            <span class="detail_value">Иван</span>
          </div>
          <div class="detail_row">
            <span class="detail_label">Фамилия</span>
            <span class="detail_value">Иванов</span>
          </div>
          <div class="detail_row">
            <span class="detail_label">Имя в чате</span>
            <span class="detail_value">Иван</span>
          </div>
          <div class="detail_row">
            <span class="detail_label">Телефон</span>
            <span class="detail_value">+7 (909) 967 30 30</span>
          </div>
        </div>

        <div class="UserSettings_actions">
          <button type="button" class="btn-action">Изменить данные</button>
          <button type="button" class="btn-action">Изменить пароль</button>
          <button type="button" class="btn-action btn-logout">Выйти</button>
        </div>
      </div>
    </div>
`