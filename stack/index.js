//pop
//push
//peek 返回栈顶
//isEmpty
//clear
//size
//toString

class Stack {

    #items = [];
    pop(){
            return this.#items.pop()
    }
    push(data){
        this.#items.push(data)

    }
    peek(){
        return this.#items[this.items.length - 1]

    }
    isEmpty(){
        return this.#items.length === 0
    }
    toString(){
        return this.#items.join('')
    }
}


function  toBinary(item){
    const res = new Stack()
    let data = item
    let result = ''
    while(data>0){
        res.push(item % 2)
        data = Math.floor(item/2)
    }
    while(!res.isEmpty()){
         result += res.pop()
    }
    return result
    // return result
}

