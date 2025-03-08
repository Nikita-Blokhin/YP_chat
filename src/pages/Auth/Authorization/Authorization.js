import "../Auth.scss";

document.querySelector('#Authorization').innerHTML = `
    <div class="Authorization">
      <div class="Authorization__block">
        <h1 class="Authorization__h1">Вход</h1>
        <form class="Authorization__form">
          <div class="Authorization__group">
            <label class="Authorization__label">Логин</label>
            <input class="Authorization__input"/>
          </div>

          <div class="Authorization__input-group">
            <label class="Authorization__label">Пароль</label>
            <input class="Authorization__input"/>
          </div>

          <button class="Authorization__button">
            Авторизоваться
          </button>
        </form>

        <a href="../Registrations/Registrations.html" class="sign-link">
          Нет аккаунта?
        </a>
      </div>
    </div>
`