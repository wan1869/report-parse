package com.denfo.edi.uniondrug.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.denfo.edi.uniondrug.config.PropertiesConfig;
import com.denfo.edi.uniondrug.dao.InterfaceLogMapper;
import com.denfo.edi.uniondrug.dao.StatusTrackingMapper;
import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.entity.StatusTracking;
import com.denfo.edi.uniondrug.entity.RespPageBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service
public class StatusTrackingService {
    @Autowired
    StatusTrackingMapper statusTrackingMapper;

    @Autowired
    private InterfaceLogMapper interfaceDao;

    @Autowired
    private ApiDataprocessingService dataprocessingService;

    @Autowired
    private PropertiesConfig propertiesConfig;

    public final static Logger logger = LoggerFactory.getLogger(StatusTrackingService.class);


    public RespPageBean getStatusTrackingByPage(Integer page, Integer size, StatusTracking statusTracking, Date[] createDTScope) {
        if (page != null && size != null) {
            page = (page - 1) * size;
        }
        if(statusTracking == null){
            statusTracking = new StatusTracking();
        }
        List<StatusTracking> data = statusTrackingMapper.getStatusTrackingByPage(page, size, statusTracking, createDTScope);
        Long total = statusTrackingMapper.getTotal(statusTracking, createDTScope);
        RespPageBean bean = new RespPageBean();
        bean.setData(data);
        bean.setTotal(total);
        return bean;
    }

    public Integer addST(StatusTracking statusTracking) {

        int result = statusTrackingMapper.insertSelective(statusTracking);

        return result;
    }

    public Integer deleteStatusTrackingByEid(Integer id) {
        return statusTrackingMapper.deleteByPrimaryKey(id);
    }

    public Integer updateST(StatusTracking statusTracking) {
        return statusTrackingMapper.updateByPrimaryKeySelective(statusTracking);
    }

    public Integer addSTs(List<StatusTracking> list) {
        return statusTrackingMapper.addSTs(list);
    }

    public StatusTracking getStatusTrackingById(Integer id) {
        return statusTrackingMapper.getStatusTrackingById(id);
    }

    public int interfaceStatusTrackingById(Integer id) {
        StatusTracking st=statusTrackingMapper.getStatusTrackingById(id);
        InterfaceLog log = new InterfaceLog();
        log.setMethod("trackingStatus");
        log.setStatus(0);
        String s="{\"orderNo\":\"18438018014\",\"patIndexNo\":\"77\",\"statusCode\":\"reject\"}";
        JSONObject requestJsonObj = JSON.parseObject(s);
        requestJsonObj.put("orderNo",st.getOrderNo());
        requestJsonObj.put("patIndexNo",st.getPatIndexNo());
        requestJsonObj.put("statusCode",st.getStatus());
        log.setRequest(requestJsonObj.toJSONString());
        interfaceDao.insertLog(log);
        String httpUrl = propertiesConfig.getUrl()+"trackingStatus";
        String method = "trackingStatus";
        String sign = propertiesConfig.getSign();
        String result = dataprocessingService.getHttpPostData(method, httpUrl, sign);
        if(result!="" && result !=null) {
            return 1;
        }else{
            return 0;
        }
    }
}
