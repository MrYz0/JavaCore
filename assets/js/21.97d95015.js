(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{330:function(t,e,_){"use strict";_.r(e);var v=_(6),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"重要的术语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要的术语"}},[t._v("#")]),t._v(" 重要的术语")]),t._v(" "),e("blockquote",[e("p",[t._v("关系模型是一种基于表的数据模型，以下为关系学生信息，该表有很多不足之处，本文研究内容就是如何改进它：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220829211845144.png",alt:"image-20220829211845144"}})]),t._v(" "),e("p",[t._v("下面是一些重要术语：")]),t._v(" "),e("ul",[e("li",[t._v("**属性（attribute）：**列的名字，上图有学号、姓名、班级、兴趣爱好、班主任、课程、 授课主任、分数。")]),t._v(" "),e("li",[t._v("**依赖（relation）：**列属性间存在的某种联系。")]),t._v(" "),e("li",[t._v("**元组（tuple）：**每一个行，如第二行（1301，小明，13班，篮球，王老师，英语，赵英，70）就是一个元组。")]),t._v(" "),e("li",[t._v("**表（table）：**有多个属性，以及众多元组所表示的各个实例组成。")]),t._v(" "),e("li",[t._v("模式（schema）：这里我们指逻辑结构，如学生信息（学号，姓名，班级，兴趣爱好，班主任，课程，授课主任，分数）的笼统表述。")]),t._v(" "),e("li",[t._v("**域（domain）：**数据类型，如String、integer等，上图中每一个属性都有它的数据类型（即域）。")]),t._v(" "),e("li",[e("strong",[t._v("键（key）："),e("strong",[t._v("由关系的一个或多个属性组成，任意两个键相同的元组，所有属性都相同。需要保证表示键的属性很少。一个关系可以存在好几种键，工程中一般从这些候选键中选出一个作为")]),t._v("主键（primary key）")]),t._v("。")]),t._v(" "),e("li",[t._v("候选键（candidate key）：由关系的一个或多个属性组成，候选键都具备键的特征，都有资格成为主键。")]),t._v(" "),e("li",[e("strong",[t._v("超键（super key）："),e("strong",[t._v("包含键的属性集合，无需保证属性集的最小化。每个键也是超键。可以认为是")]),t._v("键的超集")]),t._v("。")]),t._v(" "),e("li",[t._v("外键（foreign key）：如果某一个关系A中的一个（组）属性是另一个关系B的键，则该（组）属性在A中成为外键。")]),t._v(" "),e("li",[e("strong",[t._v("主属性（prime attribute）")]),t._v("：所有候选键所包含的属性都是主属性。")]),t._v(" "),e("li",[e("strong",[t._v("投影（projection）")]),t._v("：选取特定的列，如将关系学生信息投影为学号、姓名即得到上表中仅包含学号、姓名的列")]),t._v(" "),e("li",[e("strong",[t._v("选择（selection）")]),t._v("：按照一定条件选取特定元组，如选择上表中分数>80的元组。")]),t._v(" "),e("li",[e("strong",[t._v("笛卡儿积（交叉连接Cross join）")]),t._v("：第一个关系每一行分别与第二个关系的每一行组合。")]),t._v(" "),e("li",[e("strong",[t._v("自然连接（natural join）")]),t._v("：第一个关系中每一行与第二个关系的每一行进行匹配，如果得到有交叉部分则合并，若无交叉部分则舍弃。")]),t._v(" "),e("li",[e("strong",[t._v("连接（theta join）")]),t._v("：即加上约束条件的笛卡儿积，先得到笛卡儿积，然后根据约束条件删除不满足的元组。")]),t._v(" "),e("li",[e("strong",[t._v("外连接（outer join）")]),t._v("：执行自然连接后，将舍弃的部分也加入，并且匹配失败处的属性用NULL代替。")]),t._v(" "),e("li",[e("strong",[t._v("除法运算（division）")]),t._v("：关系R除以关系S的结果为T，则T包含所有在R但不在S中的属性，且T的元组与S的元组的所有组合在R中。")])]),t._v(" "),e("h2",{attrs:{id:"函数依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数依赖"}},[t._v("#")]),t._v(" 函数依赖")]),t._v(" "),e("blockquote",[e("p",[t._v("通过函数依赖关系，来帮助你确定表中的合理主外键等；这里只是简介，有这么个概念就可以了，因为大多数情况你不用那些所谓的推倒关系，你也是可以凭借"),e("strong",[t._v("直觉")]),t._v("设计出来的。")])]),t._v(" "),e("p",[t._v("记 A->B 表示 A 函数决定 B，也可以说 B 函数依赖于 A。")]),t._v(" "),e("p",[t._v("如果 {A1，A2，... ，An} 是关系的一个或多个属性的集合，该集合函数决定了关系的其它所有属性并且是最小的，那么该集合就称为键码。")]),t._v(" "),e("p",[t._v("对于 A->B，如果能找到 A 的真子集 A'，使得 A'-> B，那么 A->B 就是部分函数依赖，否则就是完全函数依赖。")]),t._v(" "),e("p",[t._v("对于 A->B，B->C，则 A->C 是一个传递函数依赖。")]),t._v(" "),e("h2",{attrs:{id:"异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),e("blockquote",[e("p",[t._v("介绍 不符合范式的关系，会产生很多异常，为了引出"),e("strong",[t._v("范式")]),t._v("的内容。")])]),t._v(" "),e("p",[t._v("以下的学生课程关系的函数依赖为 Sno, Cname -> Sname, Sdept, Mname, Grade，键码为 {Sno, Cname}。也就是说，确定学生和课程之后，就能确定其它信息。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("不符合范式的关系，会产生很多异常，主要有以下四种异常:")]),t._v(" "),e("ul",[e("li",[t._v("冗余数据: 例如 "),e("code",[t._v("学生-2")]),t._v(" 出现了两次。")]),t._v(" "),e("li",[t._v("修改异常: 修改了一个记录中的信息，但是另一个记录中相同的信息却没有被修改。")]),t._v(" "),e("li",[t._v("删除异常: 删除一个信息，那么也会丢失其它信息。例如删除了 "),e("code",[t._v("课程-1")]),t._v(" 需要删除第一行和第三行，那么 "),e("code",[t._v("学生-1")]),t._v(" 的信息就会丢失。")]),t._v(" "),e("li",[t._v("插入异常: 例如想要插入一个学生的信息，如果这个学生还没选课，那么就无法插入。")])]),t._v(" "),e("h2",{attrs:{id:"范式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范式"}},[t._v("#")]),t._v(" 范式")]),t._v(" "),e("blockquote",[e("p",[t._v("范式理论是为了解决以上提到四种异常。")])]),t._v(" "),e("p",[t._v("高级别范式的依赖于低级别的范式，1NF 是最低级别的范式。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220829214644125.png",alt:"image-20220829214644125"}})]),t._v(" "),e("h3",{attrs:{id:"_1-第一范式-1nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一范式-1nf"}},[t._v("#")]),t._v(" 1. 第一范式 (1NF)")]),t._v(" "),e("p",[t._v("属性不可分。")]),t._v(" "),e("h3",{attrs:{id:"_2-第二范式-2nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二范式-2nf"}},[t._v("#")]),t._v(" 2. 第二范式 (2NF)")]),t._v(" "),e("p",[t._v("每个非主属性完全函数依赖于键码。")]),t._v(" "),e("p",[t._v("可以通过分解来满足。")]),t._v(" "),e("p",[e("strong",[t._v("分解前")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("以上学生课程关系中，{Sno, Cname} 为键码，有如下函数依赖:")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sname, Sdept")]),t._v(" "),e("li",[t._v("Sdept -> Mname")]),t._v(" "),e("li",[t._v("Sno, Cname-> Grade")])]),t._v(" "),e("p",[t._v("Grade 完全函数依赖于键码，它没有任何冗余数据，每个学生的每门课都有特定的成绩。")]),t._v(" "),e("p",[t._v("Sname, Sdept 和 Mname 都部分依赖于键码，当一个学生选修了多门课时，这些数据就会出现多次，造成大量冗余数据。")]),t._v(" "),e("p",[e("strong",[t._v("分解后")])]),t._v(" "),e("p",[t._v("关系-1")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])])])]),t._v(" "),e("p",[t._v("有以下函数依赖:")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sname, Sdept")]),t._v(" "),e("li",[t._v("Sdept -> Mname")])]),t._v(" "),e("p",[t._v("关系-2")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Cname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Grade")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("90")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("课程-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("95")])])])]),t._v(" "),e("p",[t._v("有以下函数依赖:")]),t._v(" "),e("ul",[e("li",[t._v("Sno, Cname ->  Grade")])]),t._v(" "),e("h3",{attrs:{id:"_3-第三范式-3nf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-第三范式-3nf"}},[t._v("#")]),t._v(" 3. 第三范式 (3NF)")]),t._v(" "),e("p",[t._v("非主属性不传递函数依赖于键码。")]),t._v(" "),e("p",[t._v("上面的 关系-1 中存在以下传递函数依赖:")]),t._v(" "),e("ul",[e("li",[t._v("Sno -> Sdept -> Mname")])]),t._v(" "),e("p",[t._v("可以进行以下分解:")]),t._v(" "),e("p",[t._v("关系-11")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sno")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sname")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学生-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")])])])]),t._v(" "),e("p",[t._v("关系-12")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Sdept")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mname")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("学院-2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("院长-2")])])])]),t._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("p",[t._v("这里还有一篇"),e("a",{attrs:{href:"https://blog.csdn.net/calcular/article/details/79332453",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章  (opens new window)"),e("OutboundLink")],1),t._v("讲的挺详细的可以看下。")])])}),[],!1,null,null,null);e.default=a.exports}}]);