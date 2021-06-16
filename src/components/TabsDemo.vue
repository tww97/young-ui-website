<template>
    <div>
        <h1>Tabs</h1>
        <demo-block>
            <h3>基本用法</h3>
            <template v-slot:source>
                <y-tabs :selected="selected1">
                    <y-tabs-head>
                        <y-tabs-item name='0'>周一</y-tabs-item>
                        <y-tabs-item name='1'>周二</y-tabs-item>
                        <y-tabs-item name='2'>周三</y-tabs-item>
                        <y-tabs-item name='3'>周四</y-tabs-item>
                    </y-tabs-head>
                    <y-tabs-body>
                        <y-tabs-pane name='0'>语文</y-tabs-pane>
                        <y-tabs-pane name='1'>数学</y-tabs-pane>
                        <y-tabs-pane name='2'>英语</y-tabs-pane>
                        <y-tabs-pane name='3'>物理</y-tabs-pane>
                    </y-tabs-body>
                </y-tabs>
            </template>
            <template v-slot:description>
                <div>
                    Tabs组件默认选中第一个标签页，也可以使用<span class='text-code'>selected</span>属性配合<span class='text-code'>name</span>属性来指定当前选中的标签页，需要注意的是，为了保证Tabs组件的正常工作，<span class='text-code'>name</span>属性是必须的，但是<span class='text-code'>selected</span>属性不是必须的。
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
            <h3>禁用状态</h3>
            <template v-slot:source>
                <y-tabs :selected="selected2">
                    <y-tabs-head>
                        <y-tabs-item name='0' disabled>周一（禁用）</y-tabs-item>
                        <y-tabs-item name='1'>周二</y-tabs-item>
                        <y-tabs-item name='2' disabled>周三（禁用）</y-tabs-item>
                        <y-tabs-item name='3'>周四</y-tabs-item>
                    </y-tabs-head>
                    <y-tabs-body>
                        <y-tabs-pane name='0'>语文</y-tabs-pane>
                        <y-tabs-pane name='1'>数学</y-tabs-pane>
                        <y-tabs-pane name='2'>英语</y-tabs-pane>
                        <y-tabs-pane name='3'>物理</y-tabs-pane>
                    </y-tabs-body>
                </y-tabs>
            </template>
            <template v-slot:description>
                <div>
                    Tabs组件中的<span class='text-code'>disabled</span>属性可以使标签页处于禁用状态，即不可被选中。
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
            <h3>before-skip方法</h3>
            <template v-slot:source>
                <y-tabs :selected="selected5">
                    <y-tabs-head>
                        <y-tabs-item name='0'>周一</y-tabs-item>
                        <y-tabs-item name='1' @before-skip="someOptions">周二（点击确定后跳转）</y-tabs-item>
                        <y-tabs-item name='2'>周三</y-tabs-item>
                        <y-tabs-item name='3'>周四</y-tabs-item>
                    </y-tabs-head>
                    <y-tabs-body>
                        <y-tabs-pane name='0'>语文</y-tabs-pane>
                        <y-tabs-pane name='1'>数学</y-tabs-pane>
                        <y-tabs-pane name='2'>英语</y-tabs-pane>
                        <y-tabs-pane name='3'>物理</y-tabs-pane>
                    </y-tabs-body>
                </y-tabs>
            </template>
            <template v-slot:description>
                <div>
                    使用<span class='text-code'>before-skip</span>方法可以在用户点击跳转到指定标签页之前进行一些操作。
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
            <h3>动态增减标签页</h3>
            <template v-slot:source>
                <y-tabs :selected="selected3" editable deleteable :edit='handleTabsEdit1'>
                    <y-tabs-head >
                        <y-tabs-item
                            :key="item.name"
                            v-for="item in editableTabs1"
                            :name="item.name"
                        >
                            {{item.title}}
                        </y-tabs-item>
                    </y-tabs-head>
                    <y-tabs-body>
                        <y-tabs-pane
                            :key="item.name"
                            v-for="item in editableTabs1"
                            :name="item.name"
                        >
                            {{item.content}}
                        </y-tabs-pane>    
                    </y-tabs-body>
                </y-tabs>
            </template>
            <template v-slot:description>
                <div>
                    Tabs中的<span class='text-code'>editable</span>属性决定标签页是否可增加，<span class='text-code'>deleteable</span>属性决定标签页是否可删除， 同时<span class='text-code'>edit</span>属性接受一个<span class='text-code'>Function类型</span>的参数，该参数中可定义增加标签页的标题和内容。
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
            <h3>自定义增加标签页触发器</h3>
            <template v-slot:source>
                <div class="tab-button">
                    <y-button @click="handleTabsEdit2" level='main' size='small' circle>增加tab</y-button>
                </div>       
                <y-tabs :selected="selected4" deleteable>
                    <y-tabs-head>
                        <y-tabs-item
                            :key="item.name"
                            v-for="item in editableTabs2"
                            :name="item.name"
                        >
                            {{item.title}}
                        </y-tabs-item>
                    </y-tabs-head>
                    <y-tabs-body>
                        <y-tabs-pane
                            :key="item.name"
                            v-for="item in editableTabs2"
                            :name="item.name"
                        >
                            {{item.content}}
                        </y-tabs-pane>
                    </y-tabs-body>
                </y-tabs>
            </template>
            <template v-slot:description>
                <div>
                    开发者可以自定义增加标签页触发器。
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
import DemoBlock from './DemoBlock'
import Button from '../lib/Button.vue'
import Tabs from '../lib/Tabs.vue'
import TabsHead from '../lib/TabsHead.vue'
import TabsBody from '../lib/TabsBody.vue'
import TabsItem from '../lib/TabsItem.vue'
import TabsPane from '../lib/TabsPane.vue'
import 'prismjs'
const prism = window.Prism
import 'prismjs/themes/prism.css'
export default {
    components: {
        'y-tabs': Tabs,
        'y-tabs-head': TabsHead,
        'y-tabs-body': TabsBody,
        'y-tabs-item': TabsItem,
        'y-tabs-pane': TabsPane,
        'y-button': Button,
        'demo-block': DemoBlock
    },
    data() {
      return {
        editableTabs1: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex1: 2,
        tabIndex2: 2,
        selected1: '0',
        selected2: '1',
        selected3: '1',
        selected4: '1',
        selected5: '0',
        prism: prism,
        code1:"<y-tabs :selected='selected'>\n    <y-tabs-head>\n        <y-tabs-item name='0'>周一</y-tabs-item>\n        <y-tabs-item name='1'>周二</y-tabs-item>\n        <y-tabs-item name='2'>周三</y-tabs-item>\n        <y-tabs-item name='3'>周四</y-tabs-item>\n    </y-tabs-head>\n    <y-tabs-body>\n        <y-tabs-pane name='0'>语文</y-tabs-pane>\n        <y-tabs-pane name='1'>数学</y-tabs-pane>\n        <y-tabs-pane name='2'>英语</y-tabs-pane>\n        <y-tabs-pane name='3'>物理</y-tabs-pane>\n    </y-tabs-body>\n</y-tabs>\n<script>\n    export default {\n        data(){\n            return {\n                selected: '0'\n            },\n        }\n    }\n</"+"script>",
        code2:"<y-tabs :selected='selected'>\n    <y-tabs-head>\n        <y-tabs-item name='0' disabled>周一（禁用）</y-tabs-item>\n        <y-tabs-item name='1'>周二</y-tabs-item>\n        <y-tabs-item name='2' disabled>周三（禁用）</y-tabs-item>\n        <y-tabs-item name='3'>周四</y-tabs-item>\n    </y-tabs-head>\n    <y-tabs-body>\n        <y-tabs-pane name='0'>语文</y-tabs-pane>\n        <y-tabs-pane name='1'>数学</y-tabs-pane>\n        <y-tabs-pane name='2'>英语</y-tabs-pane>\n        <y-tabs-pane name='3'>物理</y-tabs-pane>\n    </y-tabs-body>\n</y-tabs>\n<script>\n    export default {\n        data(){\n            return {\n                selected: '1'\n            },\n        }\n    }\n</"+"script>",
        code3:"<y-tabs :selected='selected'>\n    <y-tabs-head>\n        <y-tabs-item name='0'>周一</y-tabs-item>\n        <y-tabs-item name='1' @before-skip='someOptions'>周二（点击确定后跳转）</y-tabs-item>\n        <y-tabs-item name='2'>周三</y-tabs-item>\n        <y-tabs-item name='3'>周四</y-tabs-item>\n    </y-tabs-head>\n    <y-tabs-body>\n        <y-tabs-pane name='0'>语文</y-tabs-pane>\n        <y-tabs-pane name='1'>数学</y-tabs-pane>\n        <y-tabs-pane name='2'>英语</y-tabs-pane>\n        <y-tabs-pane name='3'>物理</y-tabs-pane>\n    </y-tabs-body>\n</y-tabs>\n<script>\n    export default {\n        data(){\n            return {\n                selected: '0'\n            },\n        },\n        methods: {\n            someOptions(){\n                alert('点击确定')\n            }            \n        }\n    }\n</"+"script>",
        code4:"<y-tabs :selected='selected' editable deleteable :edit='handleTabsEdit'>\n    <y-tabs-head>\n        <y-tabs-item :key='item.name' v-for='item in editableTabs' :name='item.name'>\n            {{item.title}}\n        </y-tabs-item>\n    </y-tabs-head>\n    <y-tabs-body>\n        <y-tabs-pane :key='item.name' v-for='item in editableTabs' :name='item.name'>\n            {{item.content}}\n        </y-tabs-pane>\n    </y-tabs-body>\n</y-tabs>\n<script>\n    export default {\n        data() { \n            return {\n                editableTabs: [{\n                    title: 'Tab 1',\n                    name: '1',\n                    content: 'Tab 1 content'\n                }, {\n                    title: 'Tab 2',\n                    name: '2',\n                    content: 'Tab 2 content'\n                }],\n                tabIndex: 2,\n                selected: '1'\n            }\n        },\n        methods: {\n            handleTabsEdit() {\n                let newTabName = ++this.tabIndex + '';\n                this.editableTabs.push({\n                    title: `New Tab ${newTabName}`,\n                    name: newTabName,\n                    content: `New Tab content ${newTabName}`\n                });\n            },\n        }\n    }\n</"+"script>",
        code5:"<y-button @click='handleTabsEdit' level='main' size='small' circle>增加tab</y-button>\n<y-tabs :selected='selected' deleteable>\n    <y-tabs-head>\n        <y-tabs-item :key='item.name' v-for='item in editableTabs' :name='item.name'>\n            {{item.title}}\n        </y-tabs-item>\n    </y-tabs-head>\n    <y-tabs-body>\n        <y-tabs-pane :key='item.name' v-for='item in editableTabs' :name='item.name'>\n            {{item.content}}\n        </y-tabs-pane>\n    </y-tabs-body>\n</y-tabs>\n<script>\n    export default {\n        data() { \n            return {\n                editableTabs: [{\n                    title: 'Tab 1',\n                    name: '1',\n                    content: 'Tab 1 content'\n                }, {\n                    title: 'Tab 2',\n                    name: '2',\n                    content: 'Tab 2 content'\n                }],\n                tabIndex: 2,\n                selected: '1'\n            }\n        },\n        methods: {\n            handleTabsEdit() {\n                let newTabName = ++this.tabIndex + '';\n                this.editableTabs.push({\n                    title: `New Tab ${newTabName}`,\n                    name: newTabName,\n                    content: `New Tab content ${newTabName}`\n                });\n            },\n        }\n    }\n</"+"script>"
      }
    },
    methods: {
      handleTabsEdit1() {
          let newTabName = ++this.tabIndex1 + '';
          this.editableTabs1.push({
            title: `New Tab ${newTabName}`,
            name: newTabName,
            content: `New Tab content ${newTabName}`
          });
      },
      handleTabsEdit2() {
          let newTabName = ++this.tabIndex2 + '';
          this.editableTabs2.push({
            title: `New Tab ${newTabName}`,
            name: newTabName,
            content: `New Tab content ${newTabName}`
          });
      },
      someOptions(){
          alert('点击确定')
      }
    }
}
</script>
<style lang="scss">
    .tab-button{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
    }
</style>