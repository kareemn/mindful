package com.mindful;

public class LogEvent {
	private String timestamp;
	private String level;
	private String tag;
	private String message;

	public LogEvent(String timestamp, String level, String tag, String message) {
		this.timestamp = timestamp;
		this.level = level;
		this.tag = tag;
		this.message = message;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public String getLevel() {
		return level;
	}

	public String getTag() {
		return tag;
	}

	public String getMessage() {
		return message;
	}
}

