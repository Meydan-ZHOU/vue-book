# vue-book 项目用到stylus
```
npm install
npm run dev
```
- mock模拟数据
- api代表所有的接口
- base 基础组件
- components 页面即组件

## 热门图书功能
-先写服务器，确保数据能正常返回
-增加api方法，实现调取数据的功能
-在哪个组件中如何应用了api,如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法
将数据传递给基础组件


##路由元信息
   -$route.meta

##下拉加载
  -默认每次给5条，前端告诉后台现在要从第几条开始给我
  -/page?offset=5
  -后台返回还要告诉前端是否要更多数据，hasMore:true


##coding split代码分割
