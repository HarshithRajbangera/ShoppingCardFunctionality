let cart = [];
        
function addToCart(name, price) {

    let existingItem=cart.find(item=>item.name===name);

    if(existingItem){
        existingItem.quantity+=1;
    }
    else{
        cart.push({ name, price ,quantity:1});
       
    }
    updateCart();
    
 }
        
function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;

    
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item,index) => {
            let para= document.createElement('p');
            para.innerHTML = `${item.name} - $${item.price} x ${item.quantity}
             <div>
                <button style="background-color:pink;color:black;width:25px;padding:2px 5px" onclick="increaseQuantity(${index})">+</button>
                <button style="background-color:pink;color:black;width:25px;padding:2px 5px;" onclick="decreaseQuantity(${index}, -1)">-</button>
             </div>`;
            cartItems.appendChild(para);
            total += item.price*item.quantity;
        });

        document.getElementById('total-cost').innerText = total.toFixed(2);
    }

    function increaseQuantity(index) {
        if (cart[index].quantity >= 0) {
            cart[index].quantity += 1;
        } 
        updateCart();
    }

    function decreaseQuantity(index){
        if (cart[index].quantity > 0) {
            cart[index].quantity -= 1;
        } 
        else{
            cart.splice(index,1);
        }
        updateCart();
    }



        
        function toggleCart() {
            let cartDiv = document.getElementById('cart');
            cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
        }


