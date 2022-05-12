package com.denfo.edi.uniondrug.dao;

import com.denfo.edi.uniondrug.entity.InterfaceLog;
import org.apache.ibatis.annotations.*;

import java.util.Date;
import java.util.List;

//@Mapper
public interface InterfaceLogMapper {

//    @Select("select * from interfaceLog where id = #{id}")
    public InterfaceLog queryLog(int id);

//    @Insert("INSERT INTO interfacelog(method,status,request,response) VALUES(#{method},#{status}, #{request}, #{response})")
    public void insertLog(InterfaceLog log);

//    @Update("update interfacelog set method = #{method},status=#{status},request=#{request}, response=#{response} where id = #{id}")
    public void updateLog(InterfaceLog log);

//    @Select("select * from interfaceLog where method = #{method} and status = #{status}")
    public InterfaceLog requestQuery(@Param("method")String method, @Param("status")Integer status);

    int deleteByPrimaryKey(Integer id);

    int insert(InterfaceLog record);

    int insertSelective(InterfaceLog record);

    InterfaceLog selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(InterfaceLog record);

    int updateByPrimaryKey(InterfaceLog record);

    List<InterfaceLog> getInterfaceLogByPage(@Param("page") Integer page, @Param("size") Integer size, @Param("rp") InterfaceLog interfaceLog, @Param("createDTScope") Date[] createDTScope);

    Long getTotal(@Param("rp") InterfaceLog interfaceLog,@Param("createDTScope") Date[] createDTScope);


    Integer addRPs(@Param("list") List<InterfaceLog> list);

    InterfaceLog getInterfaceLogById(Integer id);
}
