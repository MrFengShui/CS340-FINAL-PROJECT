package com.thermofisher.flowci.event;

import android.view.View;

import com.github.mikephil.charting.charts.ScatterChart;
import com.thermofisher.flowci.tool.plot.DataPlotFactory;

public class DataPlotClickListener implements View.OnClickListener {

    private ScatterChart[] scatterCharts;

    private String filePath;

    public DataPlotClickListener(ScatterChart[] scatterCharts, String filePath) {
        this.scatterCharts = scatterCharts;
        this.filePath = filePath;
    }

    @Override
    public void onClick(View v) {
        DataPlotFactory plotFactory = DataPlotFactory.getPlotFactoryInstance(filePath);
        plotFactory.plotFSCData(scatterCharts[0]);
        plotFactory.plotSSCData(scatterCharts[1]);
    }

}
