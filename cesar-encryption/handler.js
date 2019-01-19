"use strict"

// EXAMPLE
// const cesarEncryption = require('./handler')

// cesarEncryption({
//     encryptN: 3,
//     encryptThis: 'Hello World'
// }, (err, response) => {

//     if(err) return console.log('Have a error', err)

//     console.log(response.status)
//     console.log(response.encryption);
// })

module.exports = (context, callback) => {

    let alphabetLower = 'abcdefghijklmñnopqrstuvxyz ';
    let alphabetUpper = 'ABCDEFGHIJQLMÑNOPQRSTUVXYZ.'
    let nonalphabet = '123456789'

    let n = context.encryptN || 3;
    let string = context.encryptThis;
    let encryptionString = '';

    try {
        for(let index = 0; index < string.length; index++) {
            let operation;
            let letter = string.charAt(index)

            for(let number_i = 0; number_i < nonalphabet.length; number_i++){
                if(letter === nonalphabet.charAt(number_i)){
                    encryptionString += letter;
                    break
                }
            }
    
            for(let lower_i = 0; lower_i < alphabetLower.length; lower_i++){
    
                if(letter === alphabetLower.charAt(lower_i)){
                    operation = lower_i + n;
    
                    if(operation > 27){
                        encryptionString += alphabetLower[operation - 27];
    
                    }
                    else{
                        encryptionString += alphabetLower[operation];
                    }
    
                    break;
                }
    
            }
    
            for(let upper_i = 0; upper_i < alphabetUpper.length; upper_i++) {
    
                if(letter === alphabetUpper.charAt(upper_i)){
                    operation = upper_i + n;
    
                    if(operation > 27){
                        encryptionString += alphabetUpper[operation - 27];
                    }
                    else{
                        encryptionString += alphabetUpper[operation];
                    }
    
                    break;
                }
    
            }
    
        }
    
        // no err
        callback(null, {status: "done", encryption: encryptionString});
    } catch (error) {
        callback('Verifique si la cadena existe ' + error)
    }

 
}
