<template>
    <div>
        <h1>安装</h1>
        <p class="p-install">打开终端运行下列命令：</p>
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
            code1:"npm install young-ui",
            prism: prism
        }
    }
}
</script>
