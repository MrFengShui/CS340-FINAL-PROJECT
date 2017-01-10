package com.thermofisher.flowci;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TabHost;
import android.widget.TabHost.TabSpec;

import com.github.mikephil.charting.charts.ScatterChart;
import com.thermofisher.flowci.event.DataPlotClickListener;
import com.thermofisher.flowci.event.IntentToClickListener;
import com.thermofisher.flowci.tool.DirectoryFactory;
import com.thermofisher.flowci.tool.plot.DataPlotFactory;

import java.io.File;

public class MainPlotActivity extends Activity {

    private View.OnClickListener clickListener;

    private ScatterChart scatterChart;
    private ScatterChart[] scatterCharts;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_plot);
        initTabHost();
        initScatterChart();
        handleBrowseEvent();
        handlePlotEvent();
    }

    private void initTabHost() {
        TabHost tabHost = (TabHost) findViewById(android.R.id.tabhost);
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

    private void initScatterChart() {
        if (scatterCharts == null) {
            scatterCharts = new ScatterChart[4];
        }

        scatterChart = (ScatterChart) findViewById(R.id.flowci_fsc_scatter_chart);
        scatterChart.setNoDataText("No FSC Data Found");
        scatterChart.setNoDataTextColor(Color.BLUE);
        scatterChart.invalidate();
        scatterCharts[0] = scatterChart;

        scatterChart = (ScatterChart) findViewById(R.id.flowci_ssc_scatter_chart);
        scatterChart.setNoDataText("No SSC Data Found");
        scatterChart.setNoDataTextColor(Color.GREEN);
        scatterChart.invalidate();
        scatterCharts[1] = scatterChart;
    }

    private void handleBrowseEvent() {
        clickListener = new IntentToClickListener(MainPlotActivity.this, FileChooserActivity.class);
        Button browseButton = (Button) findViewById(R.id.flowci_file_browse_button);
        browseButton.setOnClickListener(clickListener);
    }

    private void handlePlotEvent() {
        DirectoryFactory factory = DirectoryFactory.getDirectoryInstance(MainPlotActivity.this);
        String filePath = factory.getHomeDirectory() + File.separator + "CC4_067_BM.csv";
        clickListener = new DataPlotClickListener(scatterCharts, filePath);
        Button plotButton = (Button) findViewById(R.id.flowci_data_plot_button);
        plotButton.setOnClickListener(clickListener);
    }

}
