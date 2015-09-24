var age = prompt('What is your age?')
alert('Your age is ' + age)

var color = prompt('What is your favorite color?')
alert(color + ' is a nice color')



var guess = prompt('2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 ?')

if (guess == '256')
  alert('Correct!')
else
  alert('Incorrect!')



var score = 0

var guess = prompt('What is phishing?\n1. Computer virus\n2. Corrupt website\n3. Junk email\n4. Identity theft scheme')
if (guess == '4')
  score = score + 1

guess = prompt('What is a firewall?\n1. Antivirus program\n2. Internet blocker\n3. Internet filter\n4. Internet logger')
if (guess == '3')
  score = score + 1

alert('You scored ' + score)