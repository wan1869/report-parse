package com.denfo.edi.uniondrug.util;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Sign {
    // public static void main(String args[])
    // {
    //     getSign();
    // }

    public static String getSign(JSONObject jsonObject)
    {
        String key = "18db9fbecc7701646336562df6bd4dfa";//公共密钥key，由药联提供
        Map<String, String> params = new HashMap<>();
        // params.put("flag", "1");
        // params.put("size", "100");
        // params.put("num", "1");
        // params.put("lastUpdatedTime", "2022-04-12 08:08:45");
        for(Map.Entry<String, Object> entry : jsonObject.entrySet()){
            params.put(entry.getKey(), entry.getValue().toString());
        }
        Map<String, String> resultMap = sortMapByKey(params);
        // System.out.println(resultMap);
        String jsonOfParams = "";
        for(Map.Entry<String, String> entry : resultMap.entrySet()){
            String mapKey = entry.getKey();
            String mapValue = entry.getValue();
            jsonOfParams += ",\"" + mapKey + "\":\"" + mapValue + "\"";
        }
        jsonOfParams = "{" + jsonOfParams.substring(1) + "}";
        // System.out.println(jsonOfParams);
        jsonOfParams = MyMD5Util.encrypt(jsonOfParams, key);
        jsonOfParams = jsonOfParams.toLowerCase().substring(0, 16);
        System.out.println(jsonOfParams);
        return jsonOfParams;
    }

    public static Map<String, String> sortMapByKey(Map<String, String> map) {
        if (map == null || map.isEmpty()) {
            return null;
        }
        Map<String, String> sortMap = new TreeMap<String, String>(
                new MapKeyComparator());
        sortMap.putAll(map);
        return sortMap;
    }
}