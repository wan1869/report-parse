package com.denfo.edi.uniondrug.controller;

import com.denfo.edi.uniondrug.service.ApiDataprocessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PationInfoController {

    @Autowired
    private ApiDataprocessingService dataprocessingService;

    @RequestMapping("patientInfo")
    public String patientInfo(){
        String httpUrl = "http://ps-hs-api.uniondrug.cn/getPatientInfo";
        String method = "getPatientInfo";
        String testSign = "2672de2c1401264b";
        String result = dataprocessingService.getHttpPostData(method, httpUrl,testSign);
        return result;
    }

    @RequestMapping("registerPlan")
    public String registerPlan(){
        String httpUrl = "http://ps-hs-api.uniondrug.cn/getRegisterPlan";
        String method = "getRegisterPlan";
        String testSign = "2672de2c1401264b";
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }

    @RequestMapping("trackingStatus")
    public String trackingStatus(){
        String httpUrl = "http://ps-hs-api.uniondrug.cn/trackingStatus";
        String method = "trackingStatus";
        String testSign = "3e84a1c234d367e2";
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }
}
