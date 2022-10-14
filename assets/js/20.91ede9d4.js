(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{332:function(t,a,r){"use strict";r.r(a);var e=r(6),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("很多人分在学习数据库时都是孤立的学习知识点，这样很难将所有知识点串起来深入理解；强烈推荐你学习两篇文章："),a("a",{attrs:{href:"https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Architecture of a Database System  (opens new window)"),a("OutboundLink")],1),t._v("以及"),a("a",{attrs:{href:"http://coding-geek.com/how-databases-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("How does a relational database work  (opens new window)"),a("OutboundLink")],1),t._v("；本文主要在第二篇基础上翻译并梳理，如果你英文不好的话，可以通过本文帮助你构筑数据库体系的基础。再啰嗦下，"),a("strong",[t._v("这篇文章关注的不是知识点，而是知识点之间的关联")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"本文知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本文知识点"}},[t._v("#")]),t._v(" 本文知识点")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220829181241322.png",alt:"image-20220829181241322"}})]),t._v(" "),a("h2",{attrs:{id:"从数据结构说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从数据结构说起"}},[t._v("#")]),t._v(" 从数据结构说起")]),t._v(" "),a("h3",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("blockquote",[a("p",[t._v("对于数据库而言，重要的不是数据量，而是当数据量增加时运算如何增加。")])]),t._v(" "),a("p",[t._v("时间复杂度用来检验某个算法处理一定量的数据要花多长时间，时间复杂度不会给出确切的运算次数，但是给出的是一种理念。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220829181325449.png",alt:"image-20220829181325449"}})]),t._v(" "),a("ul",[a("li",[t._v("绿：O(1)或者叫常数阶复杂度，保持为常数（不要人家就不会叫常数阶复杂度了）。")]),t._v(" "),a("li",[t._v("红：O(log(n))对数阶复杂度，即使在十亿数据量时也很低。")]),t._v(" "),a("li",[t._v("粉：最糟糕的复杂度是O(n^2)，平方阶复杂度，运算数快速膨胀。")]),t._v(" "),a("li",[t._v("黑和蓝：另外两种复杂度（的运算也是）快速增长。")])]),t._v(" "),a("p",[t._v("如果要处理2000条元素：")]),t._v(" "),a("ul",[a("li",[t._v("O(1) 算法会消耗 1 次运算")]),t._v(" "),a("li",[t._v("O(log(n)) 算法会消耗 7 次运算")]),t._v(" "),a("li",[t._v("O(n) 算法会消耗 2000 次运算")]),t._v(" "),a("li",[t._v("O(n*log(n)) 算法会消耗 14,000 次运算")]),t._v(" "),a("li",[t._v("O(n^2) 算法会消耗 4,000,000 次运算")])]),t._v(" "),a("h3",{attrs:{id:"归并排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[t._v("#")]),t._v(" 归并排序")]),t._v(" "),a("p",[a("strong",[t._v("为什么是归并排序？")])]),t._v(" "),a("ul",[a("li",[t._v("你可以更改为算法，以便于节省内存空间，方法是不创建新的序列的而是直接修改输入序列。注：这种算法叫【"),a("strong",[t._v("原地算法")]),t._v("】")]),t._v(" "),a("li",[t._v("你可以更改为算法，以便于同时使用磁盘空间和少量内存而避免巨量磁盘I/O。方法是只向内存中加载当前处理的部分。在仅仅1--MB的内存缓冲区内排序一个几个GB的表时，这是个很重要的技巧。注：这种算法叫【"),a("strong",[t._v("外部排序")]),t._v("】。")]),t._v(" "),a("li",[t._v("你可以更改为算法，以便于在多处理器/多线程/复服务器上运行。比如，分布式合并排序是Hadoop（那个著名的大数据库框架）的关键组件之一。")])]),t._v(" "),a("h3",{attrs:{id:"二叉搜索树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树"}},[t._v("#")]),t._v(" 二叉搜索树")]),t._v(" "),a("blockquote",[a("p",[t._v("数据库中查询的时间复杂度，使我们无法使用矩阵，转而使用二叉搜素树（BST），具体请参考："),a("a",{attrs:{href:"https://pdai.tech/md/algorithm/alg-basic-tree-search.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("树 - 二叉搜索树(BST)"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("二叉搜索树只需log(N)次运算，而如果你直接使用阵列则需要N次运算")])]),t._v(" "),a("h3",{attrs:{id:"b-树索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树索引"}},[t._v("#")]),t._v(" B+树索引")]),t._v(" "),a("blockquote",[a("p",[t._v("查找一个特定值这个树挺好用，但是当你需要"),a("strong",[t._v("查找两个值之间的多个元素")]),t._v("时，就会有大麻烦了。你的成本将是O(N)，因为你必须查找树的每一个节点，以判断它是否处于那2个值之间（例如，对树使用中序遍历）。而且这个操作不是磁盘I/O有利的，因为你必须读取整个树。我们需要找到高效的范围查询方法。")])]),t._v(" "),a("ul",[a("li",[t._v("这就是为什么引入B+树索引, 具体请参考这篇："),a("a",{attrs:{href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-b-tree.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL - 索引(B+树)"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("如果你在数据库中增加或删除一行")]),t._v("（从而在相关的B+树索引里）：")]),t._v(" "),a("ul",[a("li",[t._v("你必须在B+树中的节点之间保持顺序，否则节点会变得一团糟，你无法从中找到想要的节点。")]),t._v(" "),a("li",[t._v("你必须尽可能降低B+树的层数，否则O(log(N))复杂度会变成O(N)。")])]),t._v(" "),a("p",[t._v("      换句话说，B+树需要自我整理和自我平衡。谢天谢地，我们有智能删除和插入。但是这样也带来了成本：在B+树中，插入和删除操作时O(log(N))复杂度。所以有些人听到过使用太多索引不是个好注意的说话。没错，你减慢了快速插入/更新/删除表中的一个行的操作，因为数据库需要以代价高昂的每索引O(log(N))运算来更新表的索引。再者，增加索引意味着给事务管理器带来更多的工作负荷。")])])}),[],!1,null,null,null);a.default=_.exports}}]);