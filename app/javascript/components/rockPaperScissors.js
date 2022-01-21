const initRockPaperScissors = () => {
  const resultDisplay = document.querySelector('#result')
  const choicesDisplay = document.querySelector('#choices')
  const userScoreDisplay = document.querySelector('#user-score')
  const computerScoreDisplay = document.querySelector('#computer-score')
  const choices = ['rock', 'paper', 'scissors']
  let userWins = 0
  let computerWins = 0

  const handleClick = (e) => {
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice)
  }

  choices.forEach(choice => {
    const button = document.createElement('button')
    let buttonClasses = ['btn', 'btn-primary', 'm-2'];
    button.classList.add(...buttonClasses);
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
  })

  const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
        userWins += 1
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
        computerWins += 1
        break
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
        break
    }
    getScore()
    resetScore()
  }

  const resetScore = () => {
    if(userWins >= 5 || computerWins >= 5) {
      userWins = 0
      computerWins = 0
    }
    userScoreDisplay.innerHTML = userWins
    computerScoreDisplay.innerHTML = computerWins
  }

  const getScore = () => {
    userScoreDisplay.innerHTML = userWins
    computerScoreDisplay.innerHTML = computerWins
  }
}

export { initRockPaperScissors };
