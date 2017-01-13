package com.thermofisher.flowci;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

import com.thermofisher.flowci.tool.DirectoryFactory;
import com.thermofisher.flowci.tool.FileTableFactory;

public class MainManageActivity extends Activity {

    private FileTableFactory tableFactory;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_manage);
        initTableContent();
    }

    private void initTableContent() {
        DirectoryFactory directoryFactory = DirectoryFactory.getDirectoryInstance(MainManageActivity.this);
        String dirPath = directoryFactory.getHomeDirectory();
        TableLayout table = (TableLayout) findViewById(R.id.flowci_file_list_table);
        tableFactory = FileTableFactory.getTableFactoryInstance(MainManageActivity.this, table);
        tableFactory.buildTableContent(dirPath);
    }

}
