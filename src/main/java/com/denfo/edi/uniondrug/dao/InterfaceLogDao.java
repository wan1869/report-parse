package com.denfo.edi.uniondrug.dao;

import com.denfo.edi.uniondrug.entity.InterfaceLog;
import org.apache.ibatis.annotations.*;

@Mapper
public interface InterfaceLogDao {

    @Select("select * from interfaceLog where id = #{id}")
    public InterfaceLog queryLog(int id);

    @Insert("INSERT INTO interfacelog(method,status,request,response) VALUES(#{method},#{status}, #{request}, #{response})")
    public void insertLog(InterfaceLog log);

    @Update("update interfacelog set method = #{method},status=#{status},request=#{request}, response=#{response} where id = #{id}")
    public void updateLog(InterfaceLog log);

    @Select("select * from interfaceLog where method = #{method} and status = #{status}")
    public InterfaceLog requestQuery(@Param("method")String method, @Param("status")Integer status);

}
