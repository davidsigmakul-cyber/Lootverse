let type='',prod='',price='';
function orderGP(p,h){type='gp';prod=p;price=h;title.innerText=p+' - '+h;pass.style.display='none';pop.style.display='flex';}
function orderRB(p,h){type='rb';prod=p;price=h;title.innerText=p+' - '+h;pass.style.display='block';pop.style.display='flex';}
function closePop(){pop.style.display='none';}
function send(){if(!user.value)return alert('Isi username');if(type=='rb'&&!pass.value)return alert('Isi password');let msg=`Halo Admin LootVerse! 👋
👤 Username: ${user.value}
${type=='rb'?'🔒 Password: '+pass.value+'\n':''}📦 Produk: ${prod}
💰 Harga: ${price}
💳 Pembayaran: ${pay.value}`;window.open('https://wa.me/6289674970911?text='+encodeURIComponent(msg));}