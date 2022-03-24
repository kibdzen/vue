const App = {
    data(){
        return{
            placeholderstring:'введите название заметки',
            title: 'список заметок',
            inputValue:'',
            notes:["заметка1","заметка2","zametka3"]
            
        }
    },
    methods:{
        
        addNewNote(){
            if (this.inputValue !==''){
            this.notes.push(this.inputValue)
            }
        },
        destroy(idx){
            this.notes.splice(idx,1)
        },
        inputKeyPress(event){
            if (event.key === 'Enter'){
                this.addNewNote()
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        }
    },
    computed:{
        doubleCountComputed(){
            return this.notes.length *2
        }
    },watch:{
        inputValue(value){
            console.log('inputvalue changed',value)
            if(value.length>10){
                this.inputValue =""
            }
        }
       
    }

}
// const app = Vue.createApp(App)
// app.mount('#app')




getUser()

Vue.createApp(App).mount('#app')
