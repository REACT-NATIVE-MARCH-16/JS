// if (ifade doğru mu) {
//     doğru ise yapılacak işlemler
// }

let person = {
    age: 22,
    name: "Ahmet",
    class: "402",
    studentNumber: 476,
    schoolName: "ABC"
}

if (person.schoolName === "ABC") {
    if (person.age >= 18) {
        console.log("reşittir")
    } else if (person.age < 18 && person.age >= 12) {
        console.log("Çocuktur")
    } else if (person.age < 12) {
        console.log("Bebektir")
    }
}
else {
    console.log("Elensin")
}
