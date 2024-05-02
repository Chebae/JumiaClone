 var productOne = {
        productName: "SAMSUNG",
        productPrice: "KES. 100,000",
        productImage: "/photos/vitron 1.jpg",
        productId: "001"
    
    }
    
    document.getElementById("product1Name").innerText = productOne.productName;
    
    document.getElementById("product1Price").innerText = productOne.productPrice;
    
    document.getElementById("product1Image").src = productOne.productImage;
    
    document.getElementById("product1Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productOne.productId;
    }


 var productTwo = {
        productName: "LG",
        productPrice: "KES. 200,000",
        productImage: "/photos/vitron 1.jpg",
        productId: "002"
    
    }
    
    document.getElementById("product2Name").innerText = productTwo.productName;
    
    document.getElementById("product2Price").innerText = productTwo.productPrice;
    
    document.getElementById("product2Image").src = productTwo.productImage;
    
    document.getElementById("product2Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productTwo.productId;
    }


 var productThree = {
        productName: "Sony",
        productPrice: "KES. 200,000",
        productImage: "/photos/xiaomi\ 3.jpg",
        productId: "003"
    
    }
    
    document.getElementById("product3Name").innerText = productThree.productName;
    
    document.getElementById("product3Price").innerText = productThree.productPrice;
    
    document.getElementById("product3Image").src = productThree.productImage;
    
    document.getElementById("product3Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productThree.productId;
    }


 var productFour = {
        productName: "Home Vision",
        productPrice: "KES. 500,000",
        productImage: "/photos/vision4.jpg",
        productId: "004"
    
    }
    
    document.getElementById("product4Name").innerText = productFour.productName;
    
    document.getElementById("product4Price").innerText = productFour.productPrice;
    
    document.getElementById("product4Image").src = productFour.productImage;
    
    document.getElementById("product4Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productFour.productId;
    }


 var productFive = {
        productName: "Liquor",
        productPrice: "KES. 50,000",
        productImage: "/photos/seagrams.jpg",
        productId: "005"
    
    }
    
    document.getElementById("product5Name").innerText = productFive.productName;
    
    document.getElementById("product5Price").innerText = productFive.productPrice;
    
    document.getElementById("product5Image").src = productFive.productImage;
    
    document.getElementById("product5Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productFive.productId;
    }

 var productSix = {
        productName: "Salit",
        productPrice: "KES. 10,000",
        productImage: "/photos/6salit.jpg",
        productId: "006"
    
    }
    
    document.getElementById("product6Name").innerText = productSix.productName;
    
    document.getElementById("product6Price").innerText = productSix.productPrice;
    
    document.getElementById("product6Image").src = productSix.productImage;
    
    document.getElementById("product6Image").onclick = function(){
        window.location.href = "pageTwo.html"+"?"+productSix.productId;
    }
