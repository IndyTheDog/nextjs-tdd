
const supportedValues = ["Ok", "Yes", "No"]

export const getMyValue = async () => {
  const response = await fetch('http://localhost:3000/exec')
  const result = await response.json()

  if (!result || !result?.data) return "There was an error."

  const mappedResult = supportedValues.find(value => value === result.data)

  if (!mappedResult) return "Invalid value."

  return mappedResult
}
