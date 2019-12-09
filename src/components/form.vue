<template>
	<div>
		<el-form :label-width="labelWidth" :rules="rules" :model="data" ref="forms">
			<template v-for="(value,key,index) in label" >			
				<el-form-item :label="value.title" :key="index" :prop = "value.prop ? key : ''">	
					<!--日期-->
					<template v-if="value.type == 'date'">
						<el-date-picker v-model="data[key]" type="date" style="width: 100%;" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
					</template>
					<!--input-->
					<template v-else>
						<el-input v-model="data[key]" :type="value.type" :readonly="value.readonly" show-password></el-input>
					</template>
				</el-form-item>				
			</template>
			<el-form-item>
				<el-button type="primary" plain @click="submitForm('forms')">{{submitName}}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name:'Form',
		data(){
			return {
				
			}
		},
		props:["rules","data","label","labelWidth","submitName"],
		methods:{
			submitForm(n){
				this.$emit('submitForm',this.$refs[n])
			}
		},
		mounted(){
//			console.log(this.data)
//			console.log(this.labelWidth)
		},
	}
</script>

<style scoped>

</style>