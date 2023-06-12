package com.zsp.view.controller;

import com.zsp.view.bean.Result;
import com.zsp.view.mapper.ViewMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/view")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ViewController {

    @Resource

    private ViewMapper viewMapper;

    @RequestMapping("/getAreaData")
    public Result getAreaData() {
        System.out.println("接收前端发起的JSON数据请求，后续要查询MySQL数据......");
        List<Map<String, Objects>> data = viewMapper.getAreaData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getSalRangeData")
    public Result getSalRangeData() {
        System.out.println("收到前端的薪资信息JSON数据请求,查取后端MySQL数 据");
        List<Map<String, Objects>> data = viewMapper.getSalRangeData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getInstryData")
    public Result getInstryData() {
        System.out.println("收到前端的行业JSON信息请求，查取后端MySQL数据");
        List<Map<String, Objects>> data = viewMapper.getInstryData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getJobItemData")
    public Result getJobItemData() {
        System.out.println("收到前端的热门职位JSON信息请求，查取后端MySQL数据");
        List<Map<String, Objects>> data = viewMapper.getJobItemData();
        Result result = Result.success(data);
        return result;
    }
    @RequestMapping("/getJobMChange")
    public Result getJobMChange(){
        System.out.println("接收前端发起的岗位数据JSON请求，查询mysql将数据返回");
        List<Map<String, Object>> data = viewMapper.getJobMChange();
        Result result = Result.success(data);
        return result;
    }
}