package com.mindful;

import java.util.ArrayList;

import org.apache.http.Header;
import org.apache.http.message.BasicHeader;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.os.Build;

public class HttpUtil {
    public static Header[] getAndroidHeaders(final Context context) {
        int versionCode = -1;
        try {
                PackageManager manager = context.getPackageManager();
                String packageName = context.getPackageName();
                PackageInfo info = manager.getPackageInfo(packageName, 0);
                versionCode = info.versionCode;
        } catch (NameNotFoundException nnf) {
        }
        return new Header[] {
        		new BasicHeader("X-Android-Model", Build.MODEL),
        		new BasicHeader("X-Android-Sdk", Integer.toString(Build.VERSION.SDK_INT)),
        		new BasicHeader("X-Android-AppVersion", Integer.toString(versionCode))
        };
    }

    public static String encodeJson(final ArrayList<LogEvent> logEvents) throws JSONException {
        JSONArray array = new JSONArray();
        for (LogEvent event : logEvents) {
                JSONObject eventObj = new JSONObject();
                eventObj.put("ts", event.getTimestamp());
                eventObj.put("lvl", event.getLevel());
                eventObj.put("tag", event.getTag());
                eventObj.put("msg", event.getMessage());
                array.put(eventObj);
        }
        JSONObject obj = new JSONObject();
        obj.put("events", array);
        return obj.toString();
    }
}
