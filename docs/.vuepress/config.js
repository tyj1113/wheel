module.exports = {
    title: 'Tom UI',
    description: '这是我在学习Vue的过程中做的一个UI框架,希望对你有用',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/1'},
            {text:'交流',link:'/2'},
        ],
        sidebar: [
            {
                title:'入门',
                children:[
                    '/get-started/',
                    '/install/',
                ]
            },
            {
                title:'组件',
                collapsable: false,
                children:[
                    '/component/button',
                    '/component/input',
                    '/component/tabs',
                ]
            }
        ]
    },
}