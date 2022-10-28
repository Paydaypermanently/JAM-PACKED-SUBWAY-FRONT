function decodeJwtResponse(jwtToken: string) {
  return JSON.parse(Buffer.from(jwtToken.split('.')[1], 'base64').toString())
}

export default decodeJwtResponse
