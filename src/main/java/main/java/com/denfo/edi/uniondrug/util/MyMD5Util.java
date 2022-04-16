package main.java.com.denfo.edi.uniondrug.util;

import java.security.MessageDigest;

class MyMD5Util {
    //盐，用于混交md5
    public static String encrypt(String dataStr, String salt) {
        try {
            dataStr = dataStr + salt;
            MessageDigest m = MessageDigest.getInstance("MD5");
            m.update(dataStr.getBytes("UTF8"));
            byte s[] = m.digest();
            String result = "";
            for (int i = 0; i < s.length; i++) {
                result += Integer.toHexString((0x000000FF & s[i]) | 0xFFFFFF00).substring(6);
            }
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }
}