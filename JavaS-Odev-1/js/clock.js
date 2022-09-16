let fullName = prompt("Lütfen isminizi giriniz:")
document.getElementById('myName').innerHTML = fullName

console.log(fullName)

let weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] // Gün isimlerini eklemek için weekdays tanımlandı.

date = new Date();
let day = weekdays [date.getDay()]
let month = date.getMonth()
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()

document.getElementById('myClock').innerHTML = `${hour}: ${minute}: ${second} ${day} ` //Ekranda sadece göstermek istediğimiz bilgileri ekledik..

