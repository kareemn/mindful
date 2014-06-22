package mindful.util;

import com.mindful.LogEvent;
import com.mindful.LogSink;

public class Log {
	public static String VERBOSE_LEVEL = "v";

    public static void v(final String tag, final String message) {
    	android.util.Log.v(tag, message);
        beMindful(VERBOSE_LEVEL, tag, message);
    }

	/**
	 * Store logs to be uploaded by {@link LogUploaderService}
	 * @param tag
	 * @param message
	 */
    private static void beMindful(final String level, final String tag, final String message) {
    	Long tsLong = System.currentTimeMillis()/1000;
    	String ts = tsLong.toString();
    	LogEvent event = new LogEvent(ts, level, tag, message);
    	LogSink.getInstance().addLogForUpload(event);
    }
}
