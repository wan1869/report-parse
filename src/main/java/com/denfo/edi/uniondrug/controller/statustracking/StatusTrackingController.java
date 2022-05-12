package com.denfo.edi.uniondrug.controller.statustracking;

import com.denfo.edi.uniondrug.entity.StatusTracking;
import com.denfo.edi.uniondrug.entity.RespBean;
import com.denfo.edi.uniondrug.entity.RespPageBean;
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
@RequestMapping("/st/basic")
public class StatusTrackingController {
    @Autowired
    StatusTrackingService statusTrackingService;


    @GetMapping("/")
    public RespPageBean getStatusTrackingByPage(@RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "10") Integer size, StatusTracking statusTracking, Date[] createDTScope) {
        return statusTrackingService.getStatusTrackingByPage(page, size, statusTracking,createDTScope);
    }

    @PostMapping("/")
    public RespBean addST(@RequestBody StatusTracking st) {
        if (statusTrackingService.addST(st) == 1) {
            return RespBean.ok("添加成功!");
        }
        return RespBean.error("添加失败!");
    }

    @DeleteMapping("/{id}")
    public RespBean deleteSTByEid(@PathVariable Integer id) {
        if (statusTrackingService.deleteStatusTrackingByEid(id) == 1) {
            return RespBean.ok("删除成功!");
        }
        return RespBean.error("删除失败!");
    }

    @PutMapping("/")
    public RespBean updateStatusTracking(@RequestBody StatusTracking st) {
        if (statusTrackingService.updateST(st) == 1) {
            return RespBean.ok("更新成功!");
        }
        return RespBean.error("更新失败!");
    }


    @GetMapping("/{id}")
    public RespBean interfaceStatusTracking(@PathVariable Integer id) {
        if (statusTrackingService.interfaceStatusTrackingById(id) == 1) {
            return RespBean.ok("接口同步成功!");
        }
        return RespBean.error("接口同步失败!");
    }


    @GetMapping("/export")
    public ResponseEntity<byte[]> exportData() {
        List<StatusTracking> list = (List<StatusTracking>) statusTrackingService.getStatusTrackingByPage(null, null, new StatusTracking(),null).getData();
        return POIUtils.ST2Excel(list);
    }

    @PostMapping("/import")
    public RespBean importData(MultipartFile file) throws IOException {
        List<StatusTracking> list = POIUtils.excel2ST(file);
        if (statusTrackingService.addSTs(list) == list.size()) {
            return RespBean.ok("上传成功");
        }
        return RespBean.error("上传失败");
    }
}
