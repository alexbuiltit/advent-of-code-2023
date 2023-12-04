const inputFile = Bun.file('./src/day-2/input.txt')
const data = await inputFile.text()

interface GameRules {
  red: number
  green: number
  blue: number
}

const buildDataDictionary = (input: string): Record<string, string[][]> => {
  const dataDictionary: Record<string, string[][]> = {}
  input = input.replaceAll('Game ', '')
  input.split('\n').forEach((line: string) => {
    const [key, value] = line.split(': ')
    const games = value.split('; ')
    const gameValues: string[][] = games.map((game: string) => {
      const games = game.split(', ')
      return games
    })
    dataDictionary[key] = gameValues
  })

  return dataDictionary
}

const checkIfGameCouldBePlayed = (gameValues: string[][], rules: GameRules): boolean => {
  let canBePlayed = true

  gameValues.forEach(round => {
    const red = round.find((color: string) => color.includes('red'))?.replace('red ', '')
    const green = round.find((color: string) => color.includes('green'))?.replace('green ', '')
    const blue = round.find((color: string) => color.includes('blue'))?.replace('blue ', '')

    if (red && parseInt(red) > rules.red) {
      canBePlayed = false
    }
    if (green && parseInt(green) > rules.green) {
      canBePlayed = false
    }
    if (blue && parseInt(blue) > rules.blue) {
      canBePlayed = false
    }
  })

  return canBePlayed
}

export const calculateSumOfIds = (): number => {
  const games = buildDataDictionary(data)
  const rules: GameRules = {
    red: 12,
    green: 13,
    blue: 14
  }
  let sum = 0
  const playableGames: string[] = []

  Object.keys(games).forEach(gameKey => {
    const game = games[gameKey]
    const canBePlayed = checkIfGameCouldBePlayed(game, rules)
    if (canBePlayed) {
      playableGames.push(`Game ${gameKey}`)
      sum += parseInt(gameKey)
    }
  })

  return sum
}
