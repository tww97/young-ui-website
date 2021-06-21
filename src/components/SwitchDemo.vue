<template>
    <div class='y-switch'>
        <h1>Switch</h1>       
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <div>                   
                    <y-switch :active='false'></y-switch>
                    <y-switch :active='true'></y-switch>
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text'>active</span>属性来设置switch开关的初始状态，设置<span class='text'>:active='true'</span>或者<span class='text'>active='true'</span>，switch开关的初始状态为开，设置<span class='text'>:active='false'</span>或者<span class='text'>active='false'</span>或者不设置<span class='text'>active</span>属性，则switch开关的初始状态为关。
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
            <h3>改变背景颜色</h3>
            <template v-slot:source>
                <div>
                    <y-switch active-color="#13ce66" inactive-color="#ff4949"></y-switch>                
                    <y-switch active=true active-color="#13ce66" inactive-color="#ff4949"></y-switch>
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text'>active-color</span>属性与<span class='text'>inactive-color</span>属性来设置switch开关的背景色。
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
                <div>
                    <y-switch disabled></y-switch>
                    <y-switch active=true disabled></y-switch>                   
                </div>
            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text'>disabled</span>属性，来设置switch开关是否被禁用。
                </div>
            </template>
            <template v-slot:code>
                <div>
                    <pre><code v-html="prism.highlight(code3, prism.languages.html, 'html')">
                        
</code></pre>
                </div>
            </template>
        </demo-block>

    </div>
</template>
<script>
import Switch from '../lib/Switch.vue'
import DemoBlock from './DemoBlock.vue'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default{
    components: {
        'y-switch': Switch,
        'demo-block' : DemoBlock
    },
    data(){
        return {
            prism: prism,
            code1: "<y-switch :active='false'></y-switch>\n<y-switch :active='true'></y-switch>",
            code2: '<y-switch\n  active-color="#13ce66"\n  inactive-color="#ff4949">\n</y-switch>\n<y-switch\n  active="true"\n  active-color="#13ce66"\n  inactive-color="#ff4949">\n</y-switch>',
            code3: '<y-switch disabled></y-switch>\n<y-switch\n  active="true"\n  disabled>\n</y-switch>'
        }
    },
}
</script>
<style lang="scss">
.y-switch{
    .text{
        color: #5e6d82;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 14px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
    }
}

</style>