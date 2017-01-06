package com.thermofisher.flowci;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import java.io.File;

public class FileChooserActivity extends Activity {

    private Intent intent;

    private String[] fileNames = {};

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_file_chooser);
        listAllFiles();
        handleEvents();
    }

    private void handleEvents() {
        Button returnButton = (Button) findViewById(R.id.flowci_return_main_button);
        returnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (intent == null) {
                    intent = new Intent();
                }

                intent.setClass(FileChooserActivity.this, MainPlotActivity.class);
                startActivity(intent);
            }
        });
    }

    private void listAllFiles() {
        @SuppressLint("SdCardPath")
        File file = new File("/sdcard/ThermoFisher");
        boolean flag = false;

        if (!file.exists()) {
            flag = file.mkdir();
        }

        if (flag || file.exists()) {
            File[] fileList = file.listFiles();

            if (fileList.length > 0) {
                fileNames = new String[fileList.length];

                for (int i = 0; i < fileList.length; i++) {
                    fileNames[i] = fileList[i].getName();
                }
            }

            ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_expandable_list_item_1, fileNames);
            ListView listView = (ListView) findViewById(R.id.flowci_fcs_file_listview);
            listView.setAdapter(adapter);
        }
    }

}
