<template>
    <div class="layout">
      <h1>
        <slot name="title">{{menu}}</slot>
      </h1>
      <div>
        <slot name="detail">no data</slot>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ContentLayOut",
    props:{
		  menu:{
		    type:String,
        default:''
      }
    }
	}
</script>

<style scoped>
.layout{
  min-width: 550px;
}
</style>
