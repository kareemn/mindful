package com.mindful;

public class LogConfig {
	/**
	 * Max number of MB's of logs allowed for upload for this device.
	 */
	private int maxMb;

	public int setLogConfigFromServer() {
		this.maxMb = 5;
		return maxMb;
	}
}
