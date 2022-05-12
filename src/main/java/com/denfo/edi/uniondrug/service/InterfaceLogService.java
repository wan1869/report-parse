package com.denfo.edi.uniondrug.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.denfo.edi.uniondrug.config.PropertiesConfig;
import com.denfo.edi.uniondrug.dao.InterfaceLogMapper;
import com.denfo.edi.uniondrug.dao.StatusTrackingMapper;
import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.entity.RespPageBean;
import com.denfo.edi.uniondrug.entity.StatusTracking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service
public class InterfaceLogService {
    @Autowired
    InterfaceLogMapper interfaceLogMapper;

    @Autowired
    private PropertiesConfig propertiesConfig;
    @Autowired
    private ApiDataprocessingService dataprocessingService;


    public final static Logger logger = LoggerFactory.getLogger(InterfaceLogService.class);


    public RespPageBean getInterfaceLogByPage(Integer page, Integer size, InterfaceLog interfacelog, Date[] createDTScope) {
        if (page != null && size != null) {
            page = (page - 1) * size;
        }
        if(interfacelog == null){
            interfacelog = new InterfaceLog();
        }
        List<InterfaceLog> data = interfaceLogMapper.getInterfaceLogByPage(page, size, interfacelog, createDTScope);
        Long total = interfaceLogMapper.getTotal(interfacelog, createDTScope);
        RespPageBean bean = new RespPageBean();
        bean.setData(data);
        bean.setTotal(total);
        return bean;
    }

    public Integer addRP(InterfaceLog interfaceLog) {

        int result = interfaceLogMapper.insertSelective(interfaceLog);

        return result;
    }

    public Integer deleteInterfaceLogById(Integer id) {
        return interfaceLogMapper.deleteByPrimaryKey(id);
    }

    public Integer updateRP(InterfaceLog interfaceLog) {
        return interfaceLogMapper.updateByPrimaryKeySelective(interfaceLog);
    }

    public Integer addRPs(List<InterfaceLog> list) {
        return interfaceLogMapper.addRPs(list);
    }

    public InterfaceLog getInterfaceLogById(Integer id) {
        return interfaceLogMapper.getInterfaceLogById(id);
    }

    public int interfaceRegisterPlanById(Integer id) {
        InterfaceLog log=interfaceLogMapper.getInterfaceLogById(id);
        log.setStatus(0);
        String httpUrl = propertiesConfig.getUrl()+log.getMethod();
        String method = log.getMethod();
        String sign = propertiesConfig.getSign();
        interfaceLogMapper.updateLog(log);
        String result = dataprocessingService.getHttpPostData(method, httpUrl, sign);
        if(result!="" && result !=null) {
            return 1;
        }else{
            return 0;
        }
    }
}
