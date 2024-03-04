
function templateMenuHtml () {
    return `
        <div class="recipe_container">
            <div class="recipe">
                <img class="menu_item" src="./assets/food/bowl_hot food_hotsoup_icon.svg" alt="soup">
                <ul>
                    <li>Tomato Soup</li>
                    <li>Onion Soup</li>
                    <li>Cheese Soup</li>
                </ul>
            </div>
            <div class="recipe">
                <img class="menu_item" src="./assets/food/burger_cheeseburger_food_junk food_icon.svg" alt="burger">
                <ul>
                    <li>Hamburger</li>
                    <li>Cheese Burger</li>
                    <li>Chili Cheese Burger</li>
                </ul>
            </div>
            <div class="recipe">
                <img class="menu_item" src="./assets/food/chili_food_hot_dog_picnic_weiner_icon.svg" alt="hot-dog">
                <ul>
                    <li>NY-Style Hot Dog</li>
                    <li>Double Hot Dog</li>
                    <li>Chili Cheese Hot Dog</li>
                </ul>
            </div>
            <p>All our food is also available with beef</p>
        </div>
    `;
}

export { templateMenuHtml }