var indextpl=require("./index.string");
import commonutil from "../utils/commonutils"
console.log(indextpl)
commonutil.render(indextpl)

var Vue=require("../libs/vue.js")


new Vue({
	el:"#box",
	data:{
		message:10
	}
	
})
