// @flow

export const main = (event, context, callback) => {
  console.log('hello')

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: 'ok',
  }
  callback(null, response)
}
