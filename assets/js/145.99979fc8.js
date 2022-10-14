(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{448:function(r,i,t){"use strict";t.r(i);var s=t(6),n=Object(s.a)({},(function(){var r=this,i=r._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[i("h2",{attrs:{id:"spring-基础"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-基础"}},[r._v("#")]),r._v(" Spring 基础")]),r._v(" "),i("h3",{attrs:{id:"什么是spring框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是spring框架"}},[r._v("#")]),r._v(" 什么是Spring框架？")]),r._v(" "),i("p",[r._v("Spring是一款开源的轻量级的Java开发框架，旨在提高开发人员的开发效率以及系统的可维护性。")]),r._v(" "),i("p",[r._v("我们一般说Spring框架指的都是Spring Framework，它是很多模块的集合，使用这些模块可以很方便地协助我们进行开发，比如说Spring 支持 IOC（Inverse of Control:控制反转）和AOP（Aspect-Oriented Programming:面向切面编程），可以很方便地对数据库进行访问、可以很方便地集成第三方组件（电子邮件，任务，调度，缓存等等）")]),r._v(" "),i("p",[r._v("、对单元测试支持比较好、支持RESTful Java应用程序的开发。")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/38ef122122de4375abcd27c3de8f60b4.png",alt:"img"}})]),r._v(" "),i("p",[r._v("Spring 最核心的思想就是不重新造轮子，开箱即用，提高开发效率。")]),r._v(" "),i("p",[r._v("Spring 翻译过来就是春天的意思，可见其目标和使命就是为Java 程序员带来春天！")]),r._v(" "),i("p",[r._v("Spring 提供的核心功能主要是IOC 和 AOP。学习Spring，一定要把IOC和AOP的核心思想搞懂！")]),r._v(" "),i("ul",[i("li",[r._v("Spring 官网："),i("a",{attrs:{href:"https://spring.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://spring.io"),i("OutboundLink")],1)]),r._v(" "),i("li",[r._v("Github 地址："),i("a",{attrs:{href:"https://github.com/spring-projects/spring-framework",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/spring-projects/spring-framework"),i("OutboundLink")],1)])]),r._v(" "),i("h3",{attrs:{id:"spring-包含的模块有哪些"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-包含的模块有哪些"}},[r._v("#")]),r._v(" Spring 包含的模块有哪些？")]),r._v(" "),i("p",[i("strong",[r._v("Spring4.x 版本")]),r._v(" ：")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220919173706760.png",alt:"image-20220919173706760"}})]),r._v(" "),i("p",[i("strong",[r._v("Spring5.x 版本")]),r._v(" ：")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220919173717134.png",alt:"image-20220919173717134"}})]),r._v(" "),i("p",[r._v("Spring5.x 版本中 Web 模块的 Portlet 组件已经被废弃掉，同时增加了用于异步响应式处理的 WebFlux 组件。")]),r._v(" "),i("p",[r._v("Spring 各个模块的依赖关系如下：")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220919173733182.png",alt:"image-20220919173733182"}})]),r._v(" "),i("h4",{attrs:{id:"core-container"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#core-container"}},[r._v("#")]),r._v(" Core Container")]),r._v(" "),i("p",[r._v("Spring 框架的核心模块，也可以说是基础模块，主要提供IOC依赖注入功能的支持。Spring 其他所有的功能基本都需要依赖于该模块，我们从上面那张Spring 各个模块的依赖关系图就可以看出来。")]),r._v(" "),i("ul",[i("li",[r._v("**spring-core：**Spring 框架基本的核心工具类。")]),r._v(" "),i("li",[r._v("**spring-beans：**提供对bean的创建、配置和管理等功能的支持。")]),r._v(" "),i("li",[r._v("**spring-context：**提供对国际化、事件传播、资源加载等功能的支持。")]),r._v(" "),i("li",[r._v("**spring-expression：**提供对表示语言（Spring Expression Language）SpEL的支持，只依赖于 core 模块，不依赖于其他模块，可以单独使用。")])]),r._v(" "),i("h4",{attrs:{id:"aop"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[r._v("#")]),r._v(" AOP")]),r._v(" "),i("ul",[i("li",[r._v("**spring-aspects：**该模块与AspectJ的集成提供支持。")]),r._v(" "),i("li",[r._v("**spring-aop：**提供了面向切面的编程实现。")]),r._v(" "),i("li",[r._v("**spring-instrument：**提供了JVM添加代理（agent）的功能。具体来讲，它为Tomcat提供了一个织入代理，能够为Tomcat传递类文件，就像这些文件是被类加载器加载的一样。没有理解也没有关系，这个模块的使用场景非常有限。")])]),r._v(" "),i("h4",{attrs:{id:"data-access-integration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-access-integration"}},[r._v("#")]),r._v(" Data Access/Integration")]),r._v(" "),i("ul",[i("li",[r._v("**spring-jdbc：**提供了对数据访问的抽象JDBC。不同的数据库都有自己独立的API用于操作数据库，而Java程序只需要和JDBC API交互，这样就屏蔽了数据库的影响。")]),r._v(" "),i("li",[r._v("**spring-tx：**提供对事物的支持。")]),r._v(" "),i("li",[r._v("**spring-orm：**提供对Hibernate、JAP、MyBatis等ORM框架的支持。")]),r._v(" "),i("li",[r._v("**spring-oxm：**提供一个抽象层支撑OXM（Object-to-XML-Mapping），例如：JAXB、Castor、XMLBeans、JiBX和XStream等。")]),r._v(" "),i("li",[r._v("**spring-jms：**消息服务。自Spring Framework 4.1以后，它还提供了对spring-messaging 模块的继承。")])]),r._v(" "),i("h4",{attrs:{id:"spring-web"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-web"}},[r._v("#")]),r._v(" Spring Web")]),r._v(" "),i("ul",[i("li",[i("strong",[r._v("spring-web")]),r._v(" ：对 Web 功能的实现提供一些最基础的支持。")]),r._v(" "),i("li",[i("strong",[r._v("spring-webmvc")]),r._v(" ： 提供对 Spring MVC 的实现。")]),r._v(" "),i("li",[i("strong",[r._v("spring-websocket")]),r._v(" ： 提供了对 WebSocket 的支持，WebSocket 可以让客户端和服务端进行双向通信。")]),r._v(" "),i("li",[i("strong",[r._v("spring-webflux")]),r._v(" ：提供对 WebFlux 的支持。WebFlux 是 Spring Framework 5.0 中引入的新的响应式框架。与 Spring MVC 不同，它不需要 Servlet API，是完全异步。")])]),r._v(" "),i("h4",{attrs:{id:"messaging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#messaging"}},[r._v("#")]),r._v(" Messaging")]),r._v(" "),i("p",[i("strong",[r._v("spring-messaging")]),r._v(" 是从 Spring4.0 开始新加入的一个模块，主要职责是为 Spring 框架集成一些基础的报文传送应用。")]),r._v(" "),i("h4",{attrs:{id:"spring-test"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-test"}},[r._v("#")]),r._v(" Spring Test")]),r._v(" "),i("p",[r._v("Spring 团队提倡测试驱动开发（TDD）。有了控制反转 (IoC)的帮助，单元测试和集成测试变得更简单。")]),r._v(" "),i("p",[r._v("Spring 的测试模块对 JUnit（单元测试框架）、TestNG（类似 JUnit）、Mockito（主要用来 Mock 对象）、PowerMock（解决 Mockito 的问题比如无法模拟 final, static， private 方法）等等常用的测试框架支持的都比较好。")]),r._v(" "),i("h3",{attrs:{id:"spring-spring-mvc-spring-boot-之间什么关系"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-spring-mvc-spring-boot-之间什么关系"}},[r._v("#")]),r._v(" Spring,Spring MVC,Spring Boot 之间什么关系?")]),r._v(" "),i("p",[r._v("很多人对 Spring,Spring MVC,Spring Boot 这三者傻傻分不清楚！这里简单介绍一下这三者，其实很简单，没有什么高深的东西。")]),r._v(" "),i("p",[r._v("Spring 包含了多个功能模块（上面刚刚提高过），其中最重要的是 Spring-Core（主要提供 IoC 依赖注入功能的支持） 模块， Spring 中的其他模块（比如 Spring MVC）的功能实现基本都需要依赖于该模块。")]),r._v(" "),i("p",[r._v("下图对应的是 Spring4.x 版本。目前最新的 5.x 版本中 Web 模块的 Portlet 组件已经被废弃掉，同时增加了用于异步响应式处理的 WebFlux 组件。")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220920161655138.png",alt:"image-20220920161655138"}})]),r._v(" "),i("p",[r._v("Spring MVC 是 Spring 中的一个很重要的模块，主要赋予 Spring 快速构建 MVC 架构的 Web 程序的能力。MVC 是模型(Model)、视图(View)、控制器(Controller)的简写，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。")]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220920161712989.png",alt:"image-20220920161712989"}})]),r._v(" "),i("p",[r._v("使用 Spring 进行开发各种配置过于麻烦比如开启某些 Spring 特性时，需要用 XML 或 Java 进行显示配置。于是，Spring Boot 诞生了！")]),r._v(" "),i("p",[r._v("Spring 旨在简化 J2EE 企业应用程序开发。Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用！）。")]),r._v(" "),i("p",[r._v("Spring Boot 只是简化了配置，如果你需要构建 MVC 构架的 Web程序，你还是需要使用 Spring MVC作为 MVC 框架，只是说 Spring Boot 帮你简化了 Spring MVC 的很多配置，真正做到开箱即用！")]),r._v(" "),i("h2",{attrs:{id:"spring-ioc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc"}},[r._v("#")]),r._v(" Spring Ioc")]),r._v(" "),i("h3",{attrs:{id:"谈谈自己对于-spring-ioc-的了解"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#谈谈自己对于-spring-ioc-的了解"}},[r._v("#")]),r._v(" 谈谈自己对于 Spring IoC 的了解")]),r._v(" "),i("p",[r._v("**IOC（Inverse of Control:控制反转）**是一种设计思想，而不是一个具体的技术实现。IoC的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过，IoC并非 Spring 特有，在其它语言中也有应用。")]),r._v(" "),i("h3",{attrs:{id:"为什么叫控制反转"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#为什么叫控制反转"}},[r._v("#")]),r._v(" 为什么叫控制反转？")]),r._v(" "),i("ul",[i("li",[r._v("**控制：**指的是对象创建（实例化、管理）的权利")]),r._v(" "),i("li",[r._v("**反转：**控制权交给外部环境（Spring 框架、IoC容器）")])]),r._v(" "),i("p",[i("img",{attrs:{src:"https://yz-typora-img.oss-cn-shanghai.aliyuncs.com/img/image-20220920162448150.png",alt:"image-20220920162448150"}})])])}),[],!1,null,null,null);i.default=n.exports}}]);