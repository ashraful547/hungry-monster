fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res => res.json())
.then(data => console.log(data))

const displayCategories = categories =>{
    const ul = document.getElementById("categories")
for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const li = document.createElement("li")
    li.innerText = category.strCategory
    ul.appendChild(li);
}

}