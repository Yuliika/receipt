function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Це закриття при кліку на фон
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
window.addEventListener('DOMContentLoaded', function() {
  
    // Вибираємо всі картки рецептів на сторінці.
    const allRecipes = document.querySelectorAll('.recipe-card');
    
    console.log("Знайдено рецептів для обробки: " + allRecipes.length);

    for (let i = 0; i < allRecipes.length; i++) {
    
        // Поточна картка 
        const currentCard = allRecipes[i];
        //Парний чи непарний
        if (i % 2 === 0) {
            // парні - трохи темніший фон
            currentCard.style.backgroundColor = "#e0e0e0"; 
            currentCard.style.border = "2px solid #8B5A2B";
        } else {
            // непарних - стандартний білий фон
            currentCard.style.backgroundColor = "#ffffff";
            currentCard.style.border = "2px solid transparent";
        }

        //  заголовок всередині поточної картки
        const recipeTitle = currentCard.querySelector('.recipe-title');
        
        // довжина назви
        if (recipeTitle.innerText.length > 12) {
            recipeTitle.style.color = "#a0522d"; 
            recipeTitle.innerHTML += " <span style='font-size: 12px; font-weight: normal; color: #5d3a1a;'>(Рекомендовано)</span>";
        }
    }
});

function toggleComments() {
    const commentsSection = document.getElementById('comments');
    const toggleBtn = document.getElementById('toggleCommentsBtn');

    // Перевірка стану видимості 
    if (commentsSection.style.display === "none") {
        commentsSection.style.display = "block"; 
        toggleBtn.innerText = "Приховати коментарі";
    } else {
        commentsSection.style.display = "none"; 
        toggleBtn.innerText = "Показати коментарі";
    }
}

//  Додавання подій через цикл
window.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.nav-button');
    
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            console.log("Ви натиснули на пункт меню: " + this.innerText);
            this.style.color = "#a0522d"; 
        });
    }

    //  Ефект наведення 
    const recipeButtons = document.querySelectorAll('.recipe-btn');
    
    for (let j = 0; j < recipeButtons.length; j++) {
        // мишка заходить на кнопку
        recipeButtons[j].addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.1)"; 
            this.innerText = "ЧИТАТИ"; 
        });
        
        //  мишка йде геть
        recipeButtons[j].addEventListener('mouseleave', function() {
            this.style.transform = "scale(1)"; 
            this.innerText = "Рецепт";
        });
    }
});

//  Обробка форми коментарів
function submitComment() {
    const name = document.querySelector('#commentForm input').value.trim();
    const text = document.querySelector('#commentForm textarea').value.trim();

    // Перевірка 
    if (!name || !text) {
        alert("Заповніть усі поля!");
        return;
    }
    const comment = document.createElement('div');
    comment.style.borderBottom = "1px solid #d2b48c";
    comment.style.padding = "10px 0";
    comment.innerHTML = `<strong>${name}</strong><p>${text}</p>`;

    document.getElementById('commentsList').prepend(comment); // на початок

    // Очищення 
    document.querySelector('#commentForm input').value = "";
    document.querySelector('#commentForm textarea').value = "";
}
// Фільтр рецептів
window.addEventListener('DOMContentLoaded', function() {
    const searchBlock = document.createElement('div');
    searchBlock.style.textAlign = "center";
    searchBlock.style.margin = "20px 0";
    searchBlock.innerHTML = `<input type="text" id="recipeSearch" placeholder="Швидкий пошук..." style="width: 300px; padding: 10px; border-radius: 8px; border: 1px solid #d2b48c;">`;
    
    const grid = document.querySelector('.recipe-grid');
    if (!grid) return; 
    grid.parentNode.insertBefore(searchBlock, grid);

    // пошук
    document.getElementById('recipeSearch').addEventListener('keyup', function() {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll('.recipe-card'); 
        
        for (let i = 0; i < cards.length; i++) {
            const title = cards[i].querySelector('.recipe-title').innerText.toLowerCase();
            cards[i].style.display = title.includes(query) ? "flex" : "none";
        }
    });
});