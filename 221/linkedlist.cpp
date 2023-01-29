template <typename T>
void List<T>::remove(int index)
{
    if (index < 0 || index >= size)
        throw std::out_of_range("Index out of range");

    if (index == 0)
    {
        // remove first node
        Node<T>* temp = head;
        head = head->next;
        temp->next = nullptr;
        delete temp;
    }
    else
    {
        // find the node before the one we want to remove
        Node<T>* prev = head;
        for (int i = 0; i < index - 1; i++)
            prev = prev->next;

        // remove the node at the specified index
        Node<T>* temp = prev->next;
        prev->next = temp->next;
        temp->next = nullptr;
        delete temp;
    }

    size--;
}

Explanation:

The above code implements the remove method for a templated doubly-linked list. The method takes an integer index as a parameter, which corresponds to the position of the node to be removed in the list.
If the index is out of range (i.e. less than 0 or greater than or equal to the size of the list), then the code throws an std::out_of_range exception.
Otherwise, if the index is 0 (i.e. the first node in the list is to be removed), then the head pointer is simply updated to point to the second node in the list. The memory associated with the first node is then freed.
If the index is not 0, then the code finds the node before the one to be removed (using a for loop) and updates the next pointer of that node to point to the node after the one to be removed. The memory associated with the node to be removed is then freed.
Finally, the size variable is decremented to reflect the fact that the list is now one node smaller.

void push(Node** head_ref, int new_data)
{
    /* 1. allocate node */
    Node* new_node = new Node();
 
    /* 2. put in the data */
    new_node->data = new_data;
 
    /* 3. Make next of new node as head
    and previous as NULL */
    new_node->next = (*head_ref);
    new_node->prev = NULL;
 
    /* 4. change prev of head node to new node */
    if ((*head_ref) != NULL)
        (*head_ref)->prev = new_node;
 
    /* 5. move the head to point to the new node */
    (*head_ref) = new_node;
}   