package com.zsp.view.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Mapper
@Component
public interface ViewMapper {
    @Select("select * from job_area")
    List<Map<String, Objects>> getAreaData();
    @Select("select * from job_sal_range")
    List<Map<String, Objects>> getSalRangeData();
    @Select("select ind_name, value from job_instry where job_key = '大数 据' order by value desc limit 7")
    List<Map<String, Objects>> getInstryData();
    @Select("select job_name,count,(select sum(count) from job_item2) total from job_item2 limit 6;")
    List<Map<String, Objects>> getJobItemData();
    @Select("select day date, count, month type from job_mchange where month in ('12','01');")
    List<Map<String, Object>> getJobMChange();
}