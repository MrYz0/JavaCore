(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{321:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),a("h2",{attrs:{id:"事务简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务简介"}},[s._v("#")]),s._v(" 事务简介")]),s._v(" "),a("p",[a("span",{staticStyle:{color:"orange"}},[s._v("事务")]),s._v("是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作"),a("span",{staticStyle:{color:"orange"}},[s._v("要么成功，要么失败。")])]),s._v(" "),a("p",[s._v("就比如：张三给李四转账1000块钱，张三银行账户的钱减少1000，而李四银行账号的钱要增加1000，这一组操作就必须在一个事务的范围内，要么都成功，要么都失败。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-1.png",alt:"image-20220620111531955"}})]),s._v(" "),a("p",[s._v("正常情况：转账这个操作，需要分为以下这么三步来完成，三步完成之后，张三减少1000，而李四增加1000，转账成功：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-2.png",alt:"image-20220620111644031"}})]),s._v(" "),a("p",[s._v("异常情况：转账这个操作，也是分为以下这么三步完成，在执行第三步是报错了，这样就导致张三减少1000块钱，而李四的金额没变，这样就造成了数据的不一致，就出现了问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-3.png",alt:"image-20220620111836016"}})]),s._v(" "),a("p",[s._v("为了解决上述问题，就需要通过数据的事务来完成，我们只需要在业务逻辑执行之前开启事务，执行完毕后提交事务。如果执行过程中报错，则回滚事务，把数据恢复到事务开始之前的状态。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-4.png",alt:"image-20220620112059675"}})]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("默认MySQL的事务是自动提交的，也就是说，当执行完一条DML语句时，MySQL会立即隐式的提交事务")])]),s._v(" "),a("h2",{attrs:{id:"事务操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务操作"}},[s._v("#")]),s._v(" 事务操作")]),s._v(" "),a("h3",{attrs:{id:"数据准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据准备"}},[s._v("#")]),s._v(" 数据准备")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    money "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'余额'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'账户表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" money"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"未控制事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未控制事务"}},[s._v("#")]),s._v(" 未控制事务")]),s._v(" "),a("p",[s._v("1). 测试正常情况")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1.查询张三🈷")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2.将张三余额减少1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3.将李四余额增加1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("测试完毕之后检查数据的状态, 可以看到数据操作前后是一致的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-5.png",alt:"image-20220620113715325"}})]),s._v(" "),a("p",[s._v("2). 测试异常情况")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1.查询张三余额")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2.将张三余额减少1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n程序抛出异常"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3.将李四余额增加1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们把数据都恢复到2000， 然后再次一次性执行上述的SQL语句(出错了.... 这句话不符合SQL语")]),s._v(" "),a("p",[s._v("法,执行就会报错)，检查最终的数据情况, 发现数据在操作前后不一致了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-6.png",alt:"image-20220620114328216"}})]),s._v(" "),a("h3",{attrs:{id:"控制事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制事务"}},[s._v("#")]),s._v(" 控制事务")]),s._v(" "),a("p",[s._v("1). 查看/设置事务提交方式")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("2). 提交事务")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3). 回滚事务")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("上述的这种方式，我们是修改了事务的自动提交行为, 把默认的自动提交修改为了手动提交, 此时我们执行的DML语句都不会提交, 需要手动的执行commit进行提交。")])]),s._v(" "),a("h3",{attrs:{id:"控制事务二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制事务二"}},[s._v("#")]),s._v(" 控制事务二")]),s._v(" "),a("p",[s._v("1）开启事务")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" 或 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2）提交事务")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3）回滚事务")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("转账案例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 开启事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 1. 查询张三余额")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 2. 张三的余额减少1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 程序执行失败.....")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 3. 李四的余额增加1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果正常执行完毕, 则提交事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果执行过程中报错, 则回滚事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- rollback ;")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"事务四大特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务四大特性"}},[s._v("#")]),s._v(" 事务四大特性")]),s._v(" "),a("ul",[a("li",[a("span",{staticStyle:{color:"orange"}},[s._v("原子性（Atomicity）")]),s._v("：事务是不可分割的最小操作单元，要么成功，要么失败")]),s._v(" "),a("li",[a("span",{staticStyle:{color:"orange"}},[s._v("一致性（Consistency）")]),s._v("：事务完成时，必须是所有的数据都保持一致状态")]),s._v(" "),a("li",[a("span",{staticStyle:{color:"orange"}},[s._v("隔离性（Isolation）")]),s._v("：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行")]),s._v(" "),a("li",[a("span",{staticStyle:{color:"orange"}},[s._v("持久性（Durability）")]),s._v("：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。")])]),s._v(" "),a("p",[s._v("上述就是事务的四大特性，"),a("strong",[s._v("简称ACID")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-7.png",alt:"image-20220622120053285"}})]),s._v(" "),a("h2",{attrs:{id:"并发事务问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发事务问题"}},[s._v("#")]),s._v(" 并发事务问题")]),s._v(" "),a("p",[s._v("1）"),a("span",{staticStyle:{color:"orange"}},[s._v("脏读")]),s._v("：一个事务读到另外一个事务还没有提交的数据")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-8.png",alt:"image-20220622120200182"}})]),s._v(" "),a("p",[s._v("比如B读取到了A未提交的数据。")]),s._v(" "),a("p",[s._v("2）"),a("span",{staticStyle:{color:"orange"}},[s._v("不可重复读")]),s._v("：一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-9.png",alt:"image-20220622120406983"}})]),s._v(" "),a("p",[s._v("事务A两次读取同一条记录，但是读取到的数据确实不一样的")]),s._v(" "),a("p",[s._v("3)"),a("span",{staticStyle:{color:"orange"}},[s._v("幻读")]),s._v('：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在了，好像出现了"幻影".'),a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-10.png",alt:"image-20220622120501636"}})]),s._v(" "),a("h2",{attrs:{id:"事务隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[s._v("#")]),s._v(" 事务隔离级别")]),s._v(" "),a("p",[s._v("为了解决并发事务所引发的问题，在数据库中引入了事务隔离级别。主要有以下几种：")]),s._v(" "),a("p",[s._v("​\t"),a("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/%E4%BA%8B%E5%8A%A1-11.png",alt:"image-20220622120628232"}})]),s._v(" "),a("p",[s._v("1). 查看事务隔离级别")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT @@TRANSACTION_ISOLATION;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2). 设置事务隔离级别")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNCOMMITTED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEATABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SERIALIZABLE")]),s._v(" }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("::: note注意")]),s._v(" "),a("p",[s._v("事务隔离级别越高，数据越安全，但是性能越低。")]),s._v(" "),a("p",[s._v(":::")])])}),[],!1,null,null,null);a.default=e.exports}}]);