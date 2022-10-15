export const addUser = () => {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
}
export const addUserNew = (data) => {
    console.log(data);
     const users = JSON.parse(localStorage.getItem('users'));
     console.log(users);
     const userFilterByEmail = users.filter(item => item.email === data.email);


     if (userFilterByEmail.length === 0) {
         localStorage.setItem('users', JSON.stringify([...users,
             {
                 id: Date.now(),
                 ...data
             }
         ]));
         console.log(JSON.parse(localStorage.getItem('users')));
     } else {
         console.log('Пользователь с данной почтой существует');
     }
};

export const existenceCheckUser = (data) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const userFindByEmail = users.find(item => item.email === data.email);
    if (userFindByEmail === undefined) {
        console.log('Пользователь с данной почтой не найден, проверьте введенные данные');
    } else if (userFindByEmail.password !== data.password){
        console.log('Неверный пароль');
    }
    else {
        localStorage.setItem('user', JSON.stringify(data));
    }
}