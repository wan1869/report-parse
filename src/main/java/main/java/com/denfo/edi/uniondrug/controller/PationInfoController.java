package main.java.com.denfo.edi.uniondrug.controller;

import main.java.com.denfo.edi.uniondrug.dao.InterfaceLogDao;
import main.java.com.denfo.edi.uniondrug.entity.InterfaceLog;
import main.java.com.denfo.edi.uniondrug.service.ApiDataprocessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PationInfoController {

    @Autowired
    private ApiDataprocessingService dataprocessingService;

    @RequestMapping("patientInfo")
    public String patientInfo(){
        String httpUrl = "http://ps-hs-api.turboradio.cn/df/getPatientInfo";
        String method = "getPatientInfo";
        String testSign = "2672de2c1401264b";
        String result = dataprocessingService.getHttpPostData(method, httpUrl,testSign);
        // System.out.println(result);
        return result;
    }

    @RequestMapping("registerPlan")
    public String registerPlan(){
        String httpUrl = "http://ps-hs-api.turboradio.cn/df/getRegisterPlan";
        String method = "getRegisterPlan";
        String testSign = "2672de2c1401264b";
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }

    @RequestMapping("trackingStatus")
    public String trackingStatus(){
        String httpUrl = "http://ps-hs-api.turboradio.cn/df/trackingStatus";
        String method = "trackingStatus";
        String testSign = "3e84a1c234d367e2";
        String result = dataprocessingService.getHttpPostData(method, httpUrl, testSign);
        return result;
    }
}
