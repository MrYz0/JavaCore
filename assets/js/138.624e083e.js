(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{442:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"arraylist-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-简介"}},[s._v("#")]),s._v(" ArrayList 简介")]),s._v(" "),a("p",[a("code",[s._v("ArrayList")]),s._v("的底层是数组队列，相当于动态数组。与Java中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用"),a("code",[s._v("ensureCapacity")]),s._v("操作来增加"),a("code",[s._v("ArrayList")]),s._v("实例的容量。这可以减少递增式再分配的数量。")]),s._v(" "),a("p",[a("code",[s._v("ArrayList")]),s._v("继承于"),a("code",[s._v("AbstractList")]),s._v("，实现了"),a("code",[s._v("List")]),s._v("、"),a("code",[s._v("RandomAccess")]),s._v("、"),a("code",[s._v("Cloneable")]),s._v("、"),a("code",[s._v("java.io.Serializable")]),s._v("这些接口。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RandomAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("RandomAccess")]),s._v("是一个标志接口，表明实现这个接口的List结合是支持"),a("strong",[s._v("快速随机访问")]),s._v("得。在"),a("code",[s._v("ArrayList")]),s._v("中，我们既可以通过元素的序号快速获取元素对象，这就是快速随机访问。")]),s._v(" "),a("li",[a("code",[s._v("ArrayList")]),s._v("实现了**"),a("code",[s._v("Cloneable")]),s._v("接口**，即覆盖了函数"),a("code",[s._v("clone()")]),s._v(",能被克隆。")]),s._v(" "),a("li",[a("code",[s._v("ArrayList")]),s._v("实现了"),a("code",[s._v("java.io.Serializable")]),s._v("接口，这意味着"),a("code",[s._v("ArrayList")]),s._v("支持序列化，能通过序列化去传输。")])]),s._v(" "),a("h2",{attrs:{id:"arraylist和vector的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist和vector的区别"}},[s._v("#")]),s._v(" ArrayList和Vector的区别？")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("ArrayList")]),s._v("是"),a("code",[s._v("List")]),s._v("的主要实现类，底层使用"),a("code",[s._v("Object[]")]),s._v("存储，适用于频繁的查找工作，线程不安全；")]),s._v(" "),a("li",[a("code",[s._v("Vector")]),s._v("是"),a("code",[s._v("List")]),s._v("的古老实现类，底层使用"),a("code",[s._v("Object[]")]),s._v("存储，线程安全的。")])]),s._v(" "),a("h2",{attrs:{id:"arraylist与linkedlist区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arraylist与linkedlist区别"}},[s._v("#")]),s._v(" ArrayList与LinkedList区别？")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("是否保证线程安全：")]),a("code",[s._v("ArrayList")]),s._v("和"),a("code",[s._v("LinkedList")]),s._v("都是不同步的，也就是不保证线程安全；")]),s._v(" "),a("li",[a("strong",[s._v("底层数据结构：")]),a("code",[s._v("ArrayList")]),s._v("底层使用的是**"),a("code",[s._v("Object")]),s._v("数组**；"),a("code",[s._v("LinkedList")]),s._v("底层使用的是"),a("strong",[s._v("双向链表")]),s._v("数据结构（JDK1.6之前为循环链表，JDK1.7取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）")]),s._v(" "),a("li",[s._v("**插入和删除是否受元素位置的影响：**①"),a("code",[s._v("ArrayList")]),s._v(" "),a("strong",[s._v("采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。")]),s._v(" 比如：执行"),a("code",[s._v("add(E e)")]),s._v("方法的时候，"),a("code",[s._v("ArrayList")]),s._v("会默认在指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置i插入和删除元素的话("),a("code",[s._v("add(int index,E element)")]),s._v(")时间复杂度就为0(n-i)。因为在进行上诉才做的时候集合中第i和第i个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。②"),a("code",[s._v("LinkedList")]),s._v(" **采用链表存储，所以对于"),a("code",[s._v("add(E e)")]),s._v("方法插入，删除元素时间复杂度不受元素位置的影响，近似O(1)**l")])])])}),[],!1,null,null,null);a.default=r.exports}}]);