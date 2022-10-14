(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{350:function(t,s,a){"use strict";a.r(s);var e=a(6),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot接口-如何保证接口幂等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot接口-如何保证接口幂等"}},[t._v("#")]),t._v(" SpringBoot接口 - 如何保证接口幂等")]),t._v(" "),s("blockquote",[s("p",[t._v("在以SpringBoot开发Restful接口时，如何防止接口的重复提交呢？ 本文主要介绍接口幂等相关的知识点，并实践常见基于Token实现接口幂等。")])]),t._v(" "),s("p",[t._v("准备知识点")]),t._v(" "),s("blockquote",[s("p",[t._v("从幂等和防止重复提交，接口幂等和常见的保证幂等的方式等知识点构筑知识体系。")])]),t._v(" "),s("h3",{attrs:{id:"什么是幂等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是幂等"}},[t._v("#")]),t._v(" 什么是幂等？")]),t._v(" "),s("blockquote",[s("p",[t._v("幂等原先是数学中的一个概念，表示进行1次变换和进行N次变换产生的效果相同。")])]),t._v(" "),s("p",[t._v("当我们讨论接口的幂等性时一般是在说：以相同的请求调用这个接口一次和调用这个接口多次，对系统产生的影响是相同的。如果一个接口满足这个特性，那么我们就说这个 接口是一个幂等接口。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("接口幂等和防止重复提交是一回事吗")]),t._v("？")])]),t._v(" "),s("p",[t._v("严格来说，并不是。")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("幂等")]),t._v(": 更多的是在重复请求已经发生，或是无法避免的情况下，采取一定的技术手段让这些重复请求不给系统带来副作用。")]),t._v(" "),s("li",[s("strong",[t._v("防止重复")]),t._v(": 提交更多的是不让用户发起多次一样的请求。比如说用户在线购物下单时点了提交订单按钮，但是由于网络原因响应很慢，此时用户比较心急多次点击了订单提交按钮。 这种情况下就可能会造成多次下单。一般防止重复提交的方案有：将订单按钮置灰，跳转到结果页等。主要还是从客户端的角度来解决这个问题。")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("哪些情况下客户端是防止不了重复提交的")]),t._v("？")])]),t._v(" "),s("p",[t._v("虽然我们可在客户端做一些防止接口重复提交的事（比如将订单按钮置灰，跳转到结果页等）， 但是如下情况依然客户端是很难控制接口重复提交到后台的，这也进一步表明了"),s("strong",[t._v("接口幂等和防止重复提交不是一回事")]),t._v("以及"),s("strong",[t._v("后端接口保证接口幂等的必要性")]),t._v("所在。")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("接口超时重试")]),t._v("：接口可能会因为某些原因而调用失败，出于容错性考虑会加上失败重试的机制。如果接口调用一半，再次调用就会因为脏数据的存在而出现异常。")]),t._v(" "),s("li",[s("strong",[t._v("消息重复消费")]),t._v("：在使用消息中间件来处理消息队列，且手动ack确认消息被正常消费时。如果消费者突然断开连接，那么已经执行了一半的消息会重新放回队列。被其他消费者重新消费时就会导致结果异常，如数据库重复数据，数据库数据冲突，资源重复等。")]),t._v(" "),s("li",[s("strong",[t._v("请求重发")]),t._v("：网络抖动引发的nginx重发请求，造成重复调用；")])]),t._v(" "),s("h3",{attrs:{id:"什么是接口幂等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是接口幂等"}},[t._v("#")]),t._v(" 什么是接口幂等？")]),t._v(" "),s("p",[t._v("在HTTP/1.1中，对幂等性进行了定义。它描述了一次和多次请求某一个资源对于资源本身应该具有同样的结果（网络超时等问题除外），即第一次请求的时候对资源产生了副作用，但是以后的多次请求都不会再对资源产生副作用。")]),t._v(" "),s("p",[t._v("这里的副作用是不会对结果产生破坏或者产生不可预料的结果。也就是说，其任意多次执行对资源本身所产生的影响均与一次执行的影响相同。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("对哪些类型的接口需要保证接口幂等")]),t._v("？")])]),t._v(" "),s("p",[t._v("我们看下标准的restful请求，幂等情况是怎么样的：")]),t._v(" "),s("ol",[s("li",[t._v("SELECT查询操作")]),t._v(" "),s("li",[t._v("GET：只是获取资源，对资源本身没有任何副作用，天然的幂等性。")]),t._v(" "),s("li",[t._v("HEAD：本质上和GET一样，获取头信息，主要是探活的作用，具有幂等性。")]),t._v(" "),s("li",[t._v("OPTIONS：获取当前URL所支持的方法，因此也是具有幂等性的。")]),t._v(" "),s("li",[t._v("DELETE删除操作")]),t._v(" "),s("li",[t._v("删除的操作，如果从删除的一次和删除多次的角度看，数据并不会变化，这个角度看它是幂等的")]),t._v(" "),s("li",[t._v("但是如果，从另外一个角度，删除数据一般是返回受影响的行数，删除一次和多次删除返回的受影响行数是不一样的，所以从这个角度它需要保证幂等。（折中而言DELETE操作通常也会被纳入保证接口幂等的要求）")]),t._v(" "),s("li",[t._v("ADD/EDIT操作")]),t._v(" "),s("li",[t._v("PUT：用于更新资源，有副作用，但是它应该满足幂等性，比如根据id更新数据，调用多次和N次的作用是相同的（根据业务需求而变）。")]),t._v(" "),s("li",[t._v("POST：用于添加资源，多次提交很可能产生副作用，比如订单提交，多次提交很可能产生多笔订单。")])]),t._v(" "),s("h2",{attrs:{id:"常见的保证幂等的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的保证幂等的方式"}},[t._v("#")]),t._v(" 常见的保证幂等的方式？")]),t._v(" "),s("blockquote",[s("p",[t._v("我们来看下常见的保证幂等的方式。")])]),t._v(" "),s("h3",{attrs:{id:"数据库层面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库层面"}},[t._v("#")]),t._v(" 数据库层面")]),t._v(" "),s("h4",{attrs:{id:"悲观锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁"}},[t._v("#")]),t._v(" 悲观锁")]),t._v(" "),s("blockquote",[s("p",[t._v("典型的数据库悲观锁："),s("code",[t._v("for update")])])]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select * from t_order where order_id = trade_no for update;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("为什么加for update就可以?")]),t._v(" "),s("ol",[s("li",[t._v("当线程A执行for update，数据会对当前记录加锁，其他线程执行到此行代码的时候，会等待线程A释放锁之后，才可以获取锁，继续后续操作。")]),t._v(" "),s("li",[t._v("事物提交时，for update获取的锁会自动释放。")])]),t._v(" "),s("p",[t._v("PS：这种方式很少被使用，因为如果业务处理比较耗时，并发情况下，后面线程会长期处于等待状态，占用了很多线程，让这些线程处于无效等待状态，我们的web服务中的线程数量一般都是有限的，如果大量线程由于获取for update锁处于等待状态，不利于系统并发操作。")]),t._v(" "),s("h4",{attrs:{id:"唯一id-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一id-索引"}},[t._v("#")]),t._v(" 唯一ID/索引")]),t._v(" "),s("blockquote",[s("p",[t._v("针对的是"),s("strong",[t._v("插入")]),t._v("操作。")])]),t._v(" "),s("p",[t._v("数据库唯一主键的实现主要是利用数据库中主键唯一约束的特性，一般来说唯一主键比较适用于“插入”时的幂等性，其能保证一张表中只能存在一条带该唯一主键的记录。")]),t._v(" "),s("p",[t._v("使用数据库唯一主键完成幂等性时需要注意的是，该主键一般来说并不是使用数据库中自增主键，而是使用分布式 ID 充当主键，这样才能能保证在分布式环境下 ID 的全局唯一性。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("去重表")])])]),t._v(" "),s("p",[t._v("去重表本质上也是一种唯一索引方案。")]),t._v(" "),s("p",[t._v("这种方法适用于在业务中有唯一标的插入场景中，比如在以上的支付场景中，如果一个订单只会支付一次，所以订单ID可以作为唯一标识。这时，我们就可以建一张去重表，并且把唯一标识作为唯一索引，在我们实现时，把创建支付单据和写入去去重表，放在一个事务中，如果重复创建，数据库会抛出唯一约束异常，操作就会回滚。")]),t._v(" "),s("h4",{attrs:{id:"乐观锁-基于版本号或者时间戳"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁-基于版本号或者时间戳"}},[t._v("#")]),t._v(" 乐观锁（基于版本号或者时间戳）")]),t._v(" "),s("blockquote",[s("p",[t._v("针对"),s("strong",[t._v("更新")]),t._v("操作。")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("使用版本号或者时间戳")])])]),t._v(" "),s("p",[t._v("这种方法适合在更新的场景中，比如我们要更新商品的名字，这时我们就可以在更新的接口中增加一个版本号，来做幂等")]),t._v(" "),s("p",[t._v("这种方法适合在更新的场景中，比如我们要更新商品的名字，这时我们就可以在更新的接口中增加一个版本号，来做幂等")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateGoodsName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" newName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在实现时可以如下")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" goods "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{newName},version=#{version} where id=#{id} and version<${version}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("状态机")])])]),t._v(" "),s("p",[t._v("本质上也是乐观锁，这种方法适合在有状态机流转的情况下，比如就会订单的创建和付款，订单的付款肯定是在之前，这时我们可以通过在设计状态字段时，使用int类型，并且通过值类型的大小来做幂等，比如订单的创建为0，付款成功为100。付款失败为99")]),t._v(" "),s("p",[t._v("在做状态机更新时，我们就这可以这样控制")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{status} where id=#{id} and status<#{status}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),s("p",[t._v("分布式锁实现幂等性的逻辑是，在每次执行方法之前判断，是否可以获取到分布式锁，如果可以，则表示为第一次执行方法，否则直接舍弃请求即可。")]),t._v(" "),s("p",[t._v("需要注意的是分布式锁的key必须为业务的唯一标识，通常用redis分布式锁或者zookeeper来实现分布式锁。")]),t._v(" "),s("h3",{attrs:{id:"token机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token机制"}},[t._v("#")]),t._v(" token机制")]),t._v(" "),s("blockquote",[s("p",[t._v("TBD")])]),t._v(" "),s("h2",{attrs:{id:"实现案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现案例"}},[t._v("#")]),t._v(" 实现案例")]),t._v(" "),s("blockquote",[s("p",[t._v("TBD")])])])}),[],!1,null,null,null);s.default=v.exports}}]);