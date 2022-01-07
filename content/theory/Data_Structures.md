---
title: Data Structures
bookCollapseSection: true
weight: 720
---
<!-- vim-markdown-toc GFM -->

* [Linked List](#linked-list)
	* [History](#history)
* [Queues](#queues)
* [Dynamic Array](#dynamic-array)
* [Skip List](#skip-list)
* [Binary Tree](#binary-tree)
	* [BSP Tree](#bsp-tree)
	* [Binary Indexed Tree](#binary-indexed-tree)
* [Heap](#heap)
* [Associative Array](#associative-array)
* [Bit Array](#bit-array)
* [Trie](#trie)
* [Record](#record)
* [Union](#union)
* [Set](#set)

<!-- vim-markdown-toc -->

----------

## Linked List

A linked list is a collection of elements whose order is not given by the physical placement in memory but each element points to the next.

Each element, or node, contains both data and a reference to the next node in the sequence. Inserting and removing elements is quicker than with arrays: there's no need to rearrange the whole structure each time but:

+ a linked list use more memory (data + reference)
+ nodes must be read in order
+ longer access time as nodes are not contiguosly stored

### History

First developed in 1955 for the IPL language. In 1958 linked lists were implemented in Lisp. The Flex family of file systems used doubly linked lists for their file structure, as the IBM's T53/360 operating system.

Versions:

* Singly Linked List
	* a singly linked list contains nodes which have a data field and a next 
	  field, pointing to the next node in the list
* Doubly Linked List
	* a doubly linked list contains, besides the next field and the data field, 
	  another link field that points to the **previous** node in the list. This 
	  is called the _forward_ or _backward_ or _previous_ field
* Multiply Linked List
	* a multiply linked list is like a doubly linked list, only with multiple 
	  number of fields pointing in different directions. Actually a doubly 
	  linked list is just a special case of a multiply linked list
* Circular Linked List
	* in a circular linked list the last node, instead of being _null_, is a 
	  pointer to the head of the list, making it circular. It is also called 
	  _open_ or _linear_ list
* Unrolled Linked List
	* a variation of a linked list in which each node stores multiple elements, 
	  in the form of arrays
* Association List
	* an early implementation of an associative array, common in Lisp and later 
	  functional languages (Scheme, OCaml, Haskell). In Lisp is also called 
	  _alist_
* XOR Linked List
	* an implementation of a doubly linked list that use _bitwise XOR_ 
	  operation to store more efficiently the _forward_ and _backward_ field. 
	  It stores both in a single field by XORing the 2 fields' addresses. To 
	  parse the list then it's needed also the address of the 2 consecutive 
	  elements other than the XORed field of the current one.
* VList
	* a singly linked list of arrays whose sizes decreases geometrically, from 
	  the first to the last. Usually the first array contains roughly half the 
	  total number of elements.

A **Sentinel Node** may also be implemented as the first or last node instead 
of using _null_ values, to speed up operations (removing the need for an 
expensive branch operation to check for _null_). It does not hold any data.

**Empty lists** are without data fields. Lists with only sentinel nodes are also considered empty.

**Hash Linking** are two arrays, one with the data and another with the links, both with the same indices.

A **Stack** is a sort of a singly linked list which allows pop and push operations only on the first node, the top of the stack. Historically they have been invented in Munich and independently in Australia around 1954-1955. Stacks are commonly implemented through arrays and linked lists. They are LIFO, last in first out, data structure.

## Queues

Similarly to stacks, queues are a collection of data in which addition is made at the back only and removal at the front only. These are respectively known as enqueque and dequeue operations. Doubly or singly linked lists are commonly used to implement queues.

**Deques** or double-ended queues are queues in which elements can be added and removed both on front and back of the queue. Also known as head-tail linked list.

**Priority Queues** are standard queues whose values are pre-ordered for priority, with the top value being the highest priority one.

## Dynamic Array

Also called _growable array_, _resizable array_, _dynamic table_, _mutable 
array_ or _array list_ is a data structure that is made of 2 parts of a fixed 
size array: the first stores the actual elements and the second is reserved. 
This makes very fast to add elements to the array afterwards, up until the total 
_capacity_ of the array (_size_ is called the size of the allocated elements).

Variants:

* Gap Buffer
	* a dynamic array type that allows efficient insertion and deletion 
	  operations near the same location
* Hashed Array Tree (HAT)
	* an hashed array tree has a top-level array where each element contains a 
	  power of two number of leaf arrays. All leaf arrays are the same size of 
	  the top level array (the _directory_). It's similar to a hash table. It 
	  can hold at most m² elements, where `m` is the size of the _directory_
* Sparse Array
	* an array in which most of the elements have the same value (the _default 
	  value_, usually 0 for array of numbers and `null` for array of objects)
* Multimap
    * a generalization of a map or array in which more than 1 value may be 
	  associated and returned for a single key. Implementations are: `container` 
	  (C++), `MultiMap` (Java)
* Suffix Array
    * a sorted array of all suffixes of a string. Also known as _PAT array_
* FM-index
	* a suffix array that undergoes the [Burrows-Wheeler 
	  transform](http://en.wikipedia.org/wiki/Burrows-Wheeler_transform) of the 
	  input text. It is used to efficiently find the occurrences of a pattern 
	  within the text
* Judy Array
    * a high performance, low memory usage implementation of an associative 
	  array. Judy arrays may be sparse, containing large ranges of unassigned 
	  indices. Similar to a highly optimised 256-ary trie

Implementations:

* `std::vector` (C++), `ArrayList` (Java and .Net), `List<>` (.Net 2.0), 
  `OrderedCollection` (SmallTalk), `list` (Python)*

## Skip List

![](http://igoro.com/wordpress/wp-content/uploads/2008/07/multilist.png "Skip 
List example")

Basically, a skip list is a normal linked list that has multiple levels, 
themselves linked lists. The bottom level is a linked list linking all elements, 
one after another; then the subsequent levels may link only the odd elements, 
jumping one or two at the time and so on up until the topmost level that usually 
links only the head to the middle and then the tail. They _skip_ elements, thus 
the name.

## Binary Tree

A binary tree is a data structure in which each node has at most 2 child nodes. 
Nodes with children are called _parent nodes_ and there may exists a _root_ 
node, the origin of all nodes. Definitions: 

* **root** is the top node
* **child** is a node directly connected to another
* **parent** is an immediate ancestor of a node
* **siblings** are nodes that share the same parent node
* **neighbor** is a parent or child node of another
* **descendant** is a node reachable by proceeding from parent to child
* **ancestor** is a node reachable by proceeding from child to parent. Also defined as a node `n` of node `q` if it exists on the path from root to node `q`. It is then a **descendant** of `n`
* **leaf**, or external, is a node with no children
* **branch**, or internal, is a node with at least one child
* **edge** the connection between one node and another
* **path** a sequence of nodes and edges connecting a node with a descendant
* **distance** the number of edges on the shortest path between two nodes
* **depth** of a node is the length of the path from the root to the node. 
  Sometimes called _level_
* **depth** of a tree is the length of the path from the root to the deepest 
  node. Sometimes called _height_
* **level** is the number of edges between a node and root + 1
* **height** is the number of edges on the longest path between a node and a descendant leaf
* **width** the number of nodes in a level
* **breadth** the number of leaves
* the **height of tree** is the height of root
* **size** of a node is the number of descendants it has, itself included
* **in-degree** of a node is the number of nodes arriving at that node
* **out-degree** of a node is the number of nodes leaving that node
* **subtree** is a node in a tree with all its descendants

Variants:

* Rooted Binary Tree
    * a tree with a root node in which each leaf node has at most 2 children
* Full Binary Tree
    * a tree in which every node, not only the leaves, has 2 children. More 
	  precisaly, every node has either 0 or 2 children. Also called _proper 
	  binary tree_, _2-tree_ or _strictly binary tree_
* Perfect Binary Tree
    * a tree in which all leaves are at the same depth or same level and in 
	  which every parent has exactly 2 children
* Complete Binary Tree
    * a tree in which every level, except possibly the last, is completely 
	  filled and all nodes are as far left as possible
* Balanced Binary Tree
    * a tree in which the depth of the 2 subtrees of every node differ by 1 or 
	  less; more generally, it is a binary tree where no leaf is much farther 
	  away from the root than any other leaf.
* Degenerate Tree
    * a tree where each parent node has only 1 child node. Basically not, 
	  performance-wise, a linked list
* Dancing Tree
    * a self-balancing tree that balances its nodes only when flushing data to 
	  the disk, to gain performance by delaying optimization. Used in the 
	  Reiser4 filesystem
* B-tree
    * a tree that's not limited to 2 child nodes. Vastly used in databases and 
	  filesystems
* B+-tree
    * a b-tree that stores copies of the keys in the internal nodes. Keys and 
	  records are normally stored in leaves. A leaf node may include a pointer 
	  to the next leaf node
* B\*-tree
    * the b\*-tree balances more neighboring internal nodes to keep them more 
	  densely packed. It requires non-root nodes to be at least 2/3 full instead 
	  than 1/2. To achieve this, instead of splitting up a node when it gets 
	  full, its keys are shared with a node next to it. Only when both nodes are 
	  full they get split up in a third node
* B+tree
    * as a b-tree but with usually large number of nodes and in which all nodes 
	  contain only keys (not pairs) and to which an additional level is added at 
	  the bottom with linked leaves
* Red-Black Tree
    * a version of a balanced binary tree where each node is "painted" in two 
	  distinct colours, tipically red and black, in such a way that the 
	  resulting tree won't be significantly unbalanced. Tracking the colour of 
	  every node it's fast because it only requires 1 bit (just 2 colours). The 
	  root node is usually considered black, all leaves and the children of the 
	  same node are black too, the rest is red
* AA Tree
    * named after its inventor, Arne Andersson, is a variant of a red-black tree 
	  that allows the red nodes to be added only in the right direction. No red 
	  node can thus be a left sub-child
* AVL Tree
    * the first implementation of a balancing binary tree, named after its 
	  inventors (G.M.Adelson-Velskii and E.M.Landis)
* Splay Tree
    * a self balancing tree that adds an operation, _splaying_, that rearranges 
	  the tree itself by putting a specific element as the root, making very 
	  quick to access it again
* 2-3 Tree
    * a tree where every node with children has either 2 children and 1 data 
	  element or 3 children and 2 data elements. Nodes on the outside of of the 
	  tree, _leaf nodes_, have no children and 1 or 2 data elements. It's 
	  similar to the AA tree
* 2-3-4 Tree
    * a tree commonly used to implement dictionaries. Numbers mean a tree where 
	  every node with 2 children has either 2 children and 1 data element or 3 
	  children and 2 data elements or 4 children and 3 data elements. Also 
	  called _2-4 tree_
* Cartesian Tree
    * a binary tree derived from a sequence of numbers. Each number has a node 
	  in the tree, with left nodes coming before the root in the sequence while 
	  the right subtree consists of later numbers. The tree has the _heap 
	  property_, the parent of any non-root node has a smaller value than the 
	  node itself
* Rope
    * a binary tree used to store strings. Leaves contain a short string; each 
	  node has weight equal to the length of the string plus the sum of all the 
	  weight in its left subtree. Thus a node with 2 children divides the whole 
	  string in 2 parts: the left part stores the first part of the string, the 
	  right part stores the second part and its weight is the sum of the left 
	  child's weight and the length of its contained string. Also called _cord_
* Threaded Binary Tree
    * a binary tree that has all the right child pointers that would be normally 
	  be null point to the successor of the node and all the left child 
	  pointers, that would too be normally null, point to the predecessor of the 
	  node
* Ternary Tree
    * a tree in which each node has at most 3 child nodes, usually called 
	  _left_, _mid_ and _right_

### BSP Tree

+ [Paper on BSP (Binary Spacing Partitioning)](https://pdfs.semanticscholar.org/90e4/c4a65b4b04d9e2374e5753659c102de4c0eb.pdf)

### Binary Indexed Tree

A complete and clear answer on [SO](https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a) about the intuition behind a Binary Indexed Tree.

## Heap

a tree that satisfies the _heap property_: if `A` is a parent node of `B`, then 
`key(A)` is ordered with respect to `key(B)`. The same applies across the heap. 
Thus, either the keys of parent nodes are always greater than or equal to those 
of the children and the highest key is the root (this kind of heap is called 
_max heap_) or the keys of the parent node are less or equal to those of the 
children (_min heap_)

Variants:

* Beap
    * a data structure where every node has 2 parents and 2 children, unless it 
	  is the first or on the last level. Also known as _bi-parental heap_
* Binary Heap
    * very similar to a binary tree but with two additional constraints: it is a 
	  complete binary tree, thus all levels are fully filled except maybe the 
	  last, and each node is greater or equal to each of its children, making 
	  thus a heap and not just a tree
* Fibonacci Heap
    * a heap consisting of a collection of trees, even separated, satisfying the 
	  _minimum-heap property_ (every child is always greater or equal to the 
	  parent)
* Leftist Heap
    * a variant of a binary heap. Every node has an _s-value_ which is the 
	  distance to the nearest leaf. Unlike binary heaps, a leftist heap (also 
	  called _leftist tree_) is very unbalanced and mantained so the right 
	  descendant of each node has the lower s-value
* 2-3 Heap
    * a heap similar to the 2-3 tree
* d-ary Heap
    * a generalization of a binary heap in which the nodes have `d` children 
	  instead of 2. Thus a binary heap is a _2-heap_. Also simply called a 
	  _d-heap_
* Skew Heap
    * a heap similar to a binary heap but without structural constraints. Only 
	  two conditions must be satisfied: the general heap order must be enforced 
	  and every operation on two skew heaps must be done using a special _skew 
	  heap merge_

Implementations:

* `make_heap`, `push_heap` and `pop_heap` (C++), `java.util.PriorityQueue<E>` 
  (Java), `heapq` (Python), `SplMaxHeap` and `SplMinHeap` (Php), `Heap` (Perl), 
  `heap` (Go)*

## Associative Array

Also called _map_ or _dictionary_ is a collection of pairs (key, value) such 
that each keys appear at most once in the collection

Variants:

* Hash Table
    * an associative array that uses a _hash function_ to compute an _index_ into 
	  an array of _buckets_ or _slots_ from which the correct value can be 
	  found. Hash collisions, different keys that are assigned by the function 
	  to the same bucket, can happen

Implementations:

* `dictionary` (Smalltalk, Objective-C, .Net, Python), `hash` (Perl, Ruby), 
  `map` (C++, Java, Go, Clojure, Scala), `hash table` (Common Lisp, PowerShell), 
  `table` (Lua)

## Bit Array

An array that stores bits, as in 0 or 1 values. Known also as _bitmap_, 
_bitset_, _bit string_, _bit field_ or _bit vector_

Implementations:

* `bitfield` (C), `BitSet` (Java), `bitset` (C++), `BitArray` (.Net) 

## Trie

Also called _digital tree_ or _prefix tree_, the trie is used to store an 
associative array where keys are usually strings. Differently from a binary 
search tree, no node in the tree stores the key associated with that node; its 
position in the tree defines the key with which it is associated. All the 
descendants of a node have a common prefix of the string associated with that 
node, and the root is associated with an empty string. Values are associated 
with leaves, not every node.

Variations:

* Radix Tree
    * a space-optimized trie where each node with only one child is merged with 
	  its child, resulting in every internal node having 2 children. Also called 
	  _patricia trie_, _radix trie or _compact prefix tree_
* Suffix Tree
    * a tree that presents the suffixes of a given string in a way that allows 
	  fast operations on it. Its edges are labeled with strings, such that each 
	  suffix of the string corresponds to exactly one path from the tree's root 
	  to the leaf. The suffix tree is like a radix tree for the suffixes of a 
	  string
* B-Trie
    * a trie that can store and retrieve variable-length strings efficiently on 
	  disk

## Record

A value that contains other values, generally in fixed number, order and indexed
by names. Record elements are called _fields_ or _members_. Unlike arrays,
records have fixed number of fields, all with a name, and with different types 
among them. Also called _tuple_, _struct_ or _compound data_

## Union

Very similar to records, an union may have multiple elements but only one at the 
time can have a value as unions' elements are stored at a single spot in memory 
and thus setting any value will overwrite all other elements' values. As an 
advantage, they are clearly more compact than records.

Variants:

* Tagged Union
	* an union that has a tag field that signals which type is in use and which 
	  field is active. Also known as _variant_, _variant record_, 
	  _discriminated union_, _disjoint union_ or _sum type_

## Set

A structure that can store any arbitrary value, in no particular order, and no 
repeated value. It can be _static_ or _frozen_, not modifiable after the 
creation, or _dynamic_ or _mutable_, that are modifiables.

Implementations:

* `Set` (Java), `NSSet` and similar classes (Objective-C), `set` and `frozenset` 
  (Python), `HashSet` and `SortedSet` (.Net), `set` (Ruby), `Data.Set` (Haskell)

Variations:

* Multiset
	* a generalization of a set, allowing repeated/duplicates values in either 
	  identical or different objects storing the same value. Also known as 
	  _bag_
