//destructor:
~ArrayList() {
    delete[] array;
    //^^ do this when multiple items (array, vector) need to be allocated
    delete array;
    //^^ do this when a single item needs to be allocated
}

//copy constructor: you copy values from a variable onto a new variable
//always need to declare const to restrict access to modify any values object other
//all it can do is look at the values of object other and copy those values over
//copies values from other to the new instance of the object
ArrayList(const ArrayList& other): array(nullptr), sz(other.sz), capacity(other.capacity) {
    array = new Object[capacity];
    for (size_t i =  0; i < sz; i++) {
        array[i] = other.array[i];
    }   
    //deep copy part ^^
    //note: DONT NEED RETURN STATEMENT
}

//copy assignment operator
//deallocate member objects and copy new data
//deep copy
//declare as a return type of *classname here*
//for when youve already decleared multiple instances of object, but want to copy one objects values to another
ArrayList& operator=(const ArrayList& other){
    if (this != &other){
        delete [] array;
        sz = other.sz;
        capacity = other.capacity;
        array = new Object[capacity];
        for (size_t i =  0; i < sz; i++) {
        array[i] = other.array[i];
        }  
        return *this;

    }
}
//pointer: holds address to block of memory. can be reassigned. need to dereference with * to get the value.
//reference: "alias" to an actual variable. cannot be reassigned

//ex
int &b = a;
int c = new int(10);
a=15;
//b will be value of a when printed. test to make sure