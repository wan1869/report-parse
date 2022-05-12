package com.denfo.edi.uniondrug.util;

import com.denfo.edi.uniondrug.entity.Hr;
import org.springframework.security.core.context.SecurityContextHolder;


public class HrUtils {
    public static Hr getCurrentHr() {
        return ((Hr) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
    }
}
