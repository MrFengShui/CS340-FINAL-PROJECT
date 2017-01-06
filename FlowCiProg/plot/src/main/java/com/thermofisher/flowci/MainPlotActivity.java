package com.thermofisher.flowci;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TabHost;
import android.widget.TabHost.TabSpec;

public class MainPlotActivity extends Activity {

    private Intent intent;
    private TabHost tabHost;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_plot);
        initTabHost();
        handleEvents();
    }

    private void handleEvents() {
        Button browseButton = (Button) findViewById(R.id.flowci_file_browse_button);
        browseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (intent == null) {
                    intent = new Intent();
                }

                intent.setClass(MainPlotActivity.this, FileChooserActivity.class);
                startActivity(intent);
            }
        });
    }

    private void initTabHost() {
        tabHost = (TabHost) findViewById(android.R.id.tabhost);
        tabHost.setup();

        TabSpec fscTabSpec = tabHost.newTabSpec("FSC Plot Tab").setIndicator("FSC Plot").setContent(R.id.tab1);
        tabHost.addTab(fscTabSpec);

        TabSpec sscTabSpec = tabHost.newTabSpec("SSC Plot Tab").setIndicator("SSC Plot").setContent(R.id.tab2);
        tabHost.addTab(sscTabSpec);

        TabSpec fl1TabSpec = tabHost.newTabSpec("FL1 Plot Tab").setIndicator("FL1 Plot").setContent(R.id.tab3);
        tabHost.addTab(fl1TabSpec);

        TabSpec fl2TabSpec = tabHost.newTabSpec("FL2 Plot Tab").setIndicator("FL2 Plot").setContent(R.id.tab4);
        tabHost.addTab(fl2TabSpec);

        tabHost.setOnTabChangedListener(new TabHost.OnTabChangeListener() {
            @Override
            public void onTabChanged(String tabId) {
                EditText editText = (EditText) findViewById(R.id.flowci_file_path_edittext);
                editText.setText(tabId);
            }
        });
    }

}
