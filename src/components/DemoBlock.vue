<template>
    <div>
        <div class="title">
            <slot></slot>
        </div>
        <div class='demo-block'>            
            <div class='source'>
                <slot name='source'></slot>
            </div>
            <div class="meta">
                <div  class="description">
                    <slot name='description'></slot>
                </div>
                <div  class="code">
                    <slot name='code'></slot>
                </div>           
            </div>
        </div>
    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss">
.title{
    padding: 55px 0 20px 0px;
}
.demo-block{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    >.source{
        padding: 20px;
        margin: 10px;
        border-bottom: 1px solid #ebebeb;
        border:1px solid #ebebeb;
        background-color: #FFFFFF;
    }
    >.meta{
        >.description{
            margin: 10px;
            border:1px solid #ebebeb;
            padding: 20px;
            background-color: #FAF9DE;
            &span{
                font: blue;
            }
        }
        >.code{
            padding: 20px;
            margin: 10px;
            border:1px solid #ebebeb;
            background-color: #CCE8CF;
        }
    }
}
</style>