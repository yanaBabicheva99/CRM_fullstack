export const addUser = () => {
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify([]));
    }
}
export const addUserNew = (data) => {
    console.log(data);
     const user = JSON.parse(localStorage.getItem('user'));
     const userFilterByEmail = user.filter(item => item.email === data.email);


     if (userFilterByEmail.length === 0) {
         localStorage.setItem('user', JSON.stringify([...user,
             {
                 id: Date.now(),
                 ...data
             }
         ]));
         console.log(JSON.parse(localStorage.getItem('user')));
     } else {
         console.log('Пользователь с данной почтой существует');
     }
};

export const existenceCheckUser = (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userFindByEmail = user.find(item => item.email === data.email);
    if (userFindByEmail === undefined) {
        console.log('Пользователь с данной почтой не найден, проверьте введенные данные');
    } else if (userFindByEmail.password !== data.password){
        console.log('Неверный пароль');
    }
}