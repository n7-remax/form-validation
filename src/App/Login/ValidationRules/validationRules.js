const inputEmail = [
    e => !e && 'Значение не должно быть пустым',
    e => !e.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) && 'Значение должно состоять только из цифр',
    e => e.length < 3 && 'Значение должно быть длиннее 3 символов',
    e => e.length > 6 && 'Значение должно быть короче 6 символов',
  ];
  const inputPassword = [
    e => !e && 'Значение не должно быть пустым',
    e => !e.match(/^\d+$/) && 'Значение должно состоять только из цифр',
    e => e.length < 10 && 'Значение должно быть длиннее 10 символов',
    e => e.length > 20 && 'Значение должно быть короче 20 символов',
  ];

  export default {inputEmail,inputPassword}
