<template>
    <div class="dialog">
        <h1>Dialog</h1>
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <y-button @click="value1 = !value1" level='main' circle>打开Dialog</y-button>
                <y-dialog :changeView="value1">
                    标题
                    <template v-slot:content>
                        这是一段文本
                    </template>
                </y-dialog>
            </template>
            <template v-slot:description>
                <div>
                   需要设置<span class='text-code'>changeView</span>属性，它接收<span class='text-code'>Boolean</span>，当<span class='text-code'>changeView</span>属性接收的<span class='text-code'>Boolean</span>值切换时，显示或者关闭Dialog。Dialog 分为两个部分：<span class='text-code'>标题</span>和<span class='text-code'>内容</span>，<span class='text-code'>内容</span>需要具名为<span class='text-code'>content</span>的<span class='text-code'>slot</span>。<span class='text-code'>标题</span>属性用于定义标题，它是默认的<span class='text-code'>slot</span>，并且是可选的，默认值为空。
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
            <h3>before-close方法</h3>
            <template v-slot:source>
                <y-button @click="value2 = !value2" level='main' circle>打开Dialog</y-button>
                <y-dialog :changeView="value2" :before-close='close'>
                    before-close方法
                    <template v-slot:content>
                        <input type="text" v-model='text1'  placeholder="请输入内容">
                        <strong class="content-text">如果想要通过点击遮罩层或者右上角取消按钮关闭dialog，你需要在输入框中输入'close'</strong>                       
                    </template>
                </y-dialog>
            </template>
            <template v-slot:description>
                <div>
                    使用<span class='text-code'>before-close</span>方法可以在用户点击遮罩层或者右上角关闭按钮之后，在Dialog关闭之前进行一些操作，需要注意的是，当用户的操作满足要求之后，<span class='text-code'>before-close</span>方法需要返回<span class='text-code'>true</span>。
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
            <h3>before-cancel方法</h3>
            <template v-slot:source>
                <y-button @click="value3 = !value3" level='main' circle>打开Dialog</y-button>
                <y-dialog :changeView="value3" :before-cancel='cancel'>
                    before-cancel方法
                    <template v-slot:content>
                        <input type="text" v-model='text2'  placeholder="请输入内容">
                        <strong class="content-text">如果想要通过点击取消按钮关闭dialog，你需要在输入框中输入'cancel'</strong>
                    </template>
                </y-dialog>
            </template>
            <template v-slot:description>
                <div>
                    使用<span class='text-code'>before-cancel</span>方法可以在用户点击取消按钮之后，在Dialog关闭之前进行一些操作，需要注意的是，当用户的操作满足要求之后，<span class='text-code'>before-cancel</span>方法需要返回<span class='text-code'>true</span>。
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
            <h3>before-ensure方法</h3>
            <template v-slot:source>
                <y-button @click="value4 = !value4" level='main' circle>打开Dialog</y-button>
                <y-dialog :changeView="value4" :before-ensure='ensure'>
                    before-ensure方法
                    <template v-slot:content>
                        <input type="text" v-model='text3'  placeholder="请输入内容">
                    <strong class="content-text">如果想要通过点击确定按钮关闭dialog，你需要在输入框中输入'ensure'</strong>
                    </template>
                </y-dialog>
            </template>
            <template v-slot:description>
                <div>
                    使用<span class='text-code'>before-ensure</span>方法可以在用户点击确定按钮之后，在Dialog关闭之前进行一些操作，需要注意的是，当用户的操作满足要求之后，<span class='text-code'>before-ensure</span>方法需要返回<span class='text-code'>true</span>。
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
            <h3>z-index属性</h3>
            <template v-slot:source>
                <div class="buttonParent">
                    <div class='zIndex'>此元素的z-index值为100</div>
                    <y-button @click="value5 = !value5" level='main' circle>显示异常</y-button>
                    <y-button @click="value6 = !value6" level='main' circle>显示正常</y-button>
                </div>

                <y-dialog :changeView="value5">
                    <span>标题</span>
                    <template v-slot:content>
                        这是一段文本
                    </template>
                </y-dialog>
                <y-dialog :changeView="value6" z-index='200'>
                    <span>标题</span>
                    <template v-slot:content>
                        这是一段文本
                    </template>
                </y-dialog>
            </template>
            <template v-slot:description>
                <div>
                    Dialog组件的初始<span class='text-code'>z-index</span>值设置为<span class='text-code'>10</span>，当开发者开发的页面中存在元素节点的<span class='text-code'>z-index</span>值过大导致Dialog显示时不能位于页面最上方，可以使用<span class='text-code'>z-index</span>属性手动设置Dialog的<span class='text-code'>z-index</span>值的大小。
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
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import DemoBlock from './DemoBlock.vue'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    components: {
        'y-dialog': Dialog,
        'y-button': Button,
        'demo-block': DemoBlock
    },
    data(){
        return {
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: false,
            value6: false,
            text1: undefined,
            text2: undefined,
            text3: undefined,
            prism: prism,
            code1:"<y-button @click='value = !value' level='main' circle>打开Dialog</y-button>\n<y-dialog :changeView='value'>\n    标题\n    <template v-slot:content>\n        这是一段文本\n    </template>\n</y-dialog><script>\n    export default {\n        data(){\n            return {\n                value: false\n            }\n        }\n    }\n</"+"script>",
            code2:"<y-button @click='value = !value' level='main' circle>打开Dialog</y-button>\n<y-dialog :changeView='value' :before-close='close'>\n    before-close方法\n    <template v-slot:content>\n        <input type='text' v-model='str'  placeholder='请输入内容'>\n        <strong>\n            如果想要通过点击遮罩层或者右上角关闭按钮关闭dialog，你需要在输入框中输入'close'\n        </strong>\n    </template>\n</y-dialog>\n<script>\n    export default {\n        data(){\n            return {\n                value: false,\n                str: undefined\n            }\n        },\n        methods: {\n            close(){\n               if(this.str !== 'close'){\n                    alert('你需要在输入框中输入'close'')\n                }else{\n                    return true\n                }            \n            }\n        }\n    }\n</"+"script>",
            code3:"<y-button @click='value = !value' level='main' circle>打开Dialog</y-button>\n<y-dialog :changeView='value' :before-cancel='cancel'>\n    before-cancel方法\n    <template v-slot:content>\n        <input type='text' v-model='str'  placeholder='请输入内容'>\n        <strong>\n            如果想要通过点击取消按钮关闭dialog，你需要在输入框中输入'cancel'\n        </strong>\n    </template>\n</y-dialog>\n<script>\n    export default {\n        data(){\n            return {\n                value: false,\n                str: undefined\n            }\n        },\n        methods: {\n            cancel(){\n               if(this.str !== 'cancel'){\n                    alert('你需要在输入框中输入'cancel'')\n                }else{\n                    return true\n                }            \n            }\n        }\n    }\n</"+"script>",
            code4:"<y-button @click='value = !value' level='main' circle>打开Dialog</y-button>\n<y-dialog :changeView='value' :before-ensure='ensure'>\n    before-ensure方法\n    <template v-slot:content>\n        <input type='text' v-model='str'  placeholder='请输入内容'>\n        <strong>\n            如果想要通过点击确认按钮关闭dialog，你需要在输入框中输入'ensure'\n        </strong>\n    </template>\n</y-dialog>\n<script>\n    export default {\n        data(){\n            return {\n                value: false,\n                str: undefined\n            }\n        },\n        methods: {\n            cancel(){\n               if(this.str !== 'ensure'){\n                    alert('你需要在输入框中输入'ensure'')\n                }else{\n                    return true\n                }            \n            }\n        }\n    }\n</"+"script>",
            code5:"<y-button @click='value1 = !value1' level='main' circle>显示异常</y-button>\n<y-button @click='value2 = !value2' level='main' circle>显示正常</y-button>\n<y-dialog :changeView='value1'>\n    标题\n    <template v-slot:content>\n        这是一段文本\n    </template>\n</y-dialog>\n<y-dialog :changeView='value2' z-index='200'>\n    标题\n    <template v-slot:content>\n        这是一段文本\n    </template>\n</y-dialog>\n<script>\n    export default {\n        data(){\n            return {\n                value1: false,\n                value2: false\n            }\n        }\n    }\n<"+"/script>"
        }
    },
    watch: {
        num: function(){
            console.log(this.num)
        }
    },
    methods: {
        close(){
            if(this.text1 !== 'close'){
                alert('你需要在输入框中输入"close"')
            }else{
                return true
            }            
        },
        cancel(){
            if(this.text2 !== 'cancel'){
                alert('你需要在输入框中输入"cancel"')
            }else{
                return true
            }  
        },
        ensure(){
            if(this.text3 !== 'ensure'){
                alert('你需要在输入框中输入"ensure"')
            }else{
                return true
            }
        }
    }
}
</script>
<style lang="scss">
    .word{
        word-break: break-all;
    }
    input{
        display: inline-block;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        &:focus-visible{
            border: 1px solid #409eff;
        }
    }
    // .text-code{
    //     color: #5e6d82;
    //     // background-color: #e6effb;
    //     margin: 0 4px;
    //     display: inline-block;
    //     padding: 1px 5px;
    //     font-size: 14px;
    //     border-radius: 3px;
    //     height: 18px;
    //     line-height: 18px;
    // }
    .content-text{
        display: block;
        padding: 15px 0;
    }
    .buttonParent{
        display: flex;
        justify-content: space-evenly;
        .zIndex{
            border-radius: 23px;
            position: relative;
            display: inline-block;
            padding: 10px 10px;
            margin-bottom: 10px;
            border: 1px solid #5e6d82;
            background: white;
            z-index: 100;
        }
    }

</style>