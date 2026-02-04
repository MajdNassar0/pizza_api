const getpizza=async()=>{
    const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
    const data=await response.json();
    const recipes =data.data.recipes;
    console.log(recipes);
    const result=recipes.map(recipes=>{
        return `
        <div class="col-md-4">

        <div class="card m-2" style="width: 18rem;">
  <img src=${recipes.image_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${recipes.title}</h5>
    <a href="./details.html?id=${recipes.id}" class="btn btn-secondary">More Detail</a>
  </div>
</div>
</div>
        `
    }).join(' ');
    document.querySelector(".pizza .row").innerHTML=result;


}
getpizza();
