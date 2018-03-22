# JS Validators

## Credits
Credits go to https://github.com/monterail/vuelidate as the functions are taken or inspired from this project, without the vue overhead

## Why this validator collection

The idea is to have a simple javascript validator collection of checks which are often used

## List of current available checks

* alpha
* alphaNum
* numeric
* between
* decimal
* email
* integer
* ipv4Address
* macAddress
* maxLength
* maxValue
* minValue
* minLength
* required
* requiredIf
* requiredUnless
* url
* sameAs

## Installation

``` bash
npm install 'js-validators' --save
```

## Usage

``` javascript
import email, between from 'js-validators'

console.log(email.check('test@example.com'))
console.log(email.params)

let between3And6 = between(3,6)
console.log(between3And6.check(10))
console.log(between3And6.params)

```

## Why params ?

Simply because often, validation checks need to be translated to different languages, i.e.

 ``` javascript
between: 'This field needs to be between {min} and {max}'
 ```

## Function only, without params

``` javascript
import {check as emailCheck} from 'js-validators/email'

console.log(emailCheck('invalidmail'))
```
## Build & Test

``` bash
# npm run build
# npm run test
```
