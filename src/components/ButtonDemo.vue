<template>
    <div class="y-button">
        <h1>Button</h1>
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <div class='button'>
                    <y-button>默认按钮</y-button>
                    <y-button level='main'>主要按钮</y-button>
                    <y-button level='success'>成功按钮</y-button>
                    <y-button level='warn'>警告按钮</y-button>
                    <y-button level='danger'>危险按钮</y-button>
                </div>
                <div class='button'>
                    <y-button circle>默认按钮</y-button>
                    <y-button level='main' circle>主要按钮</y-button>
                    <y-button level='success' circle>成功按钮</y-button>
                    <y-button level='warn' circle>警告按钮</y-button>
                    <y-button level='danger' circle>危险按钮</y-button>
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>level</span>和<span class='text-code'>circle</span>属性来定义Button的样式。
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
            <h3>不同尺寸</h3>
            <template v-slot:source>
                <div class='button'>
                    <y-button level='main' size='big'>大型按钮</y-button>
                    <y-button level='main'>正常按钮</y-button>
                    <y-button level='main' size='small'>小型按钮</y-button>
                </div>
                <div class='button'>
                    <y-button level='main' size='big' circle>大型按钮</y-button>
                    <y-button level='main' circle>正常按钮</y-button>
                    <y-button level='main' size='small' circle>小型按钮</y-button>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>size</span>属性来设置Button的尺寸大小。
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
            <h3>禁用状态</h3>
            <template v-slot:source>
                <div class='button'>
                    <y-button disabled>默认按钮</y-button>
                    <y-button level='main' disabled>主要按钮</y-button>
                    <y-button level='success' disabled>成功按钮</y-button>
                    <y-button level='warn' disabled>警告按钮</y-button>
                    <y-button level='danger' disabled>危险按钮</y-button>
                </div>
                <div class='button'>
                    <y-button circle disabled>默认按钮</y-button>
                    <y-button level='main' circle disabled>主要按钮</y-button>
                    <y-button level='success' circle disabled>成功按钮</y-button>
                    <y-button level='warn' circle disabled>警告按钮</y-button>
                    <y-button level='danger' circle disabled>危险按钮</y-button>
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>disabled</span>属性来定义Button是否可用，它接受一个Boolean值。
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
            <h3>加载中</h3>
            <template v-slot:source>
                <div class='button'>
                    <y-button level='main' size='big' loading>大型按钮</y-button>
                    <y-button level='main' loading>正常按钮</y-button>
                    <y-button level='main' size='small' loading>小型按钮</y-button>
                </div>
                <div class='button'>
                    <y-button level='main' size='big' loading circle>大型按钮</y-button>
                    <y-button level='main' loading circle>正常按钮</y-button>
                    <y-button level='main' size='small' loading circle>小型按钮</y-button>
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>loading</span>属性来设置Button是为loading状态，它接受一个Boolean值。
                </div>
            </template>
            <template v-slot:code>
                <div>
                    <pre><code v-html="prism.highlight(code4, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>
    </div>

</template>

<script>
import Button from '../lib/Button.vue'
import DemoBlock from './DemoBlock.vue'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    components: {
        'y-button': Button,
        'demo-block': DemoBlock
    },
    data(){
        return {
            prism: prism,
            code1:"<div class='first-row'>\n    <y-button>默认按钮</y-button>\n    <y-button level='main'>主要按钮</y-button>\n    <y-button level='success'>成功按钮</y-button>\n    <y-button level='warn'>警告按钮</y-button>\n    <y-button level='danger'>危险按钮</y-button>\n</div>\n<div class='second-row'>\n    <y-button circle>默认按钮</y-button>\n    <y-button level='main' circle>主要按钮</y-button>\n    <y-button level='success' circle>成功按钮</y-button>\n    <y-button level='warn' circle>警告按钮</y-button>\n    <y-button level='danger' circle>危险按钮</y-button>\n</div>",
            code2:"<div class='first-row'>\n    <y-button level='main' size='big'>大型按钮</y-button>\n    <y-button level='main'>正常按钮</y-button>\n    <y-button level='main' size='small'>小型按钮</y-button>\n</div>\n<div class='second-row'>\n    <y-button level='main' size='big' circle>大型按钮</y-button>\n    <y-button level='main' circle>正常按钮</y-button>\n    <y-button level='main' size='small' circle>小型按钮</y-button>\n</div>",
            code3:"<div class='first-row'>\n    <y-button disabled>默认按钮</y-button>\n    <y-button level='main' disabled>主要按钮</y-button>\n    <y-button level='success' disabled>成功按钮</y-button>\n    <y-button level='warn' disabled>警告按钮</y-button>\n    <y-button level='danger' disabled>危险按钮</y-button>\n</div>\n<div class='second-row'>\n    <y-button circle disabled>默认按钮</y-button>\n    <y-button level='main' circle disabled>主要按钮</y-button>\n    <y-button level='success' circle disabled>成功按钮</y-button>\n    <y-button level='warn' circle disabled>警告按钮</y-button>\n    <y-button level='danger' circle disabled>危险按钮</y-button>\n</div>",
            code4:"<div class='first-row'>\n    <y-button level='main' size='big' loading>大型按钮</y-button>\n    <y-button level='main' loading>正常按钮</y-button>\n    <y-button level='main' size='small' loading>小型按钮</y-button>\n</div>\n<div class='second-row'>\n    <y-button level='main' size='big' circle loading>大型按钮</y-button>\n    <y-button level='main' circle loading>正常按钮</y-button>\n    <y-button level='main' size='small' circle loading>小型按钮</y-button>\n</div>"
        }
    }
}
</script>
<style lang="scss">
.text-code{
    color: #5e6d82;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 14px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
}

.button{
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>