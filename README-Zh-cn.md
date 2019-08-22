# form-designer

a form designer base on vue and element-ui and font-awesome

使用方式，将源代码中的dist目录下的内容拷贝到自己项目的node_modules目录下
结构如下图：

--node_modules
----form-designer
------lib
--------demo.html
--------****
------package.json


然后在main.js中添加如下内容：

`import formdesigner from 'form-designer';`

`import 'form-designer/lib/form-designer.css'`

在此之前，可能需要引用ElementUI和font-awesome

`import ElementUI from 'element-ui'`

`import 'element-ui/lib/theme-chalk/index.css';`

`import 'font-awesome/css/font-awesome.min.css'`

然后使用如下代码安装

`Vue.use(ElementUI);`

`Vue.use(formdesigner);`

在需要使用设计器的界面添加如下代码：

`<designer @save="saveHandler" @saveAs="saveAsHandler"></designer>`

> 其中save和saveAs均接受一个参数，表示当前表单的内容

在需要使用表单的地方添加如下代码：

`<auto-form :formConfig="formData" submitName="保存" @save="saveAutoForm"></auto-form>`

> 其中formConfig为上面save时得到的表单内容，save表示在内部点击保存时返回的表单数据