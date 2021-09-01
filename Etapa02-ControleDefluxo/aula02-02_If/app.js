//if
//operadores lógicos 'OU' || e 'E' &&

const password = 'oij'
if(password.length >=12 && password.includes('1')){
    console.log('senha muito forte')
}else if(password.length >= 8 || password.includes('1') && password.length>=5)
{
    console.log('senha forte')
} else{
     console.log('essa senha tem menos de 8 carcteres')
        }  


 