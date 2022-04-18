package com.denfo.edi.uniondrug.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.denfo.edi.uniondrug.dao.InterfaceLogDao;
import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.util.Sign;
import com.denfo.edi.uniondrug.service.ApiDataprocessingService;
import com.denfo.edi.uniondrug.util.HttpPostUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author wan
 * @version 1.0
 * @date 2022/4/16 15:31
 */

@Service
public class ApiDataprocessingServiceImpl implements ApiDataprocessingService {

    @Autowired
    private InterfaceLogDao interfaceLogDao;

    @Override
    public String getHttpPostData(String method, String httpUrl, String testSign) {

        String data = "";
        Integer num = 1;
        Boolean flag = true;
        InterfaceLog interfaceLog = interfaceLogDao.requestQuery(method, 0);
        if (interfaceLog ==  null) {
            return "Warning: " + method + "接口无请求参数！";
        }
        JSONObject requestJson = JSON.parseObject(interfaceLog.getRequest());
        if (requestJson.isEmpty()) {
            return "Warning: " + method + "接口无请求！";
        }

        while (flag) {
            try {
                System.out.println(requestJson);
                String sign = Sign.getSign(requestJson);
                Date date = new Date();
                SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String currentTime = dateFormat.format(date);
                requestJson.put("time", currentTime);
                // 测试使用固定sign
//                sign = testSign;
                requestJson.put("sign", sign);
                // System.out.println(sign);
                String result = HttpPostUtil.getPostResult(httpUrl, requestJson.toString());
                // System.out.println(result);
                JSONObject jsonObject = JSONObject.parseObject(result);
               System.out.println(jsonObject.toString());
                 interfaceLog.setResponse(result);
                interfaceLog.setStatus(1);
                if (method == "trackingStatus" || requestJson.getInteger("num") == 1) {
                    interfaceLogDao.updateLog(interfaceLog);
                }
                else {
                    interfaceLog.setRequest(requestJson.toString());
                    interfaceLogDao.insertLog(interfaceLog);
                }
                data = jsonObject.getString("data");
                // System.out.println(data);
                Integer count = jsonObject.getInteger("count");
                Integer size = requestJson.getInteger("size");
                System.out.println("count = " + count);

                if (count != null) {
                    if (count <= size || num >= (count/(size * 1.0))) {
                        flag = false;
                    }
                    else {
                        num++;
                        requestJson.replace("num", num.toString());
                        requestJson.remove("time");
                        requestJson.remove("sign");

                    }
                }
                else {
                    flag = false;
                }

                if (method == "trackingStatus") {
                    data = jsonObject.toString();
                    flag = false;
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return data;
    }

}
