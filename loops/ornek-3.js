// 1. aşama: sayılardan oluşan bir array tanımla. bu arraydeki elemanları ekrana bastır.
// 2. aşama: arraydeki bütün sayıları topla

const theArray = [14, 84, 100, 200];
var toplam = 0

for (let counter = 0; counter < theArray.length; counter++) {
    toplam = theArray[counter] + toplam
}

console.log(toplam)

