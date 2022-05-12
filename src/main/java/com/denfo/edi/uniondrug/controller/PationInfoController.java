package com.denfo.edi.uniondrug.controller;

import com.denfo.edi.uniondrug.config.PropertiesConfig;
import com.denfo.edi.uniondrug.service.ApiDataprocessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PationInfoController {

    @Autowired
    private ApiDataprocessingService dataprocessingService;
//    private String urls= "http://ps-hs-api.turboradio.cn/df/";//测试环境
//    private String urls= "http://ps-hs-api.uniondrug.net/df/";//RC环境
//    private String urls= "http://ps-hs-api.uniondrug.cn/df/";//RC环境

    @Autowired
    private PropertiesConfig propertiesConfig;


    @RequestMapping("patientInfo")
    public String patientInfo(){

        String httpUrl = propertiesConfig.getUrl() + "getPatientInfo";


        String method = "getPatientInfo";
        String testSign = propertiesConfig.getSign();
        System.out.println(httpUrl);
        System.out.println(testSign);
        String result = dataprocessingService.getHttpPostData(method, httpUrl,testSign);
        return result;
    }

    @RequestMapping("registerPlan")
    public String registerPlan(){

        String httpUrl = propertiesConfig.getUrl()+"getRegisterPlan";

        String method = "getRegisterPlan";
        String testSign = propertiesConfig.getSign();
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }

    @RequestMapping("trackingStatus")
    public String trackingStatus(){

        String httpUrl = propertiesConfig.getUrl()+"trackingStatus";

        String method = "trackingStatus";
        String testSign = propertiesConfig.getSign();
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }


}
