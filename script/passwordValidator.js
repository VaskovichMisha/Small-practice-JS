let password = "_zxd";

if (password.length >= 4 && 
    password.indexOf('-') >= 0 || 
    password.indexOf('_') >= 0) console.log('Пароль надежный')
else console.log('Пароль недостаточно надёжный')