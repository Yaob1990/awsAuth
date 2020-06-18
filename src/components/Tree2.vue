<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" @click.stop="menuClick(item,true)" :class="{highlight:selectedName.indexOf(item.name)>-1}">
        {{item.name}}
        <div v-if="item.children && (selectedName.indexOf(item.name)>-1)">
          <ul class="childrenUl">
            <li
              v-for="(childrenItem,childrenIndex) in item.children"
              @click.stop="menuClick(childrenItem,false)" :class="{
              childrenLi:true,
              highlight:selectedName.indexOf(childrenItem.name)>-1}">{{childrenItem.name}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "Tree2",
    props:{
		  list:{
		    type:Array,
        default:()=>[]
      }
    },
    data(){
      return {
      selectedName:[]
      }
    },
    created() {
		  this.list.forEach((item,index)=>{
		    if(item.isOpen){
		      this.selectedName.push(item.name)
          if(item.children){
            item.children.forEach(childrenItem=>{
              if(childrenItem.isOpen){
                this.selectedName.push(childrenItem.name)
              }
            })
          }
        }
      })
    },
    methods:{
      menuClick(item,clear){
        console.log(item)
        let menu= item.name
        if(!clear){
          this.selectedName=  this.selectedName.slice(0,1)
        }else{
          this.selectedName=[]

        }
        this.selectedName.push(item.name)
        if(item.children && item.children.length){
          this.selectedName.push(item.children[0].name)
          menu= item.children[0].name
        }
        this.$emit("setMenu",menu)
      }
    }
	}
</script>

<style scoped lang="scss">
  .childrenLi{
    color: #2c3e50;
    line-height: 15px;
  }
.highlight{
  color: #be875d;
}
  li{
    list-style-type: none;
    font-size: 15px;
    line-height: 30px;
    cursor: pointer;
  }
  .childrenUl{
    padding-inline-start: 0;
    margin-left: 20px;
    border-left: 1px solid #be875d;
    padding: 0 0 0 10px;
    li:nth-child(n+2){
      margin-top: 10px;
    }
  }
</style>
