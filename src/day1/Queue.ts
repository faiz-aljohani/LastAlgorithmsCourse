type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        let itemNode: Node<T> = { value: item };
        if (this.head === undefined) {
            this.head = itemNode;
        }
        if (this.length >= 1 && this.tail) {
            this.tail.next = itemNode;
        }
        this.tail = itemNode;
        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        let item = this.head.value;
        if (this.length > 1) {
            this.head = this.head.next;
            this.length--;
        } else if (this.length == 1) {
            let item = this.head.value;
            this.head = this.tail = undefined;
            this.length--;
        }
        return item;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
