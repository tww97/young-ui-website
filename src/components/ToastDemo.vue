<template>
    <div>
        <h1>Toast</h1>
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <div class="y-toast">
                    <y-button @click="$toast('3s后自动关闭')" level='main' circle>上方弹出</y-button>
                    <y-button @click="$toast('3s后自动关闭', {position:'middle'})" level='main' circle>中间弹出</y-button>
                    <y-button @click="$toast('3s后自动关闭', {position:'bottom'})" level='main' circle>下方弹出</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    使用<span class='text-code'>$toast函数</span>来调用Toast组件，<span class='text-code'>$toast函数</span>的第一个参数为Toast组件的显示内容，第二个参数是一个对象，该对象中有一个<span class='text-code'>position</span>属性，该属性用来设置Toast组件的显示位置。
                </div>
            </template>
            <template v-slot:code>
                 <div>
                    <pre><code v-html="prism.highlight(code1, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>
        <demo-block>
            <h3>autoClose方法</h3>
            <template v-slot:source>
                <div class="y-toast">
                    <y-button @click="$toast('1s后自动关闭', {position: 'middle', autoClose: 1})" level='main' circle>1s后自动关闭</y-button>
                    <y-button @click="$toast('3s后自动关闭', {position: 'middle'})" level='main' circle>3s后自动关闭</y-button>
                    <y-button @click="$toast('需要手动关闭', {position:'middle', autoClose: false})" level='main' circle>不会自动关闭</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    <span class='text-code'>$toast函数</span>的第二个参数对象中的<span class='text-code'>autoClose</span>属性用来设置Toast组件显示后是否会自动关闭或者多少秒后自动关闭，它接收一个<span class='text-code'>Boolean</span>或<span class='text-code'>Number</span>类型的值，该参数的默认值为<span class='text-code'>3</span>，即默认<span class='text-code'>3s</span>后会自动关闭Toast组件。
                </div>
            </template>
            <template v-slot:code>
                 <div>
                    <pre><code v-html="prism.highlight(code2, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>
        <demo-block>
            <h3>beforeClose方法</h3>
            <template v-slot:source>
                <div class="y-toast">
                    <y-button @click="$toast('点击关闭按钮后关闭', {position: 'middle', autoClose: false})" level='main' circle>正常关闭</y-button>
                    <y-button @click="$toast('点击关闭按钮后需关闭弹窗才能最终关闭Toast标签', {position:'middle', autoClose: false, beforeClose: cb})" level='main' circle>完成操作后关闭</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    <span class='text-code'>$toast函数</span>的第二个参数对象中的<span class='text-code'>beforeClose</span>方法可以在用户点击Toast组件的关闭按钮之后，在Toast组件关闭之前进行一些操作，需要注意的是，当用户的操作满足要求之后，<span class='text-code'>beforeClose</span>方法需要返回<span class='text-code'>true</span>。
                </div>
            </template>
            <template v-slot:code>
                 <div>
                    <pre><code v-html="prism.highlight(code3, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>
        <demo-block>
            <h3>zIndex属性</h3>
            <template v-slot:source>
                <div class="y-toast">
                    <div class='zIndex'>将Toast与此元素重合，Toast会被遮挡</div>
                    <y-button @click="$toast('z-index太小可能会被其它元素遮挡', {position: 'middle', autoClose:false})" level='main' circle>Toast被遮挡</y-button>
                    <y-button @click="$toast('可以手动设置z-index的值', {position:'middle', zIndex: 200, autoClose:false})" level='main' circle>Toast显示正常</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    Toast组件的初始<span class='text-code'>z-index</span>值设置为<span class='text-code'>10</span>，当开发者开发的页面中存在元素节点的<span class='text-code'>z-index</span>值过大导致Toast组件显示时不能位于页面最上方，可以使用<span class='text-code'>$toast函数</span>的第二个参数对象中的<span class='text-code'>zIndex</span>属性手动设置Toast组件的<span class='text-code'>z-index</span>值的大小。
                </div>
            </template>
            <template v-slot:code>
                 <div>
                    <pre><code v-html="prism.highlight(code4, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>
        <demo-block>
            <h3>enableHtml属性</h3>
            <template v-slot:source>
                <div class="y-toast">
                    <y-button @click="$toast('<strong>strong标签不会生效</strong>', {position:'middle', autoClose: false})" level='main' circle>标签不会生效</y-button>
                    <y-button @click="$toast('<strong>strong标签生效了</strong>', {position:'middle', autoClose: false, enableHtml: true})" level='main' circle>标签生效</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    <span class='text-code'>$toast函数</span>的第二个参数对象中的<span class='text-code'>enableHtml</span>属性为<span class='text-code'>true</span>时，<span class='text-code'>$toast函数</span>的第一个参数内容按<span class='text-code'>普通HTML</span>插入，该参数默认为<span class='text-code'>false</span>，即<span class='text-code'>$toast函数</span>的第一个参数内容默认按<span class='text-code'>文本</span>插入。
                </div>
            </template>
            <template v-slot:code>
                 <div>
                    <pre><code v-html="prism.highlight(code5, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>

    </div>
</template>
<script>
// import Toast from '../lib/Toast.vue'
import Button from '../lib/Button.vue'
import DemoBlock from './DemoBlock'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    components: {
        // 'y-toast': Toast,
        'y-button': Button,
        'demo-block': DemoBlock
    },
    data(){
        return {
            prism: prism,
            code1:"<y-button @click='$toast('3s后自动关闭')' level='main' circle>\n    上方弹出\n</y-button>\n<y-button @click='$toast('3s后自动关闭', {position:'middle'})' level='main' circle>\n    中间弹出\n</y-button>\n<y-button @click='$toast('3s后自动关闭', {position:'bottom'})' level='main' circle>\n    下方弹出\n</y-button>",
            code2:"<y-button @click='$toast('1s后自动关闭', {position: 'middle', autoClose: 1})' level='main' circle>\n    1s后自动关闭\n</y-button>\n<y-button @click='$toast('3s后自动关闭', {position:'middle'})' level='main' circle>\n    3s后自动关闭\n</y-button>\n<y-button @click='$toast('需要手动关闭', {position:'middle', autoClose: false})' level='main' circle>\n    不会自动关闭\n</y-button>",
            code3:"<y-button @click='$toast('点击关闭按钮后关闭', {position: 'middle', autoClose: false})'\n  level='main' circle>\n    正常关闭\n</y-button>\n<y-button @click='$toast('点击关闭按钮后需关闭弹窗才能最终关闭Toast标签', \n  {position:'middle', autoClose: false, beforeClose: cb})' level='main' circle>\n    完成操作后关闭\n</y-button>\n<script>\n    export default {\n        methods: {\n            cb: function(){\n                alert('关闭弹窗后关闭')\n                return true\n            },\n        }\n    }\n</"+"script>",
            code4:"<y-button @click='$toast('z-index太小可能会被其它元素遮挡', {position: 'middle', autoClose: false})'\n  level='main' circle>\n    Toast被遮挡\n</y-button>\n<y-button @click='$toast('可以手动设置z-index的值', \n  {position:'middle', autoClose: false, zIndex: 200})' level='main' circle>\n    Toast显示正常\n</y-button>",
            code5:"<y-button @click='$toast('<strong>strong标签不会生效</strong>', \n  {position: 'middle', autoClose: false})' level='main' circle>\n    标签不会生效\n</y-button>\n<y-button @click='$toast('<strong>strong标签生效了</strong>', \n  {position:'middle', autoClose: false, enableHtml: true})' level='main' circle>\n    标签生效\n</y-button>"
        }
    },
    beforeCreate(){
        // console.log(this.$toast)
    },
    methods: {
        cb: function(){
            alert('关闭弹窗后关闭')
            return true
        },
    }
}
</script>
<style lang="scss">
    .y-toast{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .zIndex{
            border-radius: 23px;
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            // margin-bottom: 10px;
            border: 1px solid #5e6d82;
            background: white;
            z-index: 100;
        }
    }
</style>