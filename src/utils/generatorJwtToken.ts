import * as CryptoJS from 'crypto-js'

function encode(object: object) {
  return Buffer.from(JSON.stringify(object)).toString('base64')
}

function HMACSHA256(stringToSign: string, secret: object) {
  return CryptoJS.SHA256(stringToSign, secret)
}

function generatorJwtToken(playLoad: object, secret: object) {
  const encodedHeaders = encode({
    alg: 'HS256',
    typ: 'JWT'
  })
  const encodedPlayLoad = encode(playLoad)
  const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayLoad}`, secret)
  const encodedSignature = encode(signature)

  return `${encodedHeaders}.${encodedPlayLoad}.${encodedSignature}`
}

export default generatorJwtToken
