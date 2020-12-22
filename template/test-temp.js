// mjml引入模板引擎
require('@babel/register')
const mjml2html = require('./packages/mjml/src/index')
const compile = require('handlebars')

const xml = `
    <mjml>
        <mj-head>
            <mj-attributes>
                <mj-all
                    padding="0px"
                />
                <mj-wrapper
                    background-color="yellow"
                    padding="80px"
                />
            </mj-attributes>
        </mj-head>
        <mj-body>
            <mj-wrapper>
                <mj-section>
                    <mj-column>
                        <mj-text>
                            {{message}}
                        </mj-text>
                    </mj-column>
                </mj-section>
            </mj-wrapper>
        </mj-body>
    </mjml>
`
const template = compile(xml)

const context = {
    message: '简简单单一个邮件'
}

const mjml = template(context)
const html = mjml2html(mjml)

if (process.argv.includes('--open')) {
    const open = require('open')
    const path = require('path')
    const fs = require('fs')
  
    const testFile = path.resolve(__dirname, './test.html')
  
    fs.writeFileSync(testFile, html)
  
    open(testFile)
  }
console.log('html', html);