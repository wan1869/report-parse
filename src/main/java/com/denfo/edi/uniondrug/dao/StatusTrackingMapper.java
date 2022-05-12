package com.denfo.edi.uniondrug.dao;

import com.denfo.edi.uniondrug.entity.StatusTracking;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

public interface StatusTrackingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StatusTracking record);

    int insertSelective(StatusTracking record);

    StatusTracking selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StatusTracking record);

    int updateByPrimaryKey(StatusTracking record);

    List<StatusTracking> getStatusTrackingByPage(@Param("page") Integer page, @Param("size") Integer size, @Param("st") StatusTracking statusTracking,@Param("createDTScope") Date[] createDTScope);

    Long getTotal(@Param("st") StatusTracking statusTracking,@Param("createDTScope") Date[] createDTScope);


    Integer addSTs(@Param("list") List<StatusTracking> list);

    StatusTracking getStatusTrackingById(Integer id);


}