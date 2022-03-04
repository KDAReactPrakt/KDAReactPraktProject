

function ingredientsMap(array) {
    return Array.isArray(array) && array.map((item) => {
        return {
            _id: item._id ? item._id : '',
            name: item.name ? item.name : '',
            type: item.type ? item.type : '',
            proteins: item.proteins ? item.proteins : '',
            fat: item.fat ? item.fat : '',
            carbohydrates: item.carbohydrates ? item.carbohydrates : '',
            calories: item.calories ? item.calories : '',
            price: item.price ? item.price : '',
            image: item.image ? item.image : '',
            image_mobile: item.image_mobile ? item.image_mobile : '',
            image_large: item.image_large ? item.image_large : '',
            __v:item.__v ? item.__v : '',
            count: 0
        }
    });
}

export default ingredientsMap;