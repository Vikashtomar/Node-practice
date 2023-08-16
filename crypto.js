import crypto from 'crypto'

const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encryptData(text){
    let cipher = crypto.createCipheriv(algorithm,  Buffer.from(key), iv);
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])

    return {iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
}

function decryptData(text){
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedData = Buffer.from(text.encryptedData, 'hex')

    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedData)
    decrypted = Buffer.concat([decrypted, decipher.final()])

    return decrypted.toString()
}
let output = encryptData('Javascript')
console.log(output)
console.log(decryptData(output))


