package com.mindful;

import java.util.ArrayList;

import android.content.Context;
import android.content.Intent;

public class LogSink {

	private ArrayList<LogEvent> mLogs;
	
	public LogSink() {
		mLogs = new ArrayList<LogEvent>();
	}

	/**
	 * Log sink instance.
	 */
	private static LogSink sInstance;

	public synchronized static LogSink getInstance() {
		if (sInstance == null)
			sInstance = new LogSink();
		return sInstance;
	}

	public synchronized void addLogForUpload(LogEvent event) {
		mLogs.add(event);
	}

	public synchronized ArrayList<LogEvent> getPendingLogs() {
		ArrayList<LogEvent> events = mLogs;
		mLogs = null;
		return events;
	}

	public synchronized void uploadLogs(Context context) {
		context.startService(new Intent(context, LogUploaderService.class));
	}
	
}
