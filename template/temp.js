
require('@babel/register')
const path = require('path')
const fs = require('fs')
const Handlebars = require("handlebars")
// const mjml2html = require('../packages/mjml/src/index')
const mjml2html = require('mjml')

// const template = Handlebars.compile(`
//     <mjml>
//         <mj-body>
//             <mj-container>
//                 <mj-section>
//                     <mj-column>
//                         <mj-text>{{message}}</mj-text>
//                     </mj-column>
//                 </mj-section>
//             </mj-container>
//         </mj-body>
//     </mjml>
// `)

// 读取mjml文件
const email = fs.readFileSync('dmd-email.mjml', 'utf-8')
const template = Handlebars.compile(email)
const context = {
    message: 'Hello World'
};
const _mjml = template(context);

// const html = mjml2html(_mjml) // 这样得到的是一个对象，包含转换后的html和一些信息
// 格式化得到的html字符串
const { html } = mjml2html(_mjml, {
    beautify: true
})

const testFile = path.resolve(__dirname, './temp.html')
// 生成最终的html文件
fs.writeFileSync(testFile, html )
