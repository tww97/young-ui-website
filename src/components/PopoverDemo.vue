<template>
    <div>
        <h1>Popover</h1>
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <div class="popover">
                    <y-popover>
                        <y-button level='main' circle>上方弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <y-popover position="bottom">
                        <y-button level='main' circle>下方弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <y-popover position='left'>
                        <y-button level='main' circle>左方弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <y-popover position="right">
                        <y-button level='main' circle>右方弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>position</span>属性设置Popover组件的弹出方向，该属性的默认值为<span class='text-code'>top</span>，另外还有<span class='text-code'>bottom、left、right</span>三个参数可选。
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
            <h3>trigger属性</h3>
            <template v-slot:source>
                <div class="popover">
                    <y-popover>
                        <y-button level='main' circle>click弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <y-popover trigger='hover'>
                        <y-button level='main' circle>hover弹出</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>trigger</span>属性设置Popover组件的弹出方式，支持两种弹出方式：<span class='text-code'>click、hover</span>，默认的弹出方式为<span class='text-code'>click</span>。
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
            <h3>width属性</h3>
            <template v-slot:source>
                <div class="popover">
                    <y-popover>
                        <y-button level='main' circle>默认宽度</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <y-popover :width= '250'>
                        <y-button level='main' circle>自定义宽度</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    可以使用<span class='text-code'>width</span>属性自定义Popover弹出框的宽度，默认为<span class='text-code'>150px</span>，该属性接受一个<span class='text-code'>String</span>或<span class='text-code'>Number</span>类型的值。
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
            <h3>z-index属性</h3>
            <template v-slot:source>
                <div class="popover">
                    <y-popover position='right'>
                        <y-button level='main' circle>显示异常</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                    <div class='zIndex'>将Popover组件与此元素重合</div>
                    <y-popover position='left' z-index='200'>
                        <y-button level='main' circle>显示正常</y-button>
                        <template slot="content">
                            弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容
                        </template>
                    </y-popover>
                </div>

            </template>
            <template v-slot:description>
                <div>
                    Popover组件的初始<span class='text-code'>z-index</span>值设置为<span class='text-code'>10</span>，当开发者开发的页面中存在元素节点的<span class='text-code'>z-index</span>值过大导致Popover组件显示时不能位于页面最上方，可以使用<span class='text-code'>z-index</span>属性手动设置Popover组件的<span class='text-code'>z-index</span>值的大小。
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
import DemoBlock from './DemoBlock'
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    components: {
        'y-popover': Popover,
        'y-button': Button,
        'demo-block': DemoBlock
    },
    data(){
        return {
            prism: prism,
            code1:"<y-popover>\n    <y-button level='main' circle>\n        上方弹出\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover position='bottom'>\n    <y-button level='main' circle>\n        下方弹出\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover position='left'>\n    <y-button level='main' circle>\n        左方弹出\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover position='right'>\n    <y-button level='main' circle>\n        右方弹出\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>",
            code2:"<y-popover>\n    <y-button level='main' circle>\n        click弹出\n    </y-button>\n    <template slot='content'>\n       弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover trigger='hover'>\n    <y-button level='main' circle>\n        hover弹出\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>",
            code3:"<y-popover>\n    <y-button level='main' circle>\n        默认宽度\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover :width='250'>\n    <y-button level='main' circle>\n        自定义宽度\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>",
            code4:"<y-popover position='right'>\n    <y-button level='main' circle>\n        显示异常\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>\n<y-popover position='left' z-index='200'>\n    <y-button level='main' circle>\n        显示正常\n    </y-button>\n    <template slot='content'>\n        弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容弹出内容\n    </template>\n</y-popover>"
        }
    }
}
</script>
<style lang="scss">
    .popover{
        display: flex;
        justify-content: space-evenly;
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