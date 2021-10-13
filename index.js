const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt([
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'give a brief description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'add some installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'provide an example use case',
        name: 'usage'
    },
    {
        type: 'credits',
        message: 'give credit to everyone who contributed',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'pick a license for your project',
        name: 'license',
        choices: ['MIT','Apache 2.0','ISC'],
    },
    {
        type: 'input',
        message: 'what is your Github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'what is the current year?',
        name: 'year'
    },
    {
        type: 'input',
        message: 'what is your real name?',
        name: 'name'
    }
])

.then((response)=>{
    const year = response.year
    const name = response.name
    const title = response.title
    const description = response.description
    const install = response.install
    const usage = response.usage
    const credits = response.credits
    const github = response.github
    const email = response.email
    let license

    if(response.license === 'MIT'){
        license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]Copyright ${year} ${name}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }else if(response.license === 'Apache 2.0'){
        license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]  Copyright ${year} ${name}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
    }else if(response.license === 'ISC'){
        license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]Copyright ${year} ${name}

        Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
    }
    

    const readMe = `# project-name
    ${title}


## Table of Contents
[License](#License)

## Description
${description}

## Installation
${install}

## Usage
${usage}

 ## Contributors
${credits}

## Questions
${github}
${email}

## License
${license}
    `



    fs.writeFile('README.md', readMe, err =>{
        err ? console.log('something went wrong') : console.log('it worked')
    })
})