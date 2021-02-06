fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(res => res.json())
.then(data => displayCategories(data))

const displayCategories = categories =>{
    const CategoriesDiv = document.getElementById("categories")
categories.forEach(idCategory => {
    const idCategoryDiv = document.createElement("div")
    idCategoryDiv.className = "meal"
    const idCategoryInfo = `
     
    
     <h3 class="meal-name">${idCategory.strCategory}</h3>
     <button onClick="displayCategoryDetail('${idCategory.strCategory}')">Details</button>
     `
    //  <img src="${idCategory.strCategoryThumb}">
    //  <p>${idCategory.strCategoryDescription}</p>
    idCategoryDiv.innerHTML = idCategoryInfo
    idCategoriesDiv.appendChild(idCategoryDiv)
});

// for (let i = 0; i < categories.length; i++) {
//     const idCategory = categories[i];
//     

//     const strCategory = document.createElement("h3")
//     strCategory.innerText = idCategory.strCategory
//     idCategoryDiv.appendChild(strCategory)

//     const strCategoryThumb = document.createElement("p")
//     strCategoryThumb.innerText = idCategory.strCategoryThumb
// idCategoryDiv.appendChild(strCategoryThumb)

//
// }

}

const displayCategoryDetail = strCategory => {
const url = `https://www.themealdb.com/api/json/v1/1/categories/${idCategory}`
fetch(url)
.then(res => res.json())
.then(data => renderIdCountryInfo(data[0]))
}

const renderIdCategoryInfo = idCategory => {
    const idCategoryDiv = document.getElementById("idCategory-detail")
    idCategoryDiv.innerHTML = `
    <h1>${idCategory.strCategory}</h1>
    <p>${idCategory.strCategoryDescription}</p>
    <img src="${idCategory.strCategoryThumb}">
    `
}