
class array_it{
index;
    constructor(arr) {
        this.index = 0;
        this.arr = arr;
    }
    hasNext(){
        return this.index < this.arr.length;
    }
    next(){
        if(this.hasNext()){
            return this.arr[this.index++];
        }
        console.log("No such element")
        return null;
    }
}
console.log("Bullshit")
arrayList = [1,2,4,5,67,7];
it = new array_it(arrayList);
while(it.hasNext()){
    console.log(it.next());
}