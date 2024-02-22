Array.prototype.fun = function(){

    let index = 0;
    let arr = this;
    return {
        HasNext:function (){
            return index < arr.length;

        },
        next:function (){
            if(this.HasNext()) return arr[index++];
            console.log("No such element");
        }

    }


};

array = [1,3,4,6,7];
it = array.fun();
while (it.HasNext()){
    console.log(it.next());
}
