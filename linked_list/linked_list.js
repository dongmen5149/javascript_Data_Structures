class Node {
    constructor(data, next = null) {
        //data와 next를 넣고 next의 디폴트는 null로 지정 왜냐하면 linkedlist의 tail(마지막은) null로 끝나기때문
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null //처음에 데이터가 없다면 head는 null이다.
        this.size = 0;
    }

    // Insert first node - 첫번째 삽입
    insertFirst(data) {
        this.head = new Node(data, this.head)  //head에 새로운 node가 들어가고 기존의 해드는 next로 밀려난다.
        this.size++;
    }

    // Insert last node - 마지막 삽입
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) { //this.head에 next가 있다면 즉, next가 null이아니라면
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }
    // Insert at index - 중간 삽입
    insertAt(data, index) {
        // If index is out of range ~ 인덱스가 size 범위 넘어서면 아무것도 리턴 하지 않는다.
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            //즉, index 0에 삽입시 해당 노드를 넣고 다 한칸식 뒤로 미룸
            this.head = new Node(data, this.head)
            this.size++;
            return;
        }
        const node = new Node(data);
        let current, previous;

        // Set current first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; //node before index
            count++;
            current = current.next
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head; // current는 현재 첫번째 노드임
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // Clear list ~ 메모리자체에는 데이터가 남아있겠지만 보여주기 위해서 func 만들었다.
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data ~ data값만 따로
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 1)

linkedList.removeAt(2)

linkedList.printListData();

linkedList.getAt(2);

//linkedList.clearList();

console.log(linkedList)


