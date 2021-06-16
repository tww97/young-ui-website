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
    // margin-top: 55px;
    // margin-bottom: 20px;
    padding: 55px 0 20px 0px;
}
.demo-block{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    // width: 868px;
    // height: 599px;
    >.source{
        // display: flex;
        // justify-content: flex-start;
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
            // font-size: 12px;
            // height: 200px;
            // background: #282c34;
            padding: 20px;
            margin: 10px;
            border:1px solid #ebebeb;
            background-color: #CCE8CF;
        }
    }
}
</style>