package test.java.com.denfo.edi.uniondrug;

import com.denfo.edi.uniondrug.EdiApplication;
import com.denfo.edi.uniondrug.dao.InterfaceLogMapper;
import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.entity.RespPageBean;

import com.denfo.edi.uniondrug.service.StatusTrackingService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest(classes = EdiApplication.class)
class EdiApplicationTests {
	@Autowired
	private InterfaceLogMapper interfaceDao;


	@Autowired
	private StatusTrackingService statusTrackingService;


	@Test
	public void testgetStatusTracking() {

		statusTrackingService.getStatusTrackingByPage(1,10,null,null);
	}


	@Test
	void contextLoads() {
		System.out.println("Hello world test!!!");
	}
	@Test
	public void testqueryLogs() {
		InterfaceLog log = interfaceDao.queryLog(1);
//		System.out.println(log.getMethod());
//		JSONObject requestJson = JSON.parseObject(log.getRequest());
//		String sign = Sign.getSign(requestJson);
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
		log.setStatus(1);
		log.setRequest("requesttest");
		log.setResponse("responsetest");
		Date date = new Date();
		log.setCreateDT(date);
		log.setUpdateDT(date);
		interfaceDao.updateLog(log);
	}




}
