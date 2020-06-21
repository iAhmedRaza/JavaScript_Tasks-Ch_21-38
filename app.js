// CHAPTER 21-25

//Task 1
var Fname = prompt('First name')
var Lname = prompt('Last name')
var FullName = Fname + " " + Lname
alert("Asalamualikum "+FullName)

//Task 2
var mbl = prompt('What is your favpourite mobile?')
document.write("My Favourite Mobile is "+mbl+"<br>Length of string is "+mbl.length)

//Task 3
var cn = "Pakistani"
document.write('String: '+cn+"<br>Indec of 'n': "+cn.indexOf('n'))

//Task 4
var hl = 'Hello world'
document.write('String: '+hl+"<br>Last index of 'l': "+hl.lastIndexOf("l"))


//Task 5
var cn = "Pakistani"
document.write('String: '+cn+"<br>Character at 3rd index: "+cn.charAt(3))

//Task 6
var Fname = prompt('First name')
var Lname = prompt('Last name')
var FullName = Fname.concat(" ",Lname)
alert("Asalamualikum ".concat(FullName))

//Task 7
var city = 'Hyderabad'
document.write('City: '+city+"<br>After replacement: "+city.replace('Hyder','Islam'))

//Task 8
var message = "Ali and Sami are best friends. They play cricket and football together"
document.write(message.split('and').join('&'))

//Task 9
var val ='472'
var Nval = Number(val)
document.write(`Value: ${val}<br>Type: ${typeof(val)}<br>Value: ${Nval}<br>Type: ${typeof(Nval)}`)

//Task 10
var food = prompt('Favourite food?')
document.write(`User input: ${food}<br>Upper case: ${food.toUpperCase()}`)

//Task 11
var inp = prompt('Your input:')
document.write(`User Input: ${inp}<br>Title Case: ${inp[0].toUpperCase()}${inp.slice(1,)}`)

//Task 12
var num = 35.36 ;
alert(String(num).replace('.',''))

//Task 13
var usr = prompt('Username:')
for (let i = 0; i < usr.length; i++) {
    if (usr[i]==String.fromCharCode(33)||usr[i]==String.fromCharCode(44)||usr[i]==String.fromCharCode(46)||usr[i]==String.fromCharCode(64)) {
    alert("Please enter valid name")
}
    
//Task 14 
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var ip = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var scre; 
    for (let i = 0; i < A.length; i++) {
        if(ip==A[i])
        {
            document.write(`${ip} is avliable at index ${i} in our bakery.`)
            scre = 1;
        }
    }
    if (scre!=1)
    {
        document.write(`We are sorry. ${ip} is not avliable at our bakery.`)
    }
}

//Task 15


//Task 16
var university = "University of Karachi"
var uniArray = university.split(' ')

for (let i = 0; i < uniArray.length; i++) {
    for (let j = 0; j < uniArray[i].length; j++) {
        document.write( uniArray[i][j]+'<br>')
    }
    document.write("<br>")
    
}

//Task 17
var cin = prompt('Write any word:')
document.write(`User input: ${cin} <br>Last character of input: ${cin[cin.length-1]}`)

//Task 18
var temp = "The quick brown fox jumps over the lazy dog"
var count = temp.toLowerCase().split('the').length-1
document.write('Text: '+temp+'<br> There are '+(count)+' occurance(s) of word "the"')

//CHAPTER 26-30
//Task 1
var n0 = 3.45214
document.write(`number: ${n0}<br>round off value: ${Math.round(n0)}<br>floor value: ${Math.floor(n0)}<br>ceil value: ${Math.ceil(n0)}`)

//Task 2
var nu = -2.854
document.write(`number: ${nu}<br>round off value: ${Math.round(nu)}<br>floor value: ${Math.floor(nu)}<br>ceil value: ${Math.ceil(nu)}`)

//Task 3
var neg = -4
var negAbs = Math.abs(neg)
document.write(`The absolute value of ${neg} is ${negAbs}`)

//Task 4
var dice1 = Math.floor(Math.random()*6+1)
var dice2 = Math.floor(Math.random()*6+1)
document.write(`Random dice value1: ${dice1}<br>Random dice value2: ${dice2}`)

//Task 5
var rand = Math.round(Math.random())
var coin ;
if(rand==1){
    coin = 'Head'
} else {
    coin = 'Tail'
}
document.write(`${rand} <br>Random coin value ${coin}`)

//Task 6
var rand1_100 = Math.floor(Math.random()*100+1)
document.write(`Random no between 1-100 is ${rand1_100}`)

//Task 7
var weight = prompt("Enter your weight:").toLowerCase()
weight = weight.replace('kgs','')
weight = weight.replace('kilograms','')
document.write(`The weight of the user is: ${weight} kilograms`)

//Task 8
var rand10 = Math.floor(Math.random()*10+1)
var secretNo = prompt('Guess any no between 1 - 10 ')
if (rand10==secretNo){
    alert("Congarts")
} else{
    alert('Try again')
}

//Chapter 31-34
//Task 1
var d = new Date()
document.write(d)

//Task 2
var d = new Date()
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alert('Current month: '+months[d.getMonth()])

//Task 3
var d = new Date()
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
alert('Today is: '+days[d.getDay()])

//Task 4
var d = new Date()
var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
var today = days[d.getDay()]
if(today=='Sun' || today=='Sat'){
alert('Its a Fun day')
} else{
    alert('Its not a fun day')
}

//Task 5


//Task 6
var minutes = 60*1000
var d = new Date()
var ms = d.getTime()
var min = ms/minutes
document.write(`Current Date: ${d}<br>Elapsed milliseconds since January 1, 1970: ${ms}<br>Elapsed minutes since January 1, 1970: ${min}`)

//Task 7

//Task 8
var d = new Date()
var laterDate = new Date(d.getFullYear(),d.getMonth(),0)
document.write(`Later date: ${laterDate}`)

//Task 9
var ramadan = new Date("18/05/2015")
var d = new Date()
var time = d.getTime() - ramadan.getTime()
var dy = time/(1000*3600*24)
document.write(dy+' days has passed since 1st Ramadan 2015')



//Chapter 35-38
//Task 1
function dateTimeNow(){
    var d = new Date()
    alert(d)
}
dateTimeNow()

//Task 2
function fullName(firstname, lastname){
    alert('Aslamualikum '+firstname+' '+lastname)
}
fullName('Ahmed','Raza')

//Task 3
function addNo (no1,no2) {
    alert(`${no1} + ${no2} = ${no1+no2}`)
}
var noOne =Number( prompt('1st No:'))
var noTwo = Number(prompt('2nd No'))
addNo(noOne,noTwo)

//Task 4
function calculator(firstNo,secNo,operator){
    var result
    if(operator=='+'){
        result = firstNo+secNo
    } else if(operator=='-'){
        result = firstNo-secNo
    }else if(operator=='/'){
        result = firstNo/secNo
    }else if(operator=='%'){
        result = firstNo%secNo
    }else if(operator=='*'){
        result = firstNo*secNo
    }
    document.write(`${firstNo} ${operator} ${secNo} = ${result}`)

}
var Fno =Number(prompt('Write First No:'))
var Lno =Number(prompt('Write Last No:'))
var Op =(prompt('Operator:'))
calculator(Fno,Lno,Op)


//Task 5
function square (no){
    alert(`Square of ${no} is ${Math.pow(no,2)}`)
}
var numb = Number(prompt('Write a no:'))
square(numb)

//Task 6
function factorial (no){
    var result = no
    for (let i = 1; i < no; i++) {
        result= result*i
    }
    alert(`Factorial: ${result}`)
}
var fact = Number(prompt('Write a no:'))

factorial(fact)

//Task 7
function counting (start, end){
    var strt = start
    for (let i = start; i <= end; i++) {
         
      document.write(strt+'<br>')
      strt+= 1
       
    }
}
var startNo = Number(prompt('Conting starts with:'))
var endNo = Number(prompt('Conting ends with:'))
counting(startNo,endNo)

//Task 8
function calculateSquare(numbr){
    return Math.pow(numbr,2)
}
function calculateHypotenuse(base, perp){
    return (calculateSquare(base) + calculateSquare(perp))

}
var Base = Number(prompt('Write base value:'))
var Perp =  Number(prompt('Write perpendicular value:')) 
alert(`H^2 = ${calculateSquare(Base,Perp)}`)

//Task 9
function areaRectange(width,height){
    alert(`Area of rectange: ${width*height}`)

}
//i 
areaRectange(2,8)
//ii
var Height = 5
var Width = 9
areaRectange(Width,Height)

//Task 10
var word = prompt('Write a word')
function palindrome(wrd){
 var lett = wrd.toLowerCase()
 var RevLett = lett.split('').reverse().join('')
  if(lett==RevLett){
      alert('Its palindrome')
  } else{
      alert('Its not palindrome')
  }
}
palindrome(word)

//Task 11
var strg = prompt('Write a sentence:')
function TitleCase(stri){
    var st = stri.split(' ')
    for (let i = 0; i < st.length; i++) {
            st[i]=st[i][0].toUpperCase()+st[i].slice(1,).toLowerCase()
        }
    return st.join(' ')

}
document.write(`Given string: ${strg}<br>Title Case: ${TitleCase(strg)}`)


//Task 12
var sen =prompt('Write a sentence:')
var sent = sen.split(' ')
function LongestWord(sente) {

    var longWord = sente[0]
    for (let i = 0; i < sente.length; i++) {
        if(sente[i].length>longWord.length){
            longWord = sente[i]
        }
        
    }
    return longWord
    
}
document.write(`String: ${sen}<br>Long word in a string:${LongestWord(sent)}`)

//Task 13
var str = prompt('Write a string:').toLowerCase()
var ch = prompt('Write a word to count occurance:')

function occurance(str,ch){
var cnt = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i]==ch){
            cnt += 1
        }
    
    }
alert(cnt)

}
occurance(str,ch)

//Task 14
function calcCircumference(r){
    return Math.round(2*Math.PI*r)
}
function calcArea(r){
    return Math.round( Math.PI*(Math.pow(r,2)))
}
var radius = Number(prompt('Radius of a circle:'))
document.write(`Circumference of a circle is: ${calcCircumference(radius)}<br>Area of a circle is: ${calcArea(radius)}`)


