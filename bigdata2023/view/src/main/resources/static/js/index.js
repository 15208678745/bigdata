// 柱状图1模块--不同行业职业需求数量
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    $.getJSON('http://localhost:8080/view/getInstryData', function (data) {
        myChart.setOption({
            series: [{
                data: data.data
            }]
        })
    })
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    });
})();

//折线图定制--折线图人员变化
(function() {
    //折线图1

// 1. 实例化对象
        var myChart =
            echarts.init(document.querySelector(".line .chart"));

        var yearData = [
            {
                year: '2022', // 年份
                data: [ // 两个数组是因为有两条线
                    [24, 40, 101, 134, 90, 230, 210,
                        230, 120, 230, 210, 120],
                    [40, 64, 191, 324, 290, 330,
                        310, 213, 180, 200, 180, 79]
                ]
            },
            {
                year: '2023', // 年份
                data: [ // 两个数组是因为有两条线
                    [123, 175, 112, 197, 121, 67,
                        98, 21, 43, 64, 76, 38],
                    [143, 131, 165, 123, 178, 21,
                        82, 64, 43, 60, 19, 34]
                ]
            }
        ];
// 2.指定配置
        var option = {
            color: ["rgb(82,180,252)", "#f2fac1"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data: ['Email', 'Union Ads',
                //     'Video Ads', 'Direct', 'Search Engine'],
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色已靠右
                },
                // 这个10% 必须加引号
                right: '25%' // 距离右边10%
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,// 显示边框
                borderColor: '#b5f8e6',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false // 去除刻度线
                },
                axisLabel: {
                    color: "rgba(255,255,255,1) ", // 文本颜色
                },
                axisLine: {
                    show: false // 去除轴线
                },

            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false // 去除刻度
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgb(82,180,252)' // 分割线颜色
                    }
                },
                axisLabel: {
                    color: "rgba(255,255,255,1) ", // 文本颜色
                },
            },

            series: [
                {
                    name: 'Email',
                    type: 'line',
                    //stack: 'Total',
                    data: yearData[0].data[0],
                    smooth: true,
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    //stack: 'Total',
                    data: yearData[0].data[1],
                    smooth: true,
                }
            ]
        };



// 3. 把配置给实例对象
        myChart.setOption(option);



        $(".line h2").on("click", "a", function() {
            //console.log(yearData[$(this).index()]);
            var obj = yearData[$(this).index()];
            option.series[0].data = obj.data[0];
            option.series[1].data = obj.data[1];
            myChart.setOption(option);
        });


        var year_2022_1 = [];//2022年第一个对象
        var year_2022_2 = [];//2022年第二个对象
        var year_2023_1 = [];//2023年第一个对象
        var year_2023_2 = [];//2023年第二个对象
        $.getJSON('http://localhost:8080/view/getJobSupplierDemanderData', function
            (data) {
            var arr = data.data
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].type ==0 && (arr[i].date.substr(0,4)=='2022')) {
                    year_2022_1.push(arr[i].count)
                }
                else if (arr[i].type ==1 && (arr[i].date.substr(0,4)=='2022')) {
                    year_2022_2.push(arr[i].count)
                }
                else if (arr[i].type ==0 && (arr[i].date.substr(0,4)=='2023')) {
                    year_2023_1.push(arr[i].count)
                }
                else if (arr[i].type ==1 && (arr[i].date.substr(0,4)=='2023')) {
                    year_2023_2.push(arr[i].count)
                }
            }
//****************mine
            yearData[0].data=[year_2022_1, year_2022_2];
            yearData[1].data=[year_2023_1, year_2023_2];
//****************mine
            myChart.setOption({
                series:[{
                    data: year_2022_1
                },
                    {
                        data: year_2022_2
                    }
                ]

            })
        });

        window.addEventListener("resize", function () {
            myChart.resize();
            // console.log("监控窗口变化，实现图形自适应窗 口大小");
        })

    })();



//饼图1 √//折线图定制--薪资年龄
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
        tooltip: {
            trigger: 'item'
        }, center: ['50%', '50%'], legend: {
            orient: 'vertical',//设置图例的方向
            bottom: '0%', right: '0%', itemGap: 8,//设置图例的间距
            icon: "circle",// 图例项的icon,类型包括 circle(圆形),rect(正方形),roundRect(圆角正方形),triangle(三角形),diamond(菱形),pin(大头针行),arrow(箭头形),none(无图例项的icon)
            itemWidth: 15, itemHeight: 15, textStyle: {
                color: "#bbb", fontSize: "12",
            }
        }, series: [{
            name: '工龄分布',
            type: 'pie',
            radius: ['35%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false, position: 'center'
            },
            emphasis: {
                label: {
                    show: true, fontSize: 12, fontWeight: 'bold', color: "rgba(255,255,255,.5)",
                }
            },
            labelLine: {
                show: false
            },
            data: [{value: 120, name: '未到1年'}, {value: 100, name: '1-3年'}, {value: 70, name: '3-5年'}, {
                value: 50, name: '5-10年'
            }, {value: 10, name: '10年以上'}],
            color: ["#065aa8", "#00b894", "#0cbab4", "#0074d2", "#ff5b5b", "#ff0000"],
        }]
    };
    //自适应
    myChart.setOption(option);

    // 前端调用后端接口
    $.getJSON('http://localhost:8080/view/getSalRangeData', function (data) {
        myChart.setOption({
            series: [{
                data: data.data
            }]
        })
    })

    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



//条形图
// 条形图
//新的代码
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    //定义颜色
    var myColor = ["rgb(0,255,255)", "rgba(0,255,255,0.76)", "rgba(0,216,135,0.91)", "rgba(200,192,255,0.51)", "#FF8C00", "#F4A460"]

    // 指定配置和数据
    var option = {
        grid: {
            top: '10%', left: '22%',
            //right: '10%',
            bottom: '10%', // containLabel: true
        }, xAxis: {
            show: false,
        }, yAxis: [{
            type: 'category', inverse: true, //设置刻度标签里面的文字颜色
            axisLabel: {
                color: "#ffd9ce" },

            data: ['大数据开发工程师', '数据分析师', '大数据分析师', '数据采集', '数据统计员', '数据开发工程师'], // 不显示y轴线

            axisLine: {
                show: false
            },

            // 不显示刻度
            axisTick: {
                show: false
            },

        }, {
            show: true, data: [19325, 23438, 31000, 121594, 134141, 481807],
            inverse: true,
            axisLine: {
                show: false
            }, axisTick: {
                show: false
            }, axisLabel: {
                textStyle: {
                    color: "#fff", fontSize: 12
                }
            }
        }], series: [{
            name: '框',
            type: 'bar',
            //barCategoryGap: 50,
            barWidth: 20,
            data: [100, 100, 100, 100, 100, 100],
            yAxisIndex: 1,
            itemStyle: {
                color: 'none', borderColor: "#00c1de", borderWith: 3, barBorderRadius: 15
            }
        }, {
            name: '条', type: 'bar',
            data:  [94.19,100.21,93.65,86.33,98.21,92.44],yAxisIndex: 0,
            itemStyle: {
                barBorderRadius: 20, color: function (params) {
                    console.log(myColor[params.dataIndex])
                    return myColor[params.dataIndex];
                },
            },
            barCategoryGap: '5%',
            barWidth: 20, label: {
                show: true, position: "insideright", formatter: "{c}%"
            }
        },], grid: {
            left: "2%",
            top: "20px",
            right: "10%",
            bottom: "8%",
            containLabel: true
        }

    };

    // 把配置给实例对象
    myChart.setOption(option);

    var yAxis1 = [];
    var yAxis2 = [];
    var series1 = [];
    $.getJSON('http://localhost:8080/view/getJobItemData', function (data) {

        var arr = data.data
        for (var i = 0; i < arr.length; i++) {
            yAxis1.push(arr[i].job_name);
            yAxis2.push(arr[i].count);
            series1.push(Math.round(arr[i].counter / arr[i].total * 100));
        }

        myChart.setOption({
            yAxis: [{data: yAxis1}, {data: yAxis2}

            ], series: [{data: series1}, {}]
        })
    });

    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


//折线图 -播放量
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [
            {
                type: "value",
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },

                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "就业行业",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //前端调用后端接口
    var xdata2 = [];//x轴
    var sData = []; // value
    $.getJSON('http://localhost:8080/view/getInstryData', function (data) {
        var arr = data.data
        for (var i = 0; i < arr.length; i++) {
            xdata2.push(arr[i].ind_name)
            sData.push(arr[i].value)
        }
        myChart.setOption({
            series:[{
                data: sData
            }],
            xAxis: {
                data: xdata2
            }
        })
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//饼图2    点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var option = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                // 如果radius是百分比则必须加引号
                radius: ["10%", "70%"],
                center: ["50%", "42%"],
                roseType: "radius",
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "深圳" },
                    { value: 42, name: "广东" }
                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 10,
                    // 连接到文字的线长度
                    length2: 10
                }
            }
        ]
    }; // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);

    // 前端调用后端接口
    $.getJSON('http://localhost:8080/view/getAreaData', function (data) {
        myChart.setOption({
            series: [{
                data: data.data
            }]
        })
    })
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法

        myChart.resize();
    });
})();


