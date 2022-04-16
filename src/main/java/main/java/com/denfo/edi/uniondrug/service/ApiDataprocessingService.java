package main.java.com.denfo.edi.uniondrug.service;

/**
 * @author wan
 * @version 1.0
 * @date 2022/4/16 15:26
 */

public interface ApiDataprocessingService {

    public String getHttpPostData(String method, String httpUrl, String testSign);

}
