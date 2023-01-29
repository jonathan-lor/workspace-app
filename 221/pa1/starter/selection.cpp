#include <stdexcept>
#include <iostream>
#include "selection.h"
//using namespace N;
using namespace std;



int select(size_t k, int* list, size_t N) {
    // TODO(student): solve the selection problem


    //size_t index_min;
    int temp;
    //temp var for sorting list

    if(N < k) {
        return -1;
        //k is out of bounds
    }


    //sorting list lowest to highest w/ selection sort
    for(size_t i = 0; i < N - 1; i++) {

        for(size_t j = 0; j < N - 1 - i; j++) {


            if (list[j+1] < list[j]) {
                temp = list[j + 1];
                list[j + 1] = list[j];
                list[j] = temp;

            }

        }

    }

    
    //returning value
    return list[N-k];

}
