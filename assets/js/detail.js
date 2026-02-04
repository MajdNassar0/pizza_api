const getDetail=async()=>{
    const parm=new URLSearchParams(window.location.search);
    const id=parm.get("id");
    const response=await fetch("https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886?id=${id}");
    const data=await response.json();
    const recipe=data.data.recipe;
    console.log(recipe);

    document.querySelector(".title").textContent=recipe.title;
    document.querySelector(".imgDet").setAttribute("src",recipe.image_url);
    const getInfo= recipe.ingredients.map((data)=>{
        return `
        <li class="list-group-item">
                ${data.quantity ? data.quantity : ''} 
                ${data.unit} 
                ${data.description}
        </li>
        `;

    }).join(' ');
    document.querySelector(".list-group").innerHTML= getInfo;

}
getDetail();