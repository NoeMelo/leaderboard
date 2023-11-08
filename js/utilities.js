emojis_data = "🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐦‍⬛ 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🪼 🪸 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🫏 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🫎 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪽 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🪿 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔".split(" ");
medall_data = "🥇 🥈 🥉".split(" ");

function get_dummy_data(emojis_data){
    var dummy = [
        {
            icon: emojis_data[randomIntFromInterval(0, emojis_data.length - 1)],
            name:"Noe Melo",
            score:randomIntFromInterval(100,300)
        },
        {
            icon: emojis_data[randomIntFromInterval(0, emojis_data.length - 1)],
            name:"Israel Orconi",
            score:randomIntFromInterval(100,300)
        },
        {
            icon: emojis_data[randomIntFromInterval(0, emojis_data.length - 1)],
            name:"Luis Vinces",
            score:randomIntFromInterval(100,300)
        },
        {
            icon: emojis_data[randomIntFromInterval(0, emojis_data.length - 1)],
            name:"Diego Gutierrez",
            score:randomIntFromInterval(100,300)
        }
    ];
    return dummy;
}


/********************
 * COMMON FUNCTIONS
 ********************/
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

const create_items_html = (itemList)=>{
    // sort list
    itemList.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    // html content
    let items = '';
    itemList.forEach((element, index) => {
        let item = createItemHTML(element, index);
        items += item;
    });
    return items;
}
const painterItemsHTML = (items)=>{
    let itemsUI = document.querySelector('.item-list');
    itemsUI.innerHTML = create_items_html(items)
}

const createItemHTML = (person, index) => {
    let item = '';
    if (index <= 2){
        item +=`
        <div class="box-item">
                <h3 class="item-icon">${person.icon}</h3>
                <h3 class="item-name">${person.name}</h3>
                <h3 class="item-score">${medall_data[index]} ${person.score}</h3>
        </div>`;
    } else {
        item +=`
        <div class="box-item">
                <h3 class="item-icon">${person.icon}</h3>
                <h3 class="item-name">${person.name}</h3>
                <h3 class="item-score">${person.score}</h3>
        </div>`;
    }
    
    return item;
}

const getSpreadsheetID = (url)=>{
    const regex = /\/d\/([-\w]+)/;
    const matches = url.match(regex);
    if (matches==null){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Datos ingresados no válidos 🥹"
          })
    }
    return matches[1];
}
/************
 * SCROLL
 ************/
var position_ini = 0;
const add_spreadsheet = document.getElementById("progress_scroll");
let calcScrollValue = () =>{
  let position_fin = document.documentElement.scrollTop;
  /* let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((position_fin*100)/calcHeight); */
  if (position_ini > 80 && position_fin <= position_ini ){
    /**console.log(position_ini);**/
    add_spreadsheet.style.display = "none";
  }else{
    add_spreadsheet.style.display = "grid";
  }
  position_ini = position_fin;
}
window.onscroll= calcScrollValue;
window.onload= calcScrollValue;
