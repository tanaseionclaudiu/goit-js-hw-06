const listItems = document.querySelectorAll('#categories > .item');

console.log(`Number of categories: ${listItems.length}`);
console.log('\r\n');

for (let i = 0; i < listItems.length; i++ ) {
    console.log(`Category: ${listItems[i].childNodes[1].textContent}`);
    console.log('\r\n');
    console.log(`Elements: ${listItems[i].childNodes[3].children.length}`);
}
    
