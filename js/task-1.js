const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    const categoryTitle = element.querySelector('h2').textContent;
    const categoryItems = element.querySelectorAll('li');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
});
