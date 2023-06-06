package com.zsp.view.controller;

import com.zsp.view.bean.Result;
import com.zsp.view.mapper.ViewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Objects;


/**
 * 用来接收前端数据请求的controller
 */

@RestController
@RequestMapping("/view")
@ResponseBody
public class ViewController {
    @Autowired(required = false)

    private ViewMapper viewMapper;
    @RequestMapping("/getAreaData")
    public Result getAreaData() {
        System.out.println("接收前端发起的JSON数据请求，后续需要查询mysql将数据返回");
        List<Map<String,Objects>> data=viewMapper.getAreaData();
        Result result=Result.success(data);
        return result;
    }
}


