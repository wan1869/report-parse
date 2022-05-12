package com.denfo.edi.uniondrug.controller.registerplan;

import com.denfo.edi.uniondrug.entity.InterfaceLog;
import com.denfo.edi.uniondrug.entity.RespBean;
import com.denfo.edi.uniondrug.entity.RespPageBean;
import com.denfo.edi.uniondrug.entity.StatusTracking;
import com.denfo.edi.uniondrug.service.InterfaceLogService;
import com.denfo.edi.uniondrug.service.StatusTrackingService;
import com.denfo.edi.uniondrug.util.POIUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/rp/basic")
public class RegisterPlanController {
    @Autowired
    InterfaceLogService interfaceLogService;


    @GetMapping("/")
    public RespPageBean getInterfaceLogByPage(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer size, InterfaceLog interfaceLog, Date[] createDTScope) {
        return interfaceLogService.getInterfaceLogByPage(page, size, interfaceLog,createDTScope);
    }

    @PostMapping("/")
    public RespBean addRP(@RequestBody InterfaceLog interfaceLog) {
        if (interfaceLogService.addRP(interfaceLog) == 1) {
            return RespBean.ok("添加成功!");
        }
        return RespBean.error("添加失败!");
    }

    @DeleteMapping("/{id}")
    public RespBean deleteRPByid(@PathVariable Integer id) {
        if (interfaceLogService.deleteInterfaceLogById(id) == 1) {
            return RespBean.ok("删除成功!");
        }
        return RespBean.error("删除失败!");
    }

    @PutMapping("/")
    public RespBean updateInterfaceLog(@RequestBody InterfaceLog interfaceLog) {
        if (interfaceLogService.updateRP(interfaceLog) == 1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }


    @GetMapping("/{id}")
    public RespBean interfaceRP(@PathVariable Integer id) {
        if (interfaceLogService.interfaceRegisterPlanById(id) == 1) {
            return RespBean.ok("接口同步成功!");
        }
        return RespBean.error("接口同步失败!");

    }


    @GetMapping("/export")
    public ResponseEntity<byte[]> exportData() {
        List<InterfaceLog> list = (List<InterfaceLog>) interfaceLogService.getInterfaceLogByPage(null, null, new InterfaceLog(),null).getData();
        return POIUtils.RP2Excel(list);
    }


}