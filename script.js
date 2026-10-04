const menu=document.querySelector('.menu');const links=document.querySelector('.navlinks');if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=`2019–${new Date().getFullYear()}`);
