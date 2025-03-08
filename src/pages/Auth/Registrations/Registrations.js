import "../Auth.scss";

document.querySelector('#Registrations').innerHTML = `
  <div class="Authorization">
      <div class="Authorization__block">
        <h1 class="Authorization__h1">Регистрация</h1>
        <form class="Authorization__form">
          <div class="Authorization__group">
            <label class="Authorization__label">Почта</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Логин</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Имя</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Фамилия</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Телефон</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Пароль</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Пароль (еще раз)</label>
            <input class="Authorization__input"/>
          </div>

          <button class="Authorization__button">
            Зарегистрироваться
          </button>
        </form>

        <a href="../Authorization/Authorization.html" class="sign-link">
          Войти
        </a>
      </div>
    </div>
`