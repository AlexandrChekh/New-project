window.addEventListener("DOMContentLoaded", function () {
    let bags = document.querySelector('.bag'),
          products = document.querySelectorAll('.product'),
          toByy = document.querySelectorAll('.toBy'),
          shops = document.querySelector(".shop");
    
     function createElement() {
     let cart = document.createElement("div"),
        field = document.createElement("div"),
        heading = document.createElement("h2"),
        close = document.createElement("button"); // created the cart

        
    cart.classList.add("carts"); //created classes
    field.classList.add("fields");
    close.classList.add("closes");
    heading.classList.add("headings");

    heading.textContent = "These items have already been added to the cart!"
    close.textContent = "Close"
        
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(close);    
    };

    createElement();

    let field2 = document.querySelector(".fields"),
    cart2= document.querySelector(".carts"),
    close2= document.querySelector(".closes");
    
    function openCart() {
        cart2.style.display = "block";
    }
    function closeCart() {
        cart2.style.display = "none";
    }
    bags.addEventListener("click", openCart);
    close2.addEventListener("click", closeCart);
    

    
    toByy.forEach(function (itm, i) {
        itm.addEventListener("click", function () {
            let item = products[i].cloneNode(true);;
            let btn = item.querySelector('button'); 
            btn.textContent="Remove from cart!";
            field2.appendChild(item);
            products[i].remove();
            btn.addEventListener("click", function () {
                shops.appendChild(products[i]);
                item.remove();
            });
        });
    });
    let openCon = document.querySelector(".openConsultation"),
        fieldCon = document.querySelector(".fieldConsultation"),
        ends = document.querySelector(".end"),
        names = document.getElementById("name"),
        userFields = document.getElementById("userField"),
        sents = document.querySelector('.sent'),
         tell = document.getElementById("tel");
    
     openCon.addEventListener("click", function () {
         fieldCon.style.display = "flex";
         fieldCon.style.background = "rgba(0, 0, 0,.5)";
     })
        ends.addEventListener("click", function () {
            fieldCon.style.display = "none";
            names.value = "";
            userFields.value = "";
            tell.value = "";
        })
    names.addEventListener("input", function () {
        userFields.value = `My name is ${names.value}`;
    })

    sents.addEventListener("click", () => {
        names.value = "";
        userFields.value = "";
        tell.value = "";
        
    });
});