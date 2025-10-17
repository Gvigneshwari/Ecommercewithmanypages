function togglebut()
{
   const iconimg=document.getElementsByClassName("iconlinks")[0];
   if(iconimg.style.marginLeft=="-500px")
   {
     iconimg.style.marginLeft="0px";
   }
   else
   {
    iconimg.style.marginLeft="-500px";
   }
}


document.addEventListener("DOMContentLoaded",()=>{
  const inp= document.getElementById("searchinput");
  if(inp){inp.addEventListener("input",function (){
  const p=document.querySelectorAll(".product");
  const q=this.value.toLowerCase();
  p.forEach(i=>{
    const P=i.textContent.toLowerCase();
    if(P.includes(q))
    {
      i.style.display="block";
    }
    else{
      i.style.display="none";
    }
  });
});
}
const addbt= document.querySelectorAll(".add-btn");
const cart=JSON.parse(localStorage.getItem("cart"))||[];
 if(addbt.length>0)
 {  
  addbt.forEach(btn=>{
   btn.addEventListener("click",()=>{
    const product=btn.parentElement;
   const name=product.querySelector(".name").textContent;
   const color=product.querySelector(".color").textContent;
   const img=product.querySelector("img").src;
  const price=product.querySelector(".price").textContent;
    const cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push({img,name,color,price});
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("added to cart");
  });
 });
 }
  const l=document.querySelector(".cartlist");
  if(l)
  {
  l.innerHTML='';
  cart.forEach((item,index)=>{
    l.innerHTML+=`
            <div class="a">
            <img src=${item.img} width="200"height="200">
            <h3>${item.name}</h3>
            <h3>${item.color}</h3>
            <h3>${item.price}</h3>
            <button onclick="removecart(${index})">Removecart</button>
            </div>`;
 });
 }
 const total=document.getElementById("total");
 const checkoutbtn=document.getElementById("checkout");
 if(l&&cart.length>0){
  let tot=0;
  cart.forEach(item=>{
    const currentprice=parseFloat(item.price.replace(/[^0-9.]/g,''));
    tot+=currentprice;
  });
  total.textContent=`total:$${tot}`;
 if(checkoutbtn){
  checkoutbtn.addEventListener("click",()=>{
    localStorage.removeItem("cart");
    l.innerHTML='';
    total.textContent='';
    checkoutbtn.style.display="none";
  });
 }
 }
 if(cart.length==0){total.textContent=`your cart is empty`;
  checkoutbtn.style.display="none";}
});
function removecart(index)
{
 const cart=JSON.parse(localStorage.getItem("cart"))||[];
 cart.splice(index,1);
 localStorage.setItem("cart",JSON.stringify(cart));
 location.reload();
}
