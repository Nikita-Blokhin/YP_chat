import "./UserSettings.scss";
import createDetailRow from '../../components/DetailRow/DetailRow';
import createButton from '../../components/Button/Button';
import template from './UserSettings.hbs?raw';

document.querySelector('#UserSettings').innerHTML = template;
const ClassNameRow = 'detail_row';
const ClassNameLabel = 'detail_label';
const ClassNameValue = 'detail_value';
const ClassNameButton = 'UserSettings__action';
const ClassNmaeButtonLogout = 'UserSettings__logout';
const rowData = [
  ['Почта', 'email', 'pochta@yandex.ru'],
  ['Логин', 'login', 'ivanivanov'],
  ['Имя', 'first_name', 'Иван'],
  ['Фамилия', 'second_name', 'Иванов'],
  ['Имя в чате', 'display_name', 'Иван'],
  ['Телефон', 'phone', '+7 (909) 967 30 30']  
]
const buttonData = [
  ['Изменить данные', 'change_data'],
  ['Изменить пароль', 'change_password'],
  ['Выйти', 'logout']
];
const containerElement = document.getElementById('UserSettingsBack');
containerElement.appendChild(createButton({
      label: "←",
      class_name: ['back-button'],
      class_name_span: "UserSettings__back",
      id_name: 'back_btn',
      onClick: () => alert('Кнопка нажата!')
  }))
const rowElement = document.getElementById('UserSettingsDetails');
rowData.map(item => (
    rowElement.appendChild(createDetailRow({
      label: item[0],
      class_name__row: ClassNameRow,
      class_name__label: ClassNameLabel,
      class_name__value: ClassNameValue,
      id_value: item[1],
      value: item[2]
  }))
));
const actionElment = document.getElementById('UserSettingsActions');
buttonData.map(item => {actionElment.appendChild(createButton({
      label: item[0],
      class_name: [ClassNameButton, (item[1] === 'logout' && ClassNmaeButtonLogout)],
      id_name: item[1],
      onClick: () => alert('Кнопка нажата!')
  }))
});