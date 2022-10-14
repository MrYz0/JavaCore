(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{323:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("概念：约束时作用于表中字段上的规则，用于限制存储在表中的数据")])]),s._v(" "),t("li",[t("p",[s._v("目的：保证数据库中数据的正确、有效性和完整性")])]),s._v(" "),t("li",[t("p",[s._v("分类：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-64.png",alt:"1653642452774"}})])])]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("约束是作用于表中字段上的，可以在创建表/修改表的时候添加约束。")])]),s._v(" "),t("h2",{attrs:{id:"约束演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#约束演示"}},[s._v("#")]),s._v(" 约束演示")]),s._v(" "),t("p",[s._v("案例需求： 根据需求，完成表结构的创建。需求如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-65.png",alt:"1653642669815"}})]),s._v(" "),t("p",[s._v("对应的建表语句为:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" tb_user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unique")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'年龄'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'状态'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    gender "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'性别'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户表'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"外键约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键约束"}},[s._v("#")]),s._v(" 外键约束")]),s._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("外键：用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性。")]),s._v(" "),t("p",[t("strong",[s._v("例子：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-66.png",alt:"1653643764825"}})]),s._v(" "),t("p",[s._v("左侧的emp表是员工表，里面存储员工的基本信息，包含员工的ID、姓名、年龄、职位、薪资、入职日")]),s._v(" "),t("p",[s._v("期、上级主管ID、部门ID，在员工的信息中存储的是部门的ID dept_id，而这个部门的ID是关联的")]),s._v(" "),t("p",[s._v("部门表dept的主键id，那emp表的dept_id就是外键,关联的是另一张表的主键")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("目前上述两张表，只是在逻辑上存在这样一层关系；在数据库层面，并未建立外键关联，")]),s._v(" "),t("p",[s._v("所以是无法保证数据的一致性和完整性的。")])]),s._v(" "),t("p",[s._v("没有数据库外键关联的情况下，能够保证一致性和完整性呢，我们来测试一下")]),s._v(" "),t("p",[s._v("准备数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-67.png",alt:"1653644273058"}})]),s._v(" "),t("p",[s._v("接下来，我们可以做一个测试，删除id为1的部门信息。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-68.png",alt:"1653644314407"}})]),s._v(" "),t("p",[s._v("结果，我们看到删除成功，而删除成功之后，部门表不存在id为1的部门，而在emp表中还有很多的员")]),s._v(" "),t("p",[s._v("工，关联的为id为1的部门，此时就出现了数据的不完整性。 而要想解决这个问题就得通过数据库的")]),s._v(" "),t("p",[s._v("外键约束。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("p",[s._v("1). 添加外键")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n    字段名 数据类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("外键名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("外键字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" 主表 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("主表列名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" 外键名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("外键字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" 主表 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("主表列名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("案例:")]),s._v(" "),t("p",[s._v("为emp表的dept_id字段添加外键约束,关联dept表的主键id。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" fk_emp_dept_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" dept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-69.png",alt:"1653645639714"}})]),s._v(" "),t("p",[s._v("添加了外键约束之后，我们再到dept表(父表)删除id为1的记录，然后看一下会发生什么现象。 此时")]),s._v(" "),t("p",[s._v("将会报错，不能删除或更新父表记录，因为存在外键约束。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-70.png",alt:"1653644600970"}})]),s._v(" "),t("p",[s._v("2). 删除外键")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" 外键名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("案例：")]),s._v(" "),t("p",[s._v("删除emp表的外键fk_emp_dept_id。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" fk_emp_dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除-更新行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-更新行为"}},[s._v("#")]),s._v(" 删除/更新行为")]),s._v(" "),t("p",[s._v("添加了外键之后，再删除父表数据时产生的约束行为，我们就称为删除/更新行为。具体的删除/更新行")]),s._v(" "),t("p",[s._v("为有以下几种:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-71.png",alt:"1653645688260"}})]),s._v(" "),t("p",[s._v("具体语法为:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" 外键名称 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("外键字段"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" 主表名 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("主表字段名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("演示如下：")]),s._v(" "),t("p",[s._v("由于NO ACTION 是默认行为，我们前面语法演示的时候，已经测试过了，就不再演示了，这里我们再")]),s._v(" "),t("p",[s._v("演示其他的两种行为：CASCADE、SET NULL。")]),s._v(" "),t("p",[s._v("1). CASCADE")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" fk_emp_dept_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" dept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cascade")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cascade")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("A. 修改父表id为1的记录，将id修改为6")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-72.png",alt:"1653646562201"}})]),s._v(" "),t("p",[s._v("我们发现，原来在子表中dept_id值为1的记录，现在也变为6了，这就是cascade级联的效果。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("在一般的业务系统中，不会修改一张表的主键值。")])]),s._v(" "),t("p",[s._v("B. 删除父表id为6的记录")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-73.png",alt:"1653646602057"}})]),s._v(" "),t("p",[s._v("我们发现，父表的数据删除成功了，但是子表中关联的记录也被级联删除了")]),s._v(" "),t("p",[s._v("2). SET NULL")]),s._v(" "),t("p",[s._v("在进行测试之前，我们先需要删除上面建立的外键 fk_emp_dept_id。然后再通过数据脚本，将")]),s._v(" "),t("p",[s._v("emp、dept表的数据恢复了。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" fk_emp_dept_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dept_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("references")]),s._v(" dept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接下来，我们删除id为1的数据，看看会发生什么样的现象")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-74.png",alt:"1653646634767"}})]),s._v(" "),t("p",[s._v("我们发现父表的记录是可以正常的删除的，父表的数据删除之后，再打开子表 emp，我们发现子表emp")]),s._v(" "),t("p",[s._v("的dept_id字段，原来dept_id为1的数据，现在都被置为NULL了")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/MySQL-75.png",alt:"1653646646104"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);