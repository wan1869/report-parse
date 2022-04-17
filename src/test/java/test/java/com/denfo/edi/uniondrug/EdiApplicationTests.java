package test.java.com.denfo.edi.uniondrug;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.denfo.edi.uniondrug.EdiApplication;
import com.denfo.edi.uniondrug.dao.InterfaceLogDao;
import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.util.Sign;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest(classes = EdiApplication.class)
class EdiApplicationTests {
	@Autowired
	private InterfaceLogDao interfaceDao;


	@Test
	void contextLoads() {
		System.out.println("Hello world test!!!");
	}
	@Test
	public void testqueryLogs() {
		InterfaceLog log = interfaceDao.queryLog(1);
		System.out.println(log.getMethod());
		JSONObject requestJson = JSON.parseObject(log.getRequest());
		String sign = Sign.getSign(requestJson);
	}
	@Test
	public void testinsertLog() {
		InterfaceLog log = new InterfaceLog();
		log.setMethod("patientInfo");
		log.setStatus(1);
		log.setRequest("requesttest");
		log.setResponse("responsetest");
		Date date = new Date();
		log.setCreateDT(date);
		log.setUpdateDT(date);
		interfaceDao.insertLog(log);
	}

	@Test
	public void testupdateLog() {
		InterfaceLog log = new InterfaceLog();
		log.setId(1);
		log.setMethod("patientInfo2");
		log.setStatus(0);
		log.setRequest("requesttest");
		log.setResponse("responsetest");
		Date date = new Date();
		log.setCreateDT(date);
		log.setUpdateDT(date);
		interfaceDao.updateLog(log);
	}

}
