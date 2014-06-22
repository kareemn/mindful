package com.mindful;

import java.util.ArrayList;

import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;

import android.app.IntentService;
import android.content.Intent;
import android.net.http.AndroidHttpClient;

public class LogUploaderService extends IntentService {

	public LogUploaderService() {
		super("LogUploaderService");
	}

	private static String MINDFUL_LOGS_ENDPOINT = "http://mindful-api.appspot.com/";
	private final AndroidHttpClient httpClient = AndroidHttpClient.newInstance("LogUploaderClient");
   
    public void flushLogs(final ArrayList<LogEvent> logEvents) {
    	try {
		    String postBody = HttpUtil.encodeJson(logEvents);
		
		    StringEntity postEntity = new StringEntity(postBody, "UTF-8");
		    postEntity.setContentType("application/json");
		
		    HttpPost httpPost = new HttpPost(MINDFUL_LOGS_ENDPOINT);
		    httpPost.setEntity(postEntity);
		    httpPost.setHeaders(HttpUtil.getAndroidHeaders(LogUploaderService.this));
		
		    httpClient.execute(httpPost);
        } catch (Exception ex) {
                throw new RuntimeException(ex);
        }
    }

	@Override
	protected void onHandleIntent(Intent intent) {
		flushLogs(LogSink.getInstance().getPendingLogs());
	}
}
