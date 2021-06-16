<template>
    <div>
        <h1>开始使用</h1>
        <p class="p-install">
            请先<span class='span-start'><router-link to='/doc/install'>安装</router-link></span>本组件库
        </p>
        
            <h3>Vue单文件组件</h3>
            <p class="p-install">代码示例：</p>

                 <div class='code-start'>
                    <pre><code v-html="prism.highlight(code1, prism.languages.html, 'html')">
                        
</code></pre>
                </div>


    </div>
</template>
<script>
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    data(){
        return {
            code1:"<template>\n    <div>\n        <y-button></y-button>\n    </div>\n</template>\n<script>\nimport {Button} from 'young-ui'\nexport default {\n    components: {\n        'y-button': Button\n    }\n}\n</"+"script>",
            prism: prism
        }
    }
}
</script>
<style lang="scss">
.code-start{
    padding: 20px;
    border:1px solid #ebebeb;
    background-color: #CCE8CF;
}
.p-install{
    margin: 20px 0;
}
.span-start{
    >a{
        text-decoration: none;
        color: #28d1c9;
    }

}
</style>