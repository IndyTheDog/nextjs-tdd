import { getMyValue } from './getValue'

describe('Get Value', () => {

  const nullResponse = 'null'

  const invalidJSON = {
    'result': 'data'
  }

  const unsupportedValueJSON = {
    'result': 'data'
  }

  const validJSON = {
    'data': 'Ok'
  }

  it('Can handle null response', () => {
    cy.intercept('/exec', nullResponse)
    getMyValue().then((result) => {
      expect(result).to.equal('There was an error.')
    })
  })

  it('Can handle invalid JSON', () => {
    cy.intercept('/exec', invalidJSON)
    getMyValue().then((result) => {
      expect(result).to.equal('There was an error.')
    })
  })

  it('Can handle unsupported value', () => {
    cy.intercept('/exec', unsupportedValueJSON)
    getMyValue().then((result) => {
      expect(result).to.equal('Invalid value.')
    })
  })

  it('Can handle valid JSON', () => {
    cy.intercept('/exec', validJSON)
    getMyValue().then((result) => {
      expect(result).to.equal('Ok')
    })
  })
})
