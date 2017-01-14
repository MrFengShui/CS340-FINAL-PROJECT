package com.thermofisher.flowci.tool.data;

import com.thermofisher.flowci.model.SampleDataModel;

import java.util.ArrayList;
import java.util.List;

class SSCDataParser extends DataParser {

    private DataParser fileManager;

    private List<Float> dataList;

    @Override
    public List<Float> parseData(List<SampleDataModel> dataModelList) {
        dataList = new ArrayList<Float>();

        for (SampleDataModel dataItem : dataModelList) {
            dataList.add(dataItem.getSSCData());
        }

        return dataList;
    }

}
