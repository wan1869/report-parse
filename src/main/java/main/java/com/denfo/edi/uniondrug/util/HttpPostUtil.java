package main.java.com.denfo.edi.uniondrug.util;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import org.apache.http.util.TextUtils;

/**
 * @author wan
 * @version 1.0
 * @date 2022/4/16 15:10
 */

public class HttpPostUtil {

    public static String getPostResult(String strURL, String params) {
        System.out.println(strURL);
        System.out.println(params);

        Integer retryCount = 0;
        String result = "";
        BufferedReader reader = null;
        // StringBuilder buffer = new StringBuilder();

        while (retryCount < 3) {

            try {

                retryCount++;
                URL url = new URL(strURL);// 创建连接

                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setDoOutput(true);
                connection.setDoInput(true);
                connection.setUseCaches(false);
                connection.setInstanceFollowRedirects(true);
                connection.setRequestMethod("POST"); // 设置请求方式
                connection.setRequestProperty("Accept", "application/json"); // 设置接收数据的格式
                connection.setRequestProperty("Content-Type", "application/json"); // 设置发送数据的格式
                connection.connect();

                if (params != null && !TextUtils.isEmpty(params)) {

                    // byte[] writebytes = params.getBytes();
                    // 设置文件长度
                    //   connection.setRequestProperty("Content-Length", String.valueOf(writebytes.length));

                    OutputStream outwritestream = connection.getOutputStream();
                    outwritestream.write(params.getBytes());
                    outwritestream.flush();
                    outwritestream.close();
                }

                int responseCode = connection.getResponseCode();
                InputStream inputStream = null;

                if (responseCode == 200) {
                    inputStream = new BufferedInputStream(connection.getInputStream());
                    retryCount = 3;
                } else {
                    inputStream = new BufferedInputStream(connection.getErrorStream());
                    if (retryCount < 3) {
                        continue;
                    }
                }

                reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));

                String line;
                while ((line = reader.readLine()) != null) {
                    result += line;
                }

            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (reader != null) {
                    try {
                        reader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return result;
    }

}
