package com.mindfulsample.mindfultestapp;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import mindful.util.Log;

public class MainActivity extends Activity {

	private static final String TAG = "TestApp.MainActivity";

	Button button1;
	Button button2;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		button1 = (Button)findViewById(R.id.button1);
		button1.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View v) {
				Log.v(TAG, "button 1 clicked");
			}
			
		});
		button2 = (Button)findViewById(R.id.button2);
		button2.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View v) {
				Log.v(TAG, "button 2 clicked");
			}
			
		});
		Log.v(TAG, "onCreate activity");
	}

}
