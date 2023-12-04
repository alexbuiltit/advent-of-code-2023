/* eslint-disable @typescript-eslint/strict-boolean-expressions */

const inputFile = Bun.file('./day-1/input.txt')
const inputText = await inputFile.text()

const values: Record<string, string> = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e'
}

const convertInputToArray = (input: string): string[] => {
  return input.split('\n')
}

const getNumber = (input: string): number | undefined => {
  const numbers = input.match(/\d/g) // Match individual digits

  if (numbers && numbers.length >= 2) {
    const firstNumber = numbers[0]
    const lastNumber = numbers[numbers.length - 1]
    return parseInt(firstNumber + lastNumber)
  }
  if (numbers && numbers.length === 1) {
    return parseInt(numbers[0] + numbers[0])
  };
  return undefined
}

const convertNumberStrings = (value: string): string => {
  let inputWithoutNumberStrings = value
  Object.keys(values).forEach((key) => {
    inputWithoutNumberStrings = inputWithoutNumberStrings.replaceAll(key, values[key])
  })
  return inputWithoutNumberStrings
}

export const getCalibrationValue = (partTwo?: boolean): number => {
  let input = inputText
  const numbers: number[] = []

  if (partTwo) {
    input = convertNumberStrings(input)
  }

  const inputasCsv = convertInputToArray(input)

  inputasCsv.forEach((line: string) => {
    const number = getNumber(line)
    if (number !== undefined) {
      numbers.push(number)
    }
  })

  const calibrationValue = numbers.reduce((a, b) => a + b, 0)
  return calibrationValue
}
