
function templateWelcomeHtml () {
    return `
        <div class="main_content">
            <img class="img_large" src="./assets/pablo-merchan-montes-hyIE90CN6b0-unsplash.jpg" alt="burger">
            <div class="welcome_text">
                <h1>Welcome to my Restaurant</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam,
                    neque adipisci sequi, iste sunt doloribus consequuntur pariatur deserunt maxime 
                    commodi perspiciatis accusantium excepturi molestiae placeat ab velit vitae corporis.
                </p>
            </div>
        </div>
        <div class="pic_source">
            <p class="small">Picture by <a href="https://unsplash.com/de/@pablomerchanm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pablo Merchán Montes</a> 
                at <a href="https://unsplash.com/de/fotos/zeitrafferfoto-eines-mannes-mit-burger-hyIE90CN6b0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </div>
    `;
}

export { templateWelcomeHtml };