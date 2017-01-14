package com.thermofisher.flowci;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import com.thermofisher.flowci.event.IntentBackClickListener;
import com.thermofisher.flowci.tool.DirectoryFactory;

import java.io.File;

public class FileChooserActivity extends Activity {

    private File file;
    private TextView textView;
    private View.OnClickListener clickListener;

    private String[] fileNames = {};

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_file_chooser);
        /**/
        DirectoryFactory directoryFactory = DirectoryFactory.getDirectoryInstance(FileChooserActivity.this);
        initWorkDirectory(directoryFactory.getRootDirectory(), DirectoryFactory.HOME_DIRECTORY);
        showCurrentDirectory(directoryFactory.getHomeDirectory());
        /**/
        handleReturnEvent();
        handleCreateEvent();
    }

    private void initWorkDirectory(String rootDir, String folderName) {
        file = new File(rootDir, folderName);

        if (!file.exists()) {
            boolean flag = file.mkdirs();

            if (!flag) {
                System.out.println("Create ThermoFisher Failed");
            }
        }

        textView = (TextView) findViewById(R.id.flowci_file_path_textview);
        textView.setText(file.getAbsolutePath());
    }

    private void handleReturnEvent() {
        Button returnButton = (Button) findViewById(R.id.flowci_return_main_button);
        clickListener = new IntentBackClickListener(FileChooserActivity.this, MainPlotActivity.class);
        returnButton.setOnClickListener(clickListener);
    }

    private void handleCreateEvent() {
        Button createButton = (Button) findViewById(R.id.flowci_new_folder_button);
        createButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CreateFolderDialog dialog = new CreateFolderDialog(FileChooserActivity.this);
                dialog.show();
                dialog.handleCreateEvent(textView.getText().toString());
                dialog.handleCancelEvent();
            }
        });
    }

    private void showCurrentDirectory(String directory) {
        file = new File(directory);

        if (file.exists()) {
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
