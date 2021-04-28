import { createStore } from 'vuex'

// Create a new store instance.
export  const store = createStore({
    state () {
        return {
            //下面是数据库模拟的用户数据
            // 这里的数据是一个用户的数据
            userDataBaseState:{
                userId:15123928465,
                userName:'lyl',
                userPsw:'123456',
                userAvatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                bigScreenState: [
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':0,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg10.png',
                        globeChartState:[
                            {
                                "name": "globeChart",
                                "chartType":'地球',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "x": 730,
                                "y": 310,
                                "w": 400,
                                "h": 340,
                                "minWidth":300,
                                "minHeight":300
                            },
                        ],
                        // bigScreenSetting:{
                        //     name:'',
                        //     introduction:'',
                        //     w:1440,
                        //     h:800,
                        //     backgroundImage:'',
                        //     titleBackground:''
                        // },
                        candleStickState:[
                            {
                                "name": "candleStick",
                                "chartType":'K线图',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "x": 265,
                                "y": 415,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300
                            },
                        ],
                        textState:[
                            {
                                "name": "超链接",
                                "chartType":'超链接',
                                "clickState":false,
                                "display": false,
                                "innerContent":"超链接",
                                'idKey':0,
                                'to':'https://www.baidu.com/',
                                "x": 960,
                                "y": 150,
                                "w": 80,
                                "h": 50,
                                "minWidth":50,
                                "minHeight":30
                            },
                            {
                                "name": "文本框",
                                "chartType":'文本框',
                                "clickState":false,
                                "display": false,
                                "innerContent":"文本框",
                                'idKey':1,
                                "x": 960,
                                "y": 150,
                                "w": 80,
                                "h": 50,
                                "minWidth":50,
                                "minHeight":30
                            },
                        ],
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                        chartState:[
                            {
                                "name": "linechart",
                                "chartType":'折线图',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "x": 270,
                                "y": 160,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                option: {
                                    xAxis: {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: [150, 230, 224, 218, 135, 147, 260],
                                        type: 'line'
                                    }]
                                }
                            },
                            {
                                "name": "barchart",
                                "chartType":'柱状图',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "x": 270,
                                "y": 160,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                option: {
                                    xAxis: {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: [120, 200, 150, 80, 70, 110, 130],
                                        type: 'bar'
                                    }]
                                }
                            },
                            {
                                "name": "barchart",
                                "chartType":'柱状图',
                                "clickState":false,
                                "display": false,
                                'idKey':2,
                                "x": 270,
                                "y": 160,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                option: {
                                    xAxis: {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: [120, 200, 150, 80, 70, 110, 130],
                                        type: 'bar'
                                    }]
                                }
                            },
                            {
                                "name": "linechart",
                                "chartType":'折线图',
                                "clickState":false,
                                "display": false,
                                'idKey':3,
                                "x": 270,
                                "y": 160,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                menuSetting:{
                                    // 'xSetting':
                                },
                                option: {
                                    xAxis: {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: [150, 230, 224, 218, 135, 147, 260],
                                        type: 'line'
                                    }]
                                }
                            },
                            {
                                "name": "linechart",
                                "chartType":'折线图',
                                "clickState":false,
                                "display": false,
                                'idKey':4,
                                "x": 270,
                                "y": 160,
                                "w": 300,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                option: {
                                    xAxis: {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: [150, 230, 224, 218, 135, 147, 260],
                                        type: 'line'
                                    }]
                                }
                            },
                            {
                                "name": "piechart",
                                "chartType":'饼图',
                                "clickState":false,
                                "display": false,
                                'idKey':5,
                                "x": 270,
                                "y": 160,
                                "w": 500,
                                "h": 300,
                                "minWidth":300,
                                "minHeight":300,
                                option: {
                                    title: {
                                        text: '某站点用户访问来源',
                                        subtext: '纯属虚构',
                                        left: 'center'
                                    },
                                    tooltip: {
                                        trigger: 'item'
                                    },
                                    legend: {
                                        orient: 'vertical',
                                        left: 'left',
                                    },
                                    series: [
                                        {
                                            name: '访问来源',
                                            type: 'pie',
                                            radius: '50%',
                                            data: [
                                                {value: 1048, name: '搜索引擎'},
                                                {value: 735, name: '直接访问'},
                                                {value: 580, name: '邮件营销'},
                                                {value: 484, name: '联盟广告'},
                                                {value: 300, name: '视频广告'}
                                            ],
                                            emphasis: {
                                                itemStyle: {
                                                    shadowBlur: 10,
                                                    shadowOffsetX: 0,
                                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':1,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg2.png'
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':2,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg2.png'
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':3,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg3.png',
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':4,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg4.png',
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':5,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg5.png',
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':6,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg6.png',
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                    },
                    {
                        'w':'977',
                        'h':'800',
                        "chartType":'大屏',
                        'id':7,
                        'introduction':'默认内容',
                        'name':'默认名字',
                        // 'backgroundColor':'rgb(160, 160, 160)',
                        // 'backgroundImage':'../../assets/bg1.png'
                        'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg7.png',
                        imageState:[
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':0,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                            {
                                "name": "图片",
                                "chartType":'图片',
                                "clickState":false,
                                "display": false,
                                'idKey':1,
                                "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                                "x": 960,
                                "y": 220,
                                "w": 80,
                                "h": 40,
                                "minWidth":60,
                                "minHeight":40
                            },
                        ],
                    }
                ]
            },
            //下面是编辑页面的数据
            bigScreenState:{
                'w':'977',
                'h':'800',
                "chartType":'大屏',
                'id':0,
                'introduction':'默认内容',
                'name':'默认名字',
                // 'backgroundColor':'rgb(160, 160, 160)',
                // 'backgroundImage':'../../assets/bg1.png'
                'backgroundImage':'https://bootapi.jeecg.com/bigscreen/img/bg/bg10.png'
            },
            globeChartState:[
                {
                    "name": "globeChart",
                    "chartType":'地球',
                    "clickState":false,
                    "display": false,
                    'idKey':0,
                    "x": 730,
                    "y": 310,
                    "w": 400,
                    "h": 340,
                    "minWidth":300,
                    "minHeight":300
                },
            ],
            candleStickState:[
                {
                    "name": "candleStick",
                    "chartType":'K线图',
                    "clickState":false,
                    "display": false,
                    'idKey':0,
                    "x": 265,
                    "y": 415,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300
                },
            ],
            textState:[
                {
                    "name": "超链接",
                    "chartType":'超链接',
                    "clickState":false,
                    "display": false,
                    "innerContent":"超链接",
                    'idKey':0,
                    'to':'https://www.baidu.com/',
                    "x": 960,
                    "y": 150,
                    "w": 80,
                    "h": 50,
                    "minWidth":50,
                    "minHeight":30
                },
                {
                    "name": "文本框",
                    "chartType":'文本框',
                    "clickState":false,
                    "display": false,
                    "innerContent":"文本框",
                    'idKey':1,
                    "x": 960,
                    "y": 150,
                    "w": 80,
                    "h": 50,
                    "minWidth":50,
                    "minHeight":30
                },
            ],
            imageState:[
                {
                    "name": "图片",
                    "chartType":'图片',
                    "clickState":false,
                    "display": false,
                    'idKey':0,
                    "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                    "x": 960,
                    "y": 220,
                    "w": 80,
                    "h": 40,
                    "minWidth":60,
                    "minHeight":40
                },
                {
                    "name": "图片",
                    "chartType":'图片',
                    "clickState":false,
                    "display": false,
                    'idKey':1,
                    "imgSrc":"https://static.jeecg.com/upload/test/df_1616583016208.png",
                    "x": 960,
                    "y": 220,
                    "w": 80,
                    "h": 40,
                    "minWidth":60,
                    "minHeight":40
                },
            ],
            chartState:[
                {
                    "name": "linechart",
                    "chartType":'折线图',
                    "clickState":false,
                    "display": false,
                    'idKey':0,
                    "x": 270,
                    "y": 160,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    option: {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }]
                    }
                },
                {
                    "name": "barchart",
                    "chartType":'柱状图',
                    "clickState":false,
                    "display": false,
                    'idKey':1,
                    "x": 270,
                    "y": 160,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    option: {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar'
                        }]
                    }
                },
                {
                    "name": "barchart",
                    "chartType":'柱状图',
                    "clickState":false,
                    "display": false,
                    'idKey':2,
                    "x": 270,
                    "y": 160,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    option: {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar'
                        }]
                    }
                },
                {
                    "name": "linechart",
                    "chartType":'折线图',
                    "clickState":false,
                    "display": false,
                    'idKey':3,
                    "x": 270,
                    "y": 160,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    menuSetting:{
                        // 'xSetting':
                    },
                    option: {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }]
                    }
                },
                {
                    "name": "linechart",
                    "chartType":'折线图',
                    "clickState":false,
                    "display": false,
                    'idKey':4,
                    "x": 270,
                    "y": 160,
                    "w": 300,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    option: {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }]
                    }
                },
                {
                    "name": "piechart",
                    "chartType":'饼图',
                    "clickState":false,
                    "display": false,
                    'idKey':5,
                    "x": 270,
                    "y": 160,
                    "w": 500,
                    "h": 300,
                    "minWidth":300,
                    "minHeight":300,
                    option: {
                        title: {
                            text: '某站点用户访问来源',
                            subtext: '纯属虚构',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                        },
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius: '50%',
                                data: [
                                    {value: 1048, name: '搜索引擎'},
                                    {value: 735, name: '直接访问'},
                                    {value: 580, name: '邮件营销'},
                                    {value: 484, name: '联盟广告'},
                                    {value: 300, name: '视频广告'}
                                ],
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    }
                },
            ]
        }
    },
    mutations: {
        resizeState(state, size) {
            state.userDataBaseState.bigScreenState[size.bigScreenIdKey][size.typeName][size.idKey].w = size.width;
            state.userDataBaseState.bigScreenState[size.bigScreenIdKey][size.typeName][size.idKey].h = size.height;
            state.userDataBaseState.bigScreenState[size.bigScreenIdKey][size.typeName][size.idKey].x = size.top;
            state.userDataBaseState.bigScreenState[size.bigScreenIdKey][size.typeName][size.idKey].y = size.left;
            // console.log(state.userDataBaseState.bigScreenState[size.bigScreenIdKey])
        },
        keyActiveTrue(state, clickId) {
            if (clickId.preClickId !== undefined || clickId.preClickName !== undefined) {
                state.userDataBaseState.bigScreenState[clickId.bigScreenId][clickId.preClickName][clickId.preClickId].clickState = false;
            }
            state.userDataBaseState.bigScreenState[clickId.bigScreenId][clickId.nowClickName][clickId.nowClickId].clickState = true;
            // state.userDataBaseState.bigScreenState[clickId.bigScreenIdKey][clickId.typeName][clickId.idKey].clickState = true;
            // console.log(state.userDataBaseState.bigScreenState[clickId.bigScreenIdKey][clickId.typeName][clickId.idKey].clickState)
        },
        removeActiveFalse(state, clickId) {
            state.userDataBaseState.bigScreenState[clickId.bigScreenId][clickId.preClickName][clickId.preClickId].clickState = false
            // state.userDataBaseState.bigScreenState[clickId.bigScreenIdKey][clickId.typeName][clickId.idKey].clickState = false;
            // console.log(state.userDataBaseState.bigScreenState[clickId.bigScreenIdKey][clickId.typeName][clickId.idKey].clickState)
        },
        addBarChartState(state,num) {
            let addState = {
                "name": "barchart",
                "chartType":'柱状图',
                "clickState": false,
                "display": false,
                'idKey': state.chartState.length,
                "x": 270,
                "y": 160,
                "w": 300,
                "h": 300,
                "minWidth": 300,
                "minHeight": 300,
                option: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                }
            }
            state.userDataBaseState.bigScreenState[num].chartState.push(addState)
        },
        addLineChartState(state,num) {
            let addState = {
                "name": "linechart",
                "chartType":'折线图',
                "clickState": false,
                "display": false,
                'idKey': state.chartState.length,
                "x": 270,
                "y": 160,
                "w": 300,
                "h": 300,
                "minWidth": 300,
                "minHeight": 300,
                option: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }]
                }
            }
            state.userDataBaseState.bigScreenState[num].chartState.push(addState)
        },
        addPieChartState(state,num) {
            let addState = {
                "name": "pieChart",
                "chartType":'饼图',
                "clickState": false,
                "display": false,
                'idKey': state.chartState.length,
                "x": 270,
                "y": 160,
                "w": 500,
                "h": 300,
                "minWidth": 300,
                "minHeight": 300,
                option: {
                    title: {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '搜索引擎'},
                                {value: 735, name: '直接访问'},
                                {value: 580, name: '邮件营销'},
                                {value: 484, name: '联盟广告'},
                                {value: 300, name: '视频广告'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
            state.userDataBaseState.bigScreenState[num].chartState.push(addState)
        },
        // k图
        addCandleStickState(state,num) {
            let addState = {
                "name": "candleStick",
                "chartType":'K线图',
                "clickState":false,
                "display": false,
                'idKey':state.candleStickState.length,
                "x": 265,
                "y": 415,
                "w": 300,
                "h": 300,
                "minWidth":300,
                "minHeight":300
            }
            state.userDataBaseState.bigScreenState[num].candleStickState.push(addState)
        },
        addGlobeChartState(state,num) {
            let addState = {
                "name": "globeChart",
                "chartType":'地球',
                "clickState":false,
                "display": false,
                'idKey': state.globeChartState.length,
                "x": 730,
                "y": 310,
                "w": 400,
                "h": 340,
                "minWidth":300,
                "minHeight":300
            }
            state.userDataBaseState.bigScreenState[num].globeChartState.push(addState)
        },
        addTextState(state,num) {
            let addState = {
                "name": "文本框",
                "chartType":'文本框',
                "clickState": false,
                "display": false,
                "innerContent": "文本框",
                'idKey': state.textState.length,
                "x": 960,
                "y": 150,
                "w": 80,
                "h": 50,
                "minWidth": 50,
                "minHeight": 30
            }
            state.userDataBaseState.bigScreenState[num].textState.push(addState)
        },
        addTextLinkState(state,num) {
            let addState = {
                "name": "超链接",
                "chartType":'超链接',
                "clickState": false,
                "display": false,
                "innerContent": "链接",
                'idKey': state.textState.length,
                'to':'https://www.baidu.com/',
                "x": 960,
                "y": 150,
                "w": 80,
                "h": 50,
                "minWidth": 50,
                "minHeight": 30
            }
            state.userDataBaseState.bigScreenState[num].textState.push(addState)
        },
        addImageState(state,num) {
            let addState = {
                "name": "图片",
                "chartType":'图片',
                "clickState": false,
                "display": false,
                'idKey': state.imageState.length,
                "imgSrc": "https://static.jeecg.com/upload/test/df_1616583016208.png",
                "x": 960,
                "y": 220,
                "w": 80,
                "h": 40,
                "minWidth": 60,
                "minHeight": 40
            }
            state.userDataBaseState.bigScreenState[num].imageState.push(addState)
        },
        createBigScreen(state,value){
            let addBigScreenState = {
                'w': '977',
                'h': '800',
                "chartType": '大屏',
                'id': state.userDataBaseState.bigScreenState.length,
                'introduction': '默认内容',
                'name': value,
                'backgroundImage': 'https://bootapi.jeecg.com/bigscreen/img/bg/bg10.png',
                globeChartState: [],
                candleStickState: [],
                textState: [],
                imageState: [],
                chartState: []
            }
            state.userDataBaseState.bigScreenState.push(addBigScreenState)
            console.log(state.userDataBaseState.bigScreenState)
            history.state.curren = `#/add/${--state.userDataBaseState.bigScreenState.length}`
        }
    }
})
