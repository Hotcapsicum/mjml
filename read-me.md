# mjml是一个邮件模板，可以将mjml格式邮件转化成兼容不同邮箱格式的html邮件
# vscode开发mjml时，可以安装mjml插件，之后就可以直接预览，control + shift + p，可以将mjml代码转成html代码‘
# mjml大致规范，mj-section 不能嵌套到 mj-section 中， mj-column 也不能嵌套到 mj-column 中
# 样式可以定义在mj-attributes的mj-class中，然后引入到组件中
mjml > mj-body > mj-section > mj-column

# mjml是静态模板，不能用于动态更新数据，诸如循环数据，判断等都不能实现，为此可以引入 handlebars 模板引擎(类似temp.js)

