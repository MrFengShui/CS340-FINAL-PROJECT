package com.thermofisher.flowci.tool.plot;

import android.annotation.SuppressLint;
import android.graphics.Color;

import com.github.mikephil.charting.charts.ScatterChart;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.ScatterData;
import com.github.mikephil.charting.interfaces.datasets.IScatterDataSet;
import com.thermofisher.flowci.tool.data.CSVDataFileManager;
import com.thermofisher.flowci.tool.data.DataType;

import java.util.List;

public class DataPlotFactory {

    @SuppressLint("StaticFieldLeak")
    private static DataPlotFactory plotFactory;

    private CSVDataFileManager csvFileManager;
    private DataPlotCollector plotCollector;

    private IScatterDataSet dataSet;
    private ScatterData scatterData;
    private List<Float> dataList;
    private List<Entry> entryList;

    private DataPlotFactory(String filePath) {
        csvFileManager = CSVDataFileManager.getCSVFileManagerInstance(filePath);
        plotCollector = new DataPlotCollector();
    }

    public void plotFSCData(ScatterChart chart) {
        dataList = csvFileManager.fetchData(DataType.FSC);
        entryList = plotCollector.fillData(dataList);
        /*Plot FSC Data*/
        dataSet = plotCollector.fillScatterDataSet(entryList, "FSC", ScatterChart.ScatterShape.CIRCLE, Color.GREEN);
        scatterData = new ScatterData(dataSet);
        chart.setData(scatterData);
        chart.invalidate();
    }

    public void plotSSCData(ScatterChart chart) {
        dataList = csvFileManager.fetchData(DataType.SSC);
        entryList = plotCollector.fillData(dataList);
        /*Plot SSC Data*/
        dataSet =plotCollector.fillScatterDataSet(entryList, "SSC", ScatterChart.ScatterShape.SQUARE, Color.BLUE);
        scatterData = new ScatterData(dataSet);
        chart.setData(scatterData);
        chart.invalidate();
    }

    public static DataPlotFactory getPlotFactoryInstance(String filePath) {
        if (plotFactory == null) {
            plotFactory = new DataPlotFactory(filePath);
        }

        return plotFactory;
    }

}
