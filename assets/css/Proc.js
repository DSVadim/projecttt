// Получаем все элементы с классом "product"
const products = document.querySelectorAll('.product');

// Проходимся по каждому товару
products.forEach(product => {
    // Получаем изображение товара
    const image = product.querySelector('img');

    // Получаем блок выбора цвета
    const colors = product.querySelector('.colors');

    // Проходимся по каждому цвету в блоке выбора цвета
    colors.querySelectorAll('.color').forEach(color => {
        // Добавляем обработчик клика на каждый цвет
        color.addEventListener('click', () => {
            // Получаем цвет из стиля цвета
            const backgroundColor = color.style.backgroundColor;

            // Изменяем цвет изображения товара
            image.style.backgroundColor = backgroundColor;
        });
    });
});