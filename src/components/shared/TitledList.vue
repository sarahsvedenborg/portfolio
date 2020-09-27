<template>
    <div class="titledList" :class="{'lg-6': horizontal}">
        <h3 class="subtitle title-small">{{list.heading}}</h3>
        <ul>
            <li v-for="(item,i) in list.items" :key="i">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Object
        },
        horizontal: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style scoped>
.narrow{
    width: 40%;
}
.titledList{
    text-align: left;
} 
ul{
     padding-left: 15px;
}
li{
    list-style-type: square;
}
</style>