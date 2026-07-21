const items={'Suspension Pro':'Rp3.400','Boombox Radio':'Rp3.400','Advance Paint':'Rp6.250','Premium Accessories':'Rp6.250','Exclusive Rims':'Rp8.150','Custom Plate':'Rp8.150','Slot Limit Unlock':'Rp9.100','DragSpec':'Rp11.000','Luxury':'Rp11.950','Police':'Rp14.800','2x Paycheck':'Rp48.050','100 Robux':'Rp14.000','200 Robux':'Rp28.000','300 Robux':'Rp42.000','400 Robux':'Rp56.000','500 Robux':'Rp70.000','600 Robux':'Rp84.000','700 Robux':'Rp98.000','800 Robux':'Rp112.000','900 Robux':'Rp126.000','1000 Robux':'Rp140.000','1500 Robux':'Rp210.000','2000 Robux':'Rp280.000','2500 Robux':'Rp350.000','3000 Robux':'Rp420.000','10 Juta Cash':'Rp3.970','50 Juta Cash':'Rp6.250','100 Juta Cash':'Rp10.050','500 Juta Cash':'Rp38.550'};
const s=document.getElementById('product');for(let k in items){let o=document.createElement('option');o.text=k;s.add(o)};function upd(){price.textContent=items[s.value]}s.onchange=upd;upd();
function order(){let u=user.value.trim();if(!u){alert('Isi Username');return}let msg=`Halo Admin LootVerse! 👋

Saya ingin melakukan pemesanan.

👤 Username Roblox: ${u}
📦 Produk: ${s.value}
💰 Harga: ${items[s.value]}
💳 Pembayaran: ${pay.value}`;location.href='https://wa.me/6289674970911?text='+encodeURIComponent(msg)}