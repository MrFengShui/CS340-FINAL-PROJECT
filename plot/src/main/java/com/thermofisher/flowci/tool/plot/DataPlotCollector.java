package com.thermofisher.flowci.tool.plot;

import com.github.mikephil.charting.charts.ScatterChart;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.ScatterDataSet;
import com.github.mikephil.charting.interfaces.datasets.IScatterDataSet;

import java.util.ArrayList;
import java.util.List;

public class DataPlotCollector {

    private List<Entry> entryList;
    private List<IScatterDataSet> scatterList;

    public DataPlotCollector() {
        if (scatterList == null) {
            scatterList = new ArrayList<>();
        } else {
            scatterList.clear();
        }
    }

    public List<Entry> fillData(List<Float> dataList) {
        if (entryList == null) {
            entryList = new ArrayList<>();
        } else {
            entryList.clear();
        }

        for (float dataItem : dataList) {
            entryList.add(new Entry(dataItem, dataItem));
        }

        return entryList;
    }

    public IScatterDataSet fillScatterDataSet(List<Entry> entryList, String name, ScatterChart.ScatterShape shape, int color) {
        ScatterDataSet scatterDataSet = new ScatterDataSet(entryList, name);
        scatterDataSet.setScatterShape(shape);
        scatterDataSet.setColor(color);
        scatterDataSet.setScatterShapeSize(8f);
        return scatterDataSet;
    }

    public List<IScatterDataSet> fillScatterDataSetList(List<Entry> entryList, String name, ScatterChart.ScatterShape shape, int color) {
        ScatterDataSet scatterDataSet = new ScatterDataSet(entryList, name);
        scatterDataSet.setScatterShape(shape);
        scatterDataSet.setColor(color);
        scatterDataSet.setScatterShapeSize(10.0f);
        scatterList.add(scatterDataSet);
        return scatterList;
    }

}
