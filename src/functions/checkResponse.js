export const  checkResponse = (res) => {
    if (!res.ok) {
        throw "Произошла ошибка при загрузке данных"
    }
    return res.json();
}