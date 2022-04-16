package main.java.com.denfo.edi.uniondrug.util;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Sign {
    // public static void main(String args[])
    // {
    //     getSign();
    // }

    public static String getSign(Map<String, String> params)
    {
        String key = "test123";//公共密钥key，由药联提供
        // Map<String, String> params = new HashMap<>();
        // params = requestMap;
        Map<String, String> resultMap = sortMapByKey(params);
        String jsonOfParams = "";
        for(Map.Entry<String, String> entry : resultMap.entrySet()){
            String mapKey = entry.getKey();
            String mapValue = entry.getValue();
            jsonOfParams += ",\"" + mapKey + "\":\"" + mapValue + "\"";
        }
        jsonOfParams = "{" + jsonOfParams.substring(1) + "}";
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